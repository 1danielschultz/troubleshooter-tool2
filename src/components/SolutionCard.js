import React from 'react';
import styled from 'styled-components';
import { useTroubleshooter } from '../context/TroubleshooterContext';
import { resolutions } from '../data/troubleshooterData';

const Card = styled.div`
  background-color: white;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const SolutionHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-light);
`;

const SolutionIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--success-color);
  border-radius: 50%;
  margin-right: 16px;
  color: white;
  font-size: 20px;
`;

const SolutionTitle = styled.h3`
  color: var(--text-primary);
  margin: 0;
  font-size: 20px;
`;

const SolutionSubtitle = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-top: 4px;
  margin-bottom: 0;
`;

const StepsList = styled.ol`
  margin: 20px 0;
  padding-left: 24px;
`;

const Step = styled.li`
  margin-bottom: 12px;
  line-height: 1.5;
  font-size: 14px;
  color: var(--text-primary);
`;

const RelatedArticlesSection = styled.div`
  margin-top: 24px;
  padding: 16px;
  border-radius: 6px;
  background-color: var(--bg-secondary);
`;

const RelatedArticlesTitle = styled.h4`
  color: var(--text-primary);
  margin-bottom: 12px;
  font-size: 16px;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 8px;
    color: var(--qbo-purple-primary);
  }
`;

const ArticlesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const ArticleItem = styled.li`
  margin-bottom: 8px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border-light);
  
  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const ArticleLink = styled.a`
  color: var(--qbo-purple-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
  
  i {
    margin-right: 8px;
    font-size: 14px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid var(--border-light);
`;

const FooterInfo = styled.div`
  color: var(--text-secondary);
  font-size: 12px;
  display: flex;
  align-items: center;
  
  i {
    margin-right: 8px;
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 12px;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background-color: ${props => 
    props.primary ? 'var(--qbo-purple-primary)' : 'white'};
  color: ${props => 
    props.primary ? 'white' : 'var(--qbo-purple-primary)'};
  border: ${props => 
    props.primary ? 'none' : '1px solid var(--qbo-purple-primary)'};
  border-radius: 4px;
  padding: 8px 16px;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => 
      props.primary ? 'var(--qbo-purple-dark)' : 'var(--bg-purple-light)'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.3);
  }
`;

const PrintButton = styled(Button)`
  color: var(--text-secondary);
  border-color: var(--border-light);
  background-color: white;
  
  &:hover {
    background-color: var(--bg-secondary);
    border-color: var(--text-secondary);
  }
  
  @media print {
    display: none;
  }
`;

const AgentInfo = styled.div`
  background-color: var(--bg-secondary);
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 20px;
  
  h4 {
    margin-top: 0;
    margin-bottom: 12px;
    font-size: 16px;
    display: flex;
    align-items: center;
    
    i {
      margin-right: 8px;
      color: var(--qbo-purple-primary);
    }
  }
  
  p {
    margin: 8px 0;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    
    &:first-of-type {
      margin-top: 0;
    }
    
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  
  @media print {
    break-after: always;
  }
`;

const SolutionCard = () => {
  const { state, resetTroubleshooter, goToQuestion } = useTroubleshooter();
  
  // Extract resolution ID from current question ID
  const getResolutionId = () => {
    if (!state.currentQuestionId) return null;
    
    // If the current question ID starts with 'resolution_', it's a resolution
    if (state.currentQuestionId.startsWith('resolution_')) {
      return state.currentQuestionId.replace('resolution_', '');
    }
    return null;
  };
  
  const resolutionId = getResolutionId();
  const solution = resolutionId ? resolutions[resolutionId] : null;
  
  // Handle case when no solution is found
  if (!solution) {
    return (
      <Card>
        <SolutionHeader>
          <SolutionIcon>
            <i className="fas fa-exclamation-triangle"></i>
          </SolutionIcon>
          <div>
            <SolutionTitle>Solution Not Found</SolutionTitle>
            <SolutionSubtitle>
              We couldn't find a specific solution for your issue. Please try again or contact support.
            </SolutionSubtitle>
          </div>
        </SolutionHeader>
        
        <ButtonContainer>
          <FooterInfo>
            <i className="fas fa-info-circle"></i>
            Navigation Error
          </FooterInfo>
          <ActionButtons>
            <Button primary onClick={() => goToQuestion('question_starting_1', 'starting')}>
              <i className="fas fa-home"></i> Return to Start
            </Button>
          </ActionButtons>
        </ButtonContainer>
      </Card>
    );
  }
  
  const handleStartOver = () => {
    if (window.confirm('This will clear all your progress and start over. Are you sure?')) {
      resetTroubleshooter();
    }
  };
  
  const handlePrint = () => {
    window.print();
  };
  
  // Format date for display
  const formatDate = (date) => {
    return new Date(date).toLocaleString();
  };
  
  return (
    <Card>
      <SolutionHeader>
        <SolutionIcon>
          <i className="fas fa-check"></i>
        </SolutionIcon>
        <div>
          <SolutionTitle>{solution.title}</SolutionTitle>
          <SolutionSubtitle>Recommended steps to resolve the issue</SolutionSubtitle>
        </div>
      </SolutionHeader>
      
      <AgentInfo>
        <h4>
          <i className="fas fa-user-headset"></i>
          Agent Information
        </h4>
        <p>
          <span>Agent ID:</span>
          <strong>{state.agentId}</strong>
        </p>
        <p>
          <span>Session Time:</span>
          <strong>{formatDate(state.sessionStartTime)}</strong>
        </p>
        <p>
          <span>Case ID:</span>
          <strong>{solution.caseId || 'Not assigned'}</strong>
        </p>
      </AgentInfo>
      
      <StepsList>
        {solution.steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </StepsList>
      
      {solution.relatedArticles && solution.relatedArticles.length > 0 && (
        <RelatedArticlesSection>
          <RelatedArticlesTitle>
            <i className="fas fa-book"></i>
            Related Knowledge Base Articles
          </RelatedArticlesTitle>
          <ArticlesList>
            {solution.relatedArticles.map((article, index) => (
              <ArticleItem key={index}>
                <ArticleLink href={article.url} target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-external-link-alt"></i> {article.title}
                </ArticleLink>
              </ArticleItem>
            ))}
          </ArticlesList>
        </RelatedArticlesSection>
      )}
      
      <ButtonContainer>
        <FooterInfo>
          <i className="fas fa-check-circle"></i>
          Resolution Complete
        </FooterInfo>
        <ActionButtons>
          <PrintButton onClick={handlePrint}>
            <i className="fas fa-print"></i> Print
          </PrintButton>
          <Button primary onClick={handleStartOver}>
            <i className="fas fa-redo"></i> Start Over
          </Button>
        </ActionButtons>
      </ButtonContainer>
    </Card>
  );
};

export default SolutionCard;
