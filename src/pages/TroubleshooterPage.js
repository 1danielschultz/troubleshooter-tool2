import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useTroubleshooter } from '../context/TroubleshooterContext';
import AgentInfoModal from '../components/AgentInfoModal';
import QuestionCard from '../components/QuestionCard';
import SolutionCard from '../components/SolutionCard';
import KnowledgeBasePanel from '../components/KnowledgeBasePanel';
import ResourcesPanel from '../components/ResourcesPanel';
import { sections } from '../data/troubleshooterData';

const PageContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainLayout = styled.div`
  flex: 1;
  display: flex;
  overflow: hidden;
`;

// Left Panel (History)
const HistoryPanel = styled.div`
  width: 33.333%;
  background-color: var(--bg-lighter);
  border-right: 2px solid var(--qbo-purple-primary);
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* To ensure content doesn't overflow */
`;

const HistoryHeader = styled.div`
  background-color: var(--header-bg);
  color: white;
  padding: 12px;
  border-bottom: 2px solid var(--qbo-purple-dark);
`;

const HistoryTitle = styled.h2`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  margin: 0;
  letter-spacing: 0.5px;
  color: var(--text-white);
`;

const ProgressIndicatorContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-bottom: 1px solid var(--border-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const ProgressBarContainer = styled.div`
  height: 10px;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  position: relative;
  margin-bottom: 4px;
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 9999px;
  background-color: var(--qbo-purple-primary);
  transition: width 0.3s ease;
`;

const SectionProgressItem = styled.div`
  padding: 4px 0;
  border-bottom: 1px solid #f3e8ff;
`;

const SectionProgressRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
`;

const SectionIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 6px;
  font-size: 12px;
  background-color: ${props => props.color || 'var(--qbo-purple-primary)'};
`;

const AgentNotesContainer = styled.div`
  padding: 16px;
  background-color: white;
  border-bottom: 1px solid var(--border-primary);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
`;

const NotesTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: var(--text-purple-900);
`;

const NotesTextarea = styled.textarea`
  width: 100%;
  border: 1px solid var(--border-primary);
  border-radius: 4px;
  padding: 8px;
  font-size: 14px;
  resize: vertical;
  min-height: 80px;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`;

const HistoryContainer = styled.div`
  overflow-y: auto;
  flex: 1;
  padding: 10px;
  background-color: var(--bg-lighter);
  border-top: 1px solid var(--border-light);
`;

// Right Panel (Main Content)
const MainPanel = styled.div`
  width: 66.667%;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--bg-lighter);
`;

const MainHeader = styled.div`
  background-color: var(--header-dark-bg);
  color: white;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--qbo-purple-darker);
`;

const MainTitle = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: var(--text-white);
`;

const TabNavigation = styled.div`
  display: flex;
  background-color: white;
  border-bottom: 1px solid var(--border-primary);
  overflow-x: auto;
  width: 100%;
`;

const TabItem = styled.div`
  cursor: pointer;
  white-space: nowrap;
`;

const TabContent = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  background-color: ${props => props.active ? 'var(--bg-primary)' : 'transparent'};
  color: ${props => props.active ? 'var(--text-primary)' : 'var(--text-secondary)'};
  font-weight: ${props => props.active ? '600' : '400'};
  border-bottom: ${props => props.active ? '3px solid' : '3px solid transparent'};
  border-color: ${props => props.active ? props.color : 'transparent'};
  min-width: fit-content;
  padding: 12px;
  height: 100%;
`;

const TabIcon = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 6px;
  font-size: 12px;
  background-color: ${props => props.color || 'var(--qbo-purple-primary)'};
`;

const ProgressIndicator = styled.span`
  display: ${props => props.progress > 0 ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-left: 6px;
  font-size: 10px;
  font-weight: bold;
  background-color: ${props => 
    props.completed ? 'var(--success-color)' : 'var(--qbo-purple-lighter)'};
  border: ${props => 
    props.completed ? 'none' : '1px solid var(--qbo-purple-light)'};
  color: ${props => 
    props.completed ? 'white' : 'var(--qbo-purple-dark)'};
`;

const HeaderActions = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  position: relative;
  margin-right: 12px;
`;

const SearchInput = styled.input`
  background-color: var(--qbo-purple-primary);
  color: white;
  border: 1px solid var(--qbo-purple-light);
  border-radius: 4px;
  padding: 6px 12px;
  font-size: 14px;
  width: 256px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
`;

const SearchResults = styled.div`
  position: absolute;
  right: 0;
  z-index: 50;
  background-color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  margin-top: 4px;
  width: 320px;
  max-height: 384px;
  overflow-y: auto;
  display: none;
`;

const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  position: relative;
`;

const KnowledgeBaseContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: ${props => props.isOpen ? '350px' : '0'};
  background-color: white;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transition: width 0.3s ease;
  overflow: hidden;
  z-index: 10;
`;



const TroubleshooterPage = () => {
  const { state, goToQuestion } = useTroubleshooter();
  const [showAgentModal, setShowAgentModal] = useState(false);
  const [notes, setNotes] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Show agent modal on initial load if no agent ID is set
  useEffect(() => {
    if (state.agentId === 'Unknown') {
      setShowAgentModal(true);
    }
  }, [state.agentId]);
  
  // Check if we should show a resolution
  const shouldShowResolution = () => {
    const resolutionPrefix = 'resolution_';
    return state.currentQuestionId && state.currentQuestionId.startsWith(resolutionPrefix);
  };
  
  // Generate history items based on visited questions
  const renderHistoryItems = () => {
    const currentSection = state.currentSection;
    
    // Filter history entries for the current section
    const sectionHistory = state.history.filter(entry => entry.section === currentSection);
    
    if (sectionHistory.length === 0) {
      return <div className="p-4 text-center text-gray-500 italic">No history for this section yet.</div>;
    }

    // Get section information
    const sectionInfo = {
      starting: { label: "STARTING CHECKPOINT", icon: "🚀", color: "var(--tab-starting-color)" },
      user: { label: "USER ACCESS & PERMISSIONS", icon: "👤", color: "var(--tab-user-color)" },
      data: { label: "DATA & TRANSACTIONS", icon: "📊", color: "var(--tab-data-color)" },
      application: { label: "APPLICATION", icon: "💻", color: "var(--tab-application-color)" },
      system: { label: "SYSTEM & ENVIRONMENT", icon: "🖥️", color: "var(--tab-system-color)" },
      resources: { label: "RESOURCES", icon: "📚", color: "var(--tab-resources-color)" }
    }[currentSection] || { 
      label: currentSection.charAt(0).toUpperCase() + currentSection.slice(1), 
      icon: "❓", 
      color: "var(--qbo-purple-primary)" 
    };
    
    return (
      <div className="mb-2.5 shadow-sm rounded overflow-hidden">
        <div 
          className="flex items-center p-2.5 history-section-header" 
          style={{ backgroundColor: sectionInfo.color }}
        >
          <span className="mr-1.5 text-lg">{sectionInfo.icon}</span>
          <span>{sectionInfo.label}</span>
        </div>

        {sectionHistory.map((entry, index) => {
          // Determine border color based on importance
          const borderColorClass = entry.importance === "high" 
            ? "border-l-red-500" 
            : entry.importance === "medium" 
              ? "border-l-purple-600" 
              : "border-l-purple-500";
              
          return (
            <div 
              key={index} 
              className={`bg-white border-l-3 border-b border-purple-100 p-3 ${borderColorClass} hover:bg-purple-50 transition-colors duration-100 history-item`}
            >
              <div className="history-item-title">
                {entry.shortQuestion || entry.question}
              </div>
              <div className="history-item-content">
                {entry.answer}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  
  // Get the icon for a section
  const getSectionIcon = (sectionId) => {
    const icons = {
      'starting': '🚀',
      'user': '👤',
      'data': '📊',
      'application': '💻',
      'system': '🖥️',
      'resources': '📚'
    };
    return icons[sectionId] || '❓';
  };
  
  // Get the color for a section
  const getSectionColor = (sectionId) => {
    const colors = {
      'starting': 'var(--tab-starting-color)',
      'user': 'var(--tab-user-color)',
      'data': 'var(--tab-data-color)',
      'application': 'var(--tab-application-color)',
      'system': 'var(--tab-system-color)',
      'resources': 'var(--tab-resources-color)'
    };
    return colors[sectionId] || 'var(--qbo-purple-primary)';
  };
  
  // Handle tab navigation
  const handleTabClick = (sectionId) => {
    // Find the section in the sections array
    const section = sections.find(s => s.id === sectionId);
    
    // Navigate to the initial question of the selected section if it exists
    // Otherwise use the default format as a fallback
    const initialQuestionId = section?.initialQuestion || `question_${sectionId}_1`;
    goToQuestion(initialQuestionId, sectionId);
  };
  
  // Render progress indicator
  const renderProgressIndicator = () => {
    // Calculate overall progress - only count main sections
    const mainSections = ['user', 'data', 'application', 'system'];
    const sectionsProgress = mainSections.map(section => state.sectionProgress[section] || 0);
    const completedSectionCount = sectionsProgress.filter(progress => progress === 100).length;
    const overallProgress = Math.round((completedSectionCount / mainSections.length) * 100);
    
    return (
      <>
        <div className="mb-4">
          <div className="font-bold text-sm text-purple-800 mb-1">Overall Progress</div>
          <ProgressBarContainer>
            <ProgressBar style={{ width: `${overallProgress}%` }} />
          </ProgressBarContainer>
          <span className="text-xs text-purple-800">{overallProgress}%</span>
        </div>
        
        <div className="flex flex-col gap-2.5">
          {mainSections.map(sectionId => {
            const progress = state.sectionProgress[sectionId] || 0;
            let statusText = '';
            
            if (progress === 100) {
              statusText = <span className="text-green-600 font-medium">Complete!</span>;
            } else if (progress > 0) {
              statusText = <span className="text-purple-600 font-medium animate-pulse">In Progress</span>;
            } else {
              statusText = <span className="text-gray-500">Not Started</span>;
            }
            
            return (
              <SectionProgressItem key={sectionId}>
                <SectionProgressRow>
                  <div className="flex items-center">
                    <SectionIcon color={getSectionColor(sectionId)}>
                      {getSectionIcon(sectionId)}
                    </SectionIcon>
                    {sectionId.charAt(0).toUpperCase() + sectionId.slice(1)}
                  </div>
                  <div className="text-right">
                    {statusText}
                  </div>
                </SectionProgressRow>
              </SectionProgressItem>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <PageContainer className="qbo-bg-lighter">
      <MainLayout>
        {/* History Panel (Left) */}
        <HistoryPanel className="history-panel">
          <HistoryHeader>
            <HistoryTitle>Troubleshooting Steps</HistoryTitle>
          </HistoryHeader>
          
          <ProgressIndicatorContainer>
            {renderProgressIndicator()}
          </ProgressIndicatorContainer>
          
          <AgentNotesContainer>
            <NotesTitle>Agent Notes</NotesTitle>
            <NotesTextarea
              id="notes"
              placeholder="Add your troubleshooting side notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows="4"
              className="w-full p-2 text-sm border qbo-border-primary rounded resize-y"
            />
          </AgentNotesContainer>
          
          <HistoryContainer className="history-container">
            {renderHistoryItems()}
          </HistoryContainer>
        </HistoryPanel>
        
        {/* Main Panel (Right) */}
        <MainPanel>
          <MainHeader>
            <MainTitle>QuickBooks Online Troubleshooter</MainTitle>
            <HeaderActions>
              <SearchContainer>
                <SearchInput
                  id="searchInput"
                  type="text"
                  placeholder="Search coming soon..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <SearchResults id="searchResults" />
              </SearchContainer>
              
              <button 
                className="qbo-button-primary"
                onClick={() => state.dispatch({ type: 'TOGGLE_KNOWLEDGE_BASE' })}
              >
                {state.showKnowledgeBase ? 'Hide Reference' : 'Show Reference'}
              </button>
            </HeaderActions>
          </MainHeader>
          
          {/* Tab Navigation - Moved from Header.js to match GAS layout */}
          <TabNavigation id="tabNavigation">
            {sections.map((section) => {
              const progress = state.sectionProgress[section.id] || 0;
              const isActive = state.currentSection === section.id;
              const isCompleted = progress === 100;
              
              return (
                <TabItem 
                  key={section.id} 
                  className="tab-item" 
                  data-section={section.id}
                  onClick={() => handleTabClick(section.id)}
                >
                  <TabContent 
                    active={isActive} 
                    color={section.color}
                    className={isActive ? "qbo-section-active" : ""}
                  >
                    <TabIcon 
                      color={section.color}
                    >
                      {getSectionIcon(section.id)}
                    </TabIcon>
                    <span className="whitespace-nowrap">{section.title}</span>
                    <ProgressIndicator 
                      completed={isCompleted}
                      progress={progress}
                    >
                      {isCompleted ? (
                        <i className="fas fa-check" style={{ fontSize: '0.6rem' }}></i>
                      ) : progress > 0 ? (
                        Math.floor(progress / 10)
                      ) : (
                        ''
                      )}
                    </ProgressIndicator>
                  </TabContent>
                </TabItem>
              );
            })}
          </TabNavigation>
          
          <MainContent>
            {/* Conditional rendering based on section */}
            {state.currentSection === 'resources' ? (
              /* Resources & Tools section */
              <div className="flex-1 p-5 overflow-y-auto">
                <ResourcesPanel />
              </div>
            ) : (
              /* Question or Solution Display */
              <>
                {shouldShowResolution() ? (
                  <SolutionCard />
                ) : (
                  <QuestionCard />
                )}
              </>
            )}
            
            {/* Knowledge Base Panel - conditionally displayed */}
            <KnowledgeBaseContainer isOpen={state.showKnowledgeBase}>
              {state.showKnowledgeBase && <KnowledgeBasePanel />}
            </KnowledgeBaseContainer>
          </MainContent>
        </MainPanel>
      </MainLayout>
      
      <AgentInfoModal 
        isOpen={showAgentModal} 
        onClose={() => setShowAgentModal(false)} 
      />
    </PageContainer>
  );
};

export default TroubleshooterPage;
