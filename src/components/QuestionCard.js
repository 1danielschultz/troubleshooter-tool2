import React, { useState } from 'react';
import styled from 'styled-components';
import { useTroubleshooter } from '../context/TroubleshooterContext';
import { questions, options, navigationMap } from '../data/troubleshooterData';
import { 
  calculateSectionProgress, 
  getSectionDisplayName,
  countQuestionsBySection
} from '../utils/helpers';
import SectionCompletionModal from './SectionCompletionModal';

const Card = styled.div`
  background-color: white;
  border: 1px solid var(--border-primary);
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  position: relative;
  display: flex;
`;

const IconContainer = styled.div`
  margin-right: 16px;
  flex-shrink: 0;
`;

const Icon = styled.i`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--qbo-purple-primary);
  color: white;
  border-radius: 50%;
  font-size: 16px;
  
  &.high {
    background-color: var(--alert-color);
  }
  
  &.medium {
    background-color: var(--warning-color);
  }
  
  &.low {
    background-color: var(--qbo-purple-primary);
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const QuestionInfo = styled.div`
  margin-bottom: 16px;
`;

const QuestionHeading = styled.div`
  margin-bottom: 8px;
  
  h2 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
  }
`;

const SectionInfo = styled.div`
  font-size: 14px;
  color: var(--text-secondary);
  
  span {
    font-weight: 500;
    color: var(--qbo-purple-primary);
  }
`;

const QuestionImportance = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: ${props => 
    props.importance === 'high' ? 'var(--alert-color)' : 
    props.importance === 'medium' ? 'var(--warning-color)' : 
    'var(--qbo-purple-light)'};
  color: white;
  text-transform: uppercase;
  font-weight: 600;
`;

const QuestionTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border-light);
  padding-bottom: 12px;
`;

const QuestionIcon = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: var(--qbo-purple-primary);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 14px;
`;

const QuestionText = styled.h3`
  color: var(--text-primary);
  margin: 0;
  font-size: 18px;
  padding-right: ${props => props.hasImportance ? '100px' : '0'}; /* Make room for importance badge */
`;

const QuestionSubtext = styled.p`
  color: var(--text-secondary);
  font-size: 14px;
  margin-bottom: 20px;
  line-height: 1.5;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const RadioOption = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 12px 16px;
  border-radius: 6px;
  border: 1px solid var(--border-light);
  background-color: ${props => 
    props.selected ? 'var(--bg-purple-light)' : 'white'};
  transition: all 0.2s;
  cursor: pointer;
  
  &:hover {
    background-color: var(--bg-purple-hover);
    border-color: var(--border-purple-light);
  }
`;

const RadioInput = styled.input`
  margin-right: 12px;
  margin-top: 3px;
  accent-color: var(--qbo-purple-primary);
  cursor: pointer;
`;

const OptionLabel = styled.label`
  cursor: pointer;
  flex: 1;
  font-size: 14px;
`;

const TextInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: 1px solid var(--border-light);
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 20px;
  resize: vertical;
  font-family: inherit;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.2);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  border-top: 1px solid var(--border-light);
  padding-top: 16px;
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
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    background-color: ${props => 
      props.primary ? 'var(--qbo-purple-dark)' : 'var(--bg-purple-light)'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 57, 179, 0.3);
  }
`;

const QuestionCard = () => {
  const { 
    state, 
    answerQuestion, 
    goToQuestion, 
    goToPrevious, 
    updateSectionProgress, 
    completeSection 
  } = useTroubleshooter();
  
  const [selectedOption, setSelectedOption] = useState('');
  const [textInput, setTextInput] = useState('');
  const [showCompletionModal, setShowCompletionModal] = useState(false);
  const [completedSection, setCompletedSection] = useState('');
  
  const currentQuestion = questions[state.currentQuestionId];
  
  if (!currentQuestion) {
    // Find appropriate section and redirect to it
    const currentSection = state.currentSection;
    const { sections } = require('../data/troubleshooterData');
    const section = sections.find(s => s.id === currentSection) || sections[0];
    const initialQuestion = section.initialQuestion || 'ST1';
    
    // Auto-redirect to the initial question of the current section
    setTimeout(() => {
      goToQuestion(initialQuestion, currentSection);
    }, 100);
    
    return <Card>
      <QuestionTitle>
        <QuestionIcon>
          <i className="fas fa-sync fa-spin"></i>
        </QuestionIcon>
        <QuestionText>Redirecting to appropriate question...</QuestionText>
      </QuestionTitle>
      <QuestionSubtext>
        The question ID "{state.currentQuestionId}" is not found. You will be redirected to the appropriate starting point.
      </QuestionSubtext>
      <ButtonContainer>
        <QuestionInfo>
          <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i>
          Navigation in progress...
        </QuestionInfo>
        <ActionButtons>
          <Button onClick={() => goToQuestion('ST1', 'starting')}>
            <i className="fas fa-home"></i> Return to Start
          </Button>
        </ActionButtons>
      </ButtonContainer>
    </Card>;
  }
  
  const questionOptions = currentQuestion.type === 'yesno' 
    ? [
        { id: 'yes', text: 'Yes' },
        { id: 'no', text: 'No' }
      ] 
    : options[state.currentQuestionId] || [];
  
  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };
  
  const handleTextChange = (e) => {
    setTextInput(e.target.value);
  };
  
  const handleNext = () => {
    // Save the answer
    const answer = currentQuestion.type === 'text' ? textInput : selectedOption;
    
    // Get the text of the selected option for multiple choice questions
    let answerText = answer;
    if (currentQuestion.type !== 'text' && questionOptions.length > 0) {
      const selectedOptionObj = questionOptions.find(option => option.id === answer);
      if (selectedOptionObj) {
        answerText = selectedOptionObj.text;
      }
    }
    
    // Call answerQuestion with all necessary information
    answerQuestion(
      state.currentQuestionId, 
      answerText,
      currentQuestion.text,
      currentQuestion.shortText || currentQuestion.text.substring(0, 50) + (currentQuestion.text.length > 50 ? '...' : ''),
      currentQuestion.importance || 'low',
      currentQuestion.section // Pass the section directly from the question
    );
    
    // Update section progress
    updateSectionProgress(state.currentSection, calculateSectionProgress(state.currentSection, state.answers));
    
    // Determine next question
    let nextId;
    if (currentQuestion.type === 'text') {
      // For text inputs, check for 'next' or 'any' as navigation key
      nextId = navigationMap[state.currentQuestionId]?.['next'] || navigationMap[state.currentQuestionId]?.['any'];
    } else if (currentQuestion.type === 'yesno') {
      // For yes/no questions
      nextId = navigationMap[state.currentQuestionId]?.[selectedOption];
    } else {
      // For multiple choice questions
      nextId = navigationMap[state.currentQuestionId]?.[selectedOption];
    }
    
    // Determine section from next question ID
    let nextSection = state.currentSection;
    if (nextId) {
      // Check if the next question exists in our questions object
      if (questions[nextId]) {
        // Use the section defined in the question object
        nextSection = questions[nextId].section;
      } else {
        // Fallback for old format questions (question_section_number)
        const sectionMatch = nextId.match(/question_([^_]+)_/);
        if (sectionMatch) {
          nextSection = sectionMatch[1];
        }
      }
    }
    
    // Check if section is changing (section completed)
    if (nextSection !== state.currentSection && state.currentSection !== 'starting') {
      // Mark current section as completed
      completeSection(state.currentSection);
      
      // Show completion modal
      setCompletedSection(state.currentSection);
      setShowCompletionModal(true);
      return; // Don't navigate yet - will navigate after modal is closed
    }
    
    // Navigate to next question or solution
    if (nextId) {
      goToQuestion(nextId, nextSection);
    } else {
      console.error(`No next question defined for ${state.currentQuestionId} with answer ${selectedOption}`);
      // Fallback to a default question if navigation fails
      goToQuestion('question_starting_1', 'starting');
    }
  };
  
  // Handle section completion modal close
  const handleModalClose = () => {
    setShowCompletionModal(false);
    
    // Determine next question after section completion
    let nextId;
    if (currentQuestion.type === 'text') {
      nextId = navigationMap[state.currentQuestionId]?.['next'] || navigationMap[state.currentQuestionId]?.['any'];
    } else if (currentQuestion.type === 'yesno') {
      nextId = navigationMap[state.currentQuestionId]?.[selectedOption];
    } else {
      nextId = navigationMap[state.currentQuestionId]?.[selectedOption];
    }
    
    // Determine section from next question ID
    let nextSection = state.currentSection;
    if (nextId) {
      // Check if the next question exists in our questions object
      if (questions[nextId]) {
        // Use the section defined in the question object
        nextSection = questions[nextId].section;
      } else {
        // Fallback for old format questions (question_section_number)
        const sectionMatch = nextId.match(/question_([^_]+)_/);
        if (sectionMatch) {
          nextSection = sectionMatch[1];
        }
      }
    }
    
    // Navigate to next question or solution
    if (nextId) {
      goToQuestion(nextId, nextSection);
    } else {
      console.error(`No next question defined for ${state.currentQuestionId} with answer ${selectedOption}`);
      // Fallback to a default question if navigation fails
      goToQuestion('question_starting_1', 'starting');
    }
  };
  
  const handleBack = () => {
    goToPrevious();
  };
  
  const showBackButton = state.previousQuestionIds.length > 0;
  const canContinue = currentQuestion.type === 'text' 
    ? textInput.trim() !== '' 
    : selectedOption !== '';
    
  // Helper function to check if a question is of a specific type
  const isQuestionOfType = (questionId, type) => {
    return questions[questionId] && questions[questionId].type === type;
  };

  // Helper to get question number within a section
  const getQuestionNumber = () => {
    const questionId = state.currentQuestionId;
    if (!questionId) return '?';
    
    // Get the section questions in order
    const sectionQuestions = Object.keys(questions)
      .filter(id => questions[id].section === state.currentSection)
      .sort((a, b) => {
        // Extract the numeric part from question IDs (e.g., question_user_1 -> 1)
        const numA = parseInt(a.split('_').pop());
        const numB = parseInt(b.split('_').pop());
        return numA - numB;
      });
    
    // Find the current question's index in the ordered list
    const index = sectionQuestions.findIndex(id => id === questionId);
    return index !== -1 ? (index + 1) : '?';
  };

  // Get an appropriate icon for the question's type
  const getQuestionIcon = () => {
    switch (currentQuestion?.type) {
      case 'text':
        return 'fa-keyboard';
      case 'yesno':
        return 'fa-toggle-on';
      case 'multiple':
        return 'fa-list-ul';
      default:
        return 'fa-question';
    }
  };

  return (
    <>
      <Card>
        <IconContainer>
          <Icon className={`fas ${state.currentSection ? `fa-${state.currentSection}` : 'fa-question'} ${currentQuestion.importance ? currentQuestion.importance : 'low'}`} />
        </IconContainer>
        <ContentContainer>
          <QuestionInfo>
            <QuestionHeading>
              <h2>{currentQuestion.text}</h2>
            </QuestionHeading>
            <SectionInfo>
              Section: <span>{getSectionDisplayName(state.currentSection)}</span>
            </SectionInfo>
          </QuestionInfo>
          {currentQuestion.subtext && (
            <QuestionSubtext>{currentQuestion.subtext}</QuestionSubtext>
          )}
          {currentQuestion.type === 'text' ? (
            <TextInput
              value={textInput}
              onChange={handleTextChange}
              placeholder="Enter your answer here..."
            />
          ) : (
            <OptionsContainer>
              {questionOptions.map((option) => (
                <RadioOption 
                  key={option.id}
                  selected={selectedOption === option.id}
                  onClick={() => setSelectedOption(option.id)}
                >
                  <RadioInput
                    type="radio"
                    id={`option-${option.id}`}
                    name="question-option"
                    value={option.id}
                    checked={selectedOption === option.id}
                    onChange={handleOptionChange}
                  />
                  <OptionLabel htmlFor={`option-${option.id}`}>
                    {option.text}
                  </OptionLabel>
                </RadioOption>
              ))}
            </OptionsContainer>
          )}
          <ButtonContainer>
            <QuestionInfo>
              <i className="fas fa-clipboard-list" style={{ marginRight: '8px' }}></i>
              Question {getQuestionNumber()} of {countQuestionsBySection(state.currentSection)}
            </QuestionInfo>
            <ActionButtons>
              {showBackButton && (
                <Button onClick={handleBack}>
                  <i className="fas fa-arrow-left"></i> Back
                </Button>
              )}
              <Button 
                primary 
                disabled={!canContinue}
                onClick={handleNext}
              >
                Continue <i className="fas fa-arrow-right"></i>
              </Button>
            </ActionButtons>
          </ButtonContainer>
        </ContentContainer>
      </Card>
      
      <SectionCompletionModal 
        isOpen={showCompletionModal} 
        onClose={handleModalClose} 
        section={completedSection} 
      />
    </>
  );
};

export default QuestionCard;
