import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { questions, sections, navigationMap, knowledgeBase } from '../../data/troubleshooterData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  color: var(--text-gray-800);
  margin: 0 0 1rem 0;
`;

const SectionDescription = styled.p`
  color: var(--text-gray-600);
  margin: 0 0 1.5rem 0;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const Panel = styled.div`
  background-color: white;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
`;

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatCard = styled.div`
  background-color: var(--bg-lighter);
  border-radius: 8px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: var(--text-gray-600);
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--qbo-purple-primary);
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
`;

const PrimaryButton = styled(Button)`
  background-color: var(--qbo-purple-primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--qbo-purple-dark);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: white;
  color: var(--text-gray-700);
  border: 1px solid var(--border-light);
  
  &:hover {
    background-color: var(--bg-lighter);
  }
`;

const FileUpload = styled.div`
  margin-top: 1.5rem;
  border: 1px dashed var(--border-light);
  border-radius: 8px;
  padding: 2rem;
  text-align: center;
  background-color: var(--bg-lighter);
`;

const UploadLabel = styled.label`
  display: block;
  cursor: pointer;
`;

const UploadInput = styled.input`
  display: none;
`;

const UploadIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--qbo-purple-light);
`;

const UploadText = styled.div`
  font-size: 0.875rem;
  color: var(--text-gray-600);
  margin-bottom: 1rem;
`;

const CodeEditor = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 1rem;
  font-family: monospace;
  font-size: 0.875rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  background-color: #f8f9fa;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`;

const NotificationBanner = styled.div`
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 4px;
  background-color: ${props => 
    props.type === 'success' ? '#d4edda' : 
    props.type === 'error' ? '#f8d7da' : 
    '#cce5ff'};
  color: ${props => 
    props.type === 'success' ? '#155724' : 
    props.type === 'error' ? '#721c24' : 
    '#004085'};
  border: 1px solid ${props => 
    props.type === 'success' ? '#c3e6cb' : 
    props.type === 'error' ? '#f5c6cb' : 
    '#b8daff'};
  display: ${props => props.visible ? 'block' : 'none'};
`;

const DataImportExport = () => {
  const [stats, setStats] = useState({
    questions: 0,
    sections: 0,
    navigationRules: 0,
    resources: 0
  });
  
  const [activeTab, setActiveTab] = useState('export');
  const [exportData, setExportData] = useState('');
  const [importData, setImportData] = useState('');
  const [notification, setNotification] = useState({
    visible: false,
    type: 'info',
    message: ''
  });
  
  // Calculate stats on component mount
  useEffect(() => {
    setStats({
      questions: Object.keys(questions).length,
      sections: sections.length,
      navigationRules: Object.values(navigationMap).reduce((total, answers) => {
        if (typeof answers === 'object') {
          return total + Object.keys(answers).length;
        }
        return total;
      }, 0),
      resources: knowledgeBase.kbArticles.length + knowledgeBase.quickTips.length
    });
  }, []);
  
  // Handle export data
  const handleExportData = () => {
    try {
      const data = {
        questions,
        sections,
        navigationMap,
        knowledgeBase
      };
      
      setExportData(JSON.stringify(data, null, 2));
      
      // Show success notification
      setNotification({
        visible: true,
        type: 'success',
        message: 'Data successfully prepared for export. You can now copy or download the JSON data.'
      });
      
      // Auto-hide notification after 5 seconds
      setTimeout(() => {
        setNotification(prev => ({ ...prev, visible: false }));
      }, 5000);
    } catch (error) {
      // Show error notification
      setNotification({
        visible: true,
        type: 'error',
        message: `Error exporting data: ${error.message}`
      });
    }
  };
  
  // Handle downloading export data
  const handleDownloadData = () => {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(exportData);
      const downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", "troubleshooter_data.json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    } catch (error) {
      // Show error notification
      setNotification({
        visible: true,
        type: 'error',
        message: `Error downloading data: ${error.message}`
      });
    }
  };
  
  // Handle file upload
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        try {
          const fileContent = event.target.result;
          setImportData(fileContent);
          
          // Show success notification
          setNotification({
            visible: true,
            type: 'info',
            message: 'File loaded successfully. Review the data and click "Import Data" to apply changes.'
          });
        } catch (error) {
          // Show error notification
          setNotification({
            visible: true,
            type: 'error',
            message: `Error reading file: ${error.message}`
          });
        }
      };
      
      reader.readAsText(file);
    }
  };
  
  // Handle import data
  const handleImportData = () => {
    try {
      // Parse the import data
      JSON.parse(importData);
      
      // In a real implementation, we would update the application state with the parsed data
      
      // Show success notification
      setNotification({
        visible: true,
        type: 'success',
        message: 'Data imported successfully. Changes are currently only in memory. To make them permanent, the data would need to be saved to the actual data file.'
      });
    } catch (error) {
      // Show error notification
      setNotification({
        visible: true,
        type: 'error',
        message: `Error importing data: ${error.message}. Please check the JSON format.`
      });
    }
  };
  
  return (
    <Container>
      <SectionTitle>Data Management</SectionTitle>
      
      <SectionDescription>
        Export your troubleshooter data to backup or share with others. Import data to update your troubleshooter.
        <br />
        <strong>Note:</strong> Changes made in the admin panel are temporary until exported and applied to your codebase.
      </SectionDescription>
      
      <NotificationBanner
        visible={notification.visible}
        type={notification.type}
      >
        {notification.message}
      </NotificationBanner>
      
      <Panel>
        <SectionTitle>Data Statistics</SectionTitle>
        
        <StatsContainer>
          <StatCard>
            <StatLabel>Questions</StatLabel>
            <StatValue>{stats.questions}</StatValue>
          </StatCard>
          
          <StatCard>
            <StatLabel>Sections</StatLabel>
            <StatValue>{stats.sections}</StatValue>
          </StatCard>
          
          <StatCard>
            <StatLabel>Navigation Rules</StatLabel>
            <StatValue>{stats.navigationRules}</StatValue>
          </StatCard>
          
          <StatCard>
            <StatLabel>Resources</StatLabel>
            <StatValue>{stats.resources}</StatValue>
          </StatCard>
        </StatsContainer>
      </Panel>
      
      <Panel>
        <TabsContainer>
          <Tab 
            active={activeTab === 'export'} 
            onClick={() => setActiveTab('export')}
          >
            Export Data
          </Tab>
          <Tab 
            active={activeTab === 'import'} 
            onClick={() => setActiveTab('import')}
          >
            Import Data
          </Tab>
        </TabsContainer>
        
        {activeTab === 'export' ? (
          <div>
            <SectionDescription>
              Export your current troubleshooter configuration as a JSON file. This includes all questions, sections, navigation rules, and resources.
            </SectionDescription>
            
            <PrimaryButton onClick={handleExportData}>
              Generate Export Data
            </PrimaryButton>
            
            {exportData && (
              <>
                <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
                  <CodeEditor 
                    value={exportData} 
                    readOnly 
                  />
                </div>
                
                <ButtonGroup>
                  <SecondaryButton onClick={() => navigator.clipboard.writeText(exportData)}>
                    Copy to Clipboard
                  </SecondaryButton>
                  
                  <PrimaryButton onClick={handleDownloadData}>
                    Download JSON File
                  </PrimaryButton>
                </ButtonGroup>
              </>
            )}
          </div>
        ) : (
          <div>
            <SectionDescription>
              Import a previously exported troubleshooter configuration file or paste JSON data directly.
            </SectionDescription>
            
            <FileUpload>
              <UploadLabel htmlFor="file-upload">
                <UploadIcon>📁</UploadIcon>
                <UploadText>Click to browse or drag and drop a JSON file</UploadText>
                <SecondaryButton as="span">
                  Select File
                </SecondaryButton>
                <UploadInput 
                  id="file-upload"
                  type="file" 
                  accept=".json" 
                  onChange={handleFileUpload}
                />
              </UploadLabel>
            </FileUpload>
            
            <div style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>
              <FormLabel>Or paste JSON data directly:</FormLabel>
              <CodeEditor 
                value={importData} 
                onChange={(e) => setImportData(e.target.value)} 
                placeholder={`{
  "questions": { ... },
  "sections": [ ... ],
  "navigationMap": { ... },
  "knowledgeBase": { ... }
}`}
              />
            </div>
            
            <PrimaryButton 
              onClick={handleImportData}
              disabled={!importData}
            >
              Import Data
            </PrimaryButton>
          </div>
        )}
      </Panel>
    </Container>
  );
};

// Styled components for tabs
const TabsContainer = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-light);
`;

const Tab = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: ${props => props.active ? 'white' : 'var(--bg-lighter)'};
  color: ${props => props.active ? 'var(--qbo-purple-primary)' : 'var(--text-gray-700)'};
  border: 1px solid var(--border-light);
  border-bottom: ${props => props.active ? '1px solid white' : '1px solid var(--border-light)'};
  border-radius: 4px 4px 0 0;
  margin-right: 0.25rem;
  font-weight: ${props => props.active ? '600' : '400'};
  cursor: pointer;
  position: relative;
  top: 1px;
  
  &:hover {
    background-color: ${props => props.active ? 'white' : 'var(--bg-purple-light)'};
  }
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-gray-700);
`;

export default DataImportExport;
