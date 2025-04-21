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
  max-width: 500px;
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
  
  h2 {
    color: var(--text-white);
  }
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

const WelcomeText = styled.p`
  margin-bottom: var(--spacing-lg);
  line-height: 1.5;
`;

const InputGroup = styled.div`
  margin-bottom: var(--spacing-lg);
  
  label {
    display: block;
    margin-bottom: var(--spacing-xs);
    font-weight: 500;
  }
  
  input {
    width: 100%;
    padding: var(--spacing-sm) var(--spacing-md);
    border: 1px solid var(--border-light);
    border-radius: var(--border-radius-sm);
    font-size: var(--font-size-md);
    
    &:focus {
      border-color: var(--qbo-purple-primary);
      outline: none;
      box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.2);
    }
    
    &.error {
      border-color: var(--error-color);
    }
  }
  
  .error-message {
    color: var(--error-color);
    font-size: var(--font-size-sm);
    margin-top: var(--spacing-xs);
  }
`;

const ModalFooter = styled.div`
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: 1px solid var(--border-light);
  display: flex;
  justify-content: flex-end;
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
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      props.primary ? 'var(--qbo-purple-dark)' : 'var(--bg-purple-light)'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.3);
  }
`;

const PrivacyNote = styled.p`
  font-size: var(--font-size-xs);
  color: var(--text-secondary);
  margin-top: var(--spacing-md);
  margin-bottom: 0;
  line-height: 1.5;
`;

const AgentInfoModal = ({ isOpen, onClose }) => {
  const { updateAgentInfo } = useTroubleshooter();
  const [agentId, setAgentId] = useState('');
  const [error, setError] = useState('');
  
  if (!isOpen) return null;
  
  const handleSubmit = () => {
    if (!agentId.trim()) {
      setError('Please enter your Agent ID');
      return;
    }
    
    // Clear any previous error
    setError('');
    
    // Update the agent info in the context
    updateAgentInfo(agentId);
    
    // Close the modal
    onClose();
  };
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  
  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>Welcome to QBO Troubleshooter</h2>
        </ModalHeader>
        
        <ModalBody>
          <WelcomeText>
            This tool will guide you through diagnosing and resolving common QuickBooks Online issues.
            Please enter your Agent ID to get started.
          </WelcomeText>
          
          <InputGroup>
            <label htmlFor="agentId">Agent ID</label>
            <input
              type="text"
              id="agentId"
              value={agentId}
              onChange={(e) => setAgentId(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Enter your Agent ID"
              className={error ? 'error' : ''}
              autoFocus
            />
            {error && <div className="error-message">{error}</div>}
          </InputGroup>
          
          <PrivacyNote>
            Note: Your Agent ID will be used for tracking support case resolution metrics only.
            This information helps us improve the troubleshooting process.
          </PrivacyNote>
        </ModalBody>
        
        <ModalFooter>
          <Button primary onClick={handleSubmit}>
            Get Started
          </Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AgentInfoModal;
