import React, { useState } from 'react';
import styled from 'styled-components';
import { useTroubleshooter } from '../context/TroubleshooterContext';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: var(--bg-primary);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  width: 100%;
  max-width: 600px;
  padding: 0;
  animation: modalFadeIn 0.3s ease-out forwards;
  
  @keyframes modalFadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ModalHeader = styled.div`
  background-color: var(--qbo-purple-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  border-top-left-radius: var(--border-radius-md);
  border-top-right-radius: var(--border-radius-md);
  display: flex;
  align-items: center;
  
  h2 {
    margin: 0;
    font-size: var(--font-size-lg);
    flex: 1;
  }
`;

const ModalBody = styled.div`
  padding: var(--spacing-lg);
`;

const SectionCompletionText = styled.p`
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
  font-size: var(--font-size-md);
`;

const SummaryContainer = styled.div`
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  background-color: var(--bg-light);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-lg);
  max-height: 200px;
  overflow-y: auto;
`;

const SummaryItem = styled.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
  padding-bottom: var(--spacing-sm);
  border-bottom: 1px solid var(--border-lighter);
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }
`;

const QuestionText = styled.div`
  flex: 1;
  font-weight: 500;
`;

const AnswerText = styled.div`
  flex: 1;
  color: var(--text-secondary);
`;

const OptionsContainer = styled.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`;

const Option = styled.div`
  flex: 1;
  background-color: var(--bg-light);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  
  &:hover {
    border-color: var(--qbo-purple-primary);
    background-color: var(--bg-purple-light);
  }
  
  h3 {
    color: var(--qbo-purple-primary);
    margin-top: 0;
    margin-bottom: var(--spacing-sm);
  }
  
  p {
    margin: 0;
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
  }
  
  .icon {
    font-size: 24px;
    margin-bottom: var(--spacing-sm);
    color: var(--qbo-purple-primary);
  }
`;

const ModalFooter = styled.div`
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: ${props => 
    props.primary ? 'var(--qbo-purple-primary)' : 'transparent'};
  color: ${props => 
    props.primary ? 'white' : 'var(--qbo-purple-primary)'};
  border: ${props => 
    props.primary ? 'none' : '1px solid var(--qbo-purple-primary)'};
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-weight: 500;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      props.primary ? 'var(--qbo-purple-dark)' : 'var(--bg-purple-light)'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.3);
  }
`;

// Helper to get section display name
const getSectionDisplayName = (section) => {
  const sectionNames = {
    starting: 'Initial Assessment',
    user: 'User Information',
    data: 'Data Issues',
    application: 'Application Problems',
    system: 'System Requirements',
    resources: 'Resources'
  };
  
  return sectionNames[section] || section;
};

// Helper to get next section
const getNextSection = (currentSection) => {
  const sectionOrder = ['starting', 'user', 'data', 'application', 'system', 'resources'];
  const currentIndex = sectionOrder.indexOf(currentSection);
  
  if (currentIndex === -1 || currentIndex === sectionOrder.length - 1) {
    return null;
  }
  
  return sectionOrder[currentIndex + 1];
};

// Component for the next section map
const NextSectionMap = {
  'starting': 'question_user_1',
  'user': 'question_data_1',
  'data': 'question_application_1',
  'application': 'question_system_1',
  'system': 'question_resources_1', // If resources section exists
};

const SectionCompletionModal = ({ isOpen, onClose, section }) => {
  const { state, goToQuestion } = useTroubleshooter();
  const [copied, setCopied] = useState(false);
  
  if (!isOpen) return null;
  
  const nextSection = getNextSection(section);
  const nextSectionQuestion = nextSection ? NextSectionMap[section] : null;
  
  // Filter history entries for the current section
  const sectionHistory = state.history.filter(entry => entry.section === section);
  
  // Generate summary text
  const generateSummaryText = () => {
    let summary = `QBO Troubleshooting Summary - ${getSectionDisplayName(section)} Section\n\n`;
    
    sectionHistory.forEach((item, index) => {
      summary += `Q${index + 1}: ${item.question}\n`;
      summary += `A: ${item.answer}\n\n`;
    });
    
    summary += `\nAgent ID: ${state.agentId}\n`;
    summary += `Session Time: ${new Date().toLocaleString()}\n`;
    
    return summary;
  };
  
  // Copy summary to clipboard
  const handleCopySummary = () => {
    const summaryText = generateSummaryText();
    navigator.clipboard.writeText(summaryText)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
      });
  };
  
  // Continue to next section
  const handleContinueToNextSection = () => {
    if (nextSection && nextSectionQuestion) {
      goToQuestion(nextSectionQuestion, nextSection);
      onClose();
    }
  };
  
  // Prepare for T3 escalation
  const handlePrepareForEscalation = () => {
    // Copy summary to clipboard
    handleCopySummary();
    // Close modal after a brief delay to allow copy operation to complete
    setTimeout(() => {
      onClose();
    }, 500);
  };
  
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>{getSectionDisplayName(section)} Section Complete</h2>
        </ModalHeader>
        
        <ModalBody>
          <SectionCompletionText>
            You've completed the {getSectionDisplayName(section)} section of the troubleshooter.
            Here's a summary of the information collected so far:
          </SectionCompletionText>
          
          <SummaryContainer>
            {sectionHistory.map((item, index) => (
              <SummaryItem key={index}>
                <QuestionText>{item.shortQuestion || item.question}</QuestionText>
                <AnswerText>{item.answer}</AnswerText>
              </SummaryItem>
            ))}
          </SummaryContainer>
          
          <SectionCompletionText>
            What would you like to do next?
          </SectionCompletionText>
          
          <OptionsContainer>
            {nextSection && (
              <Option onClick={handleContinueToNextSection}>
                <div className="icon"><i className="fas fa-arrow-circle-right"></i></div>
                <h3>Continue Troubleshooting</h3>
                <p>Move to the {getSectionDisplayName(nextSection)} section to continue troubleshooting</p>
              </Option>
            )}
            
            <Option onClick={handlePrepareForEscalation}>
              <div className="icon"><i className="fas fa-level-up-alt"></i></div>
              <h3>Escalate to T3</h3>
              <p>Generate a summary of the troubleshooting steps completed so far</p>
            </Option>
          </OptionsContainer>
        </ModalBody>
        
        <ModalFooter>
          <Button onClick={onClose}>
            <i className="fas fa-times"></i> Close
          </Button>
          
          <Button primary onClick={handleCopySummary}>
            <i className="fas fa-clipboard"></i> {copied ? 'Copied!' : 'Copy Summary'}
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default SectionCompletionModal;
