import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { questions, navigationMap } from '../../data/troubleshooterData';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  margin-bottom: 1.5rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  color: var(--text-gray-700);
  margin: 0 0 0.5rem 0;
`;

const Description = styled.p`
  color: var(--text-gray-600);
  margin: 0;
  font-size: 0.875rem;
`;

const NavigationTable = styled.div`
  border: 1px solid var(--border-light);
  border-radius: 8px;
  overflow: hidden;
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 3fr;
  background-color: var(--bg-lighter);
  padding: 0.75rem 1rem;
  font-weight: 600;
  border-bottom: 1px solid var(--border-light);
`;

const TableBody = styled.div`
  max-height: 600px;
  overflow-y: auto;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 3fr;
  padding: 0.75rem 1rem;
  border-bottom: 1px solid var(--border-light);
  background-color: ${props => props.active ? 'var(--bg-purple-light)' : 'white'};
  
  &:hover {
    background-color: var(--bg-purple-light);
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
`;

const QuestionCell = styled(TableCell)`
  font-weight: 500;
  color: var(--text-gray-800);
`;

const AnswerCell = styled(TableCell)`
  color: var(--text-gray-700);
  font-style: italic;
`;

const NextQuestionCell = styled(TableCell)`
  position: relative;
`;

const SelectWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SelectArrow = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: var(--text-gray-500);
`;

const Select = styled.select`
  width: 100%;
  padding: 0.5rem 0.75rem;
  appearance: none;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  background-color: white;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`;

const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;
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

const NavigationEditor = () => {
  const [navMappings, setNavMappings] = useState([]);
  const [questionOptions, setQuestionOptions] = useState([]);
  
  // Initialize data on component mount
  useEffect(() => {
    // Convert navigation map to a more usable format for editing
    const mappingsArray = [];
    
    Object.entries(navigationMap).forEach(([questionId, answers]) => {
      // Get the question text
      const question = questions[questionId] || { text: 'Unknown Question' };
      
      if (typeof answers === 'object') {
        Object.entries(answers).forEach(([answer, nextQuestionId]) => {
          mappingsArray.push({
            questionId,
            questionText: question.text,
            answer,
            nextQuestionId
          });
        });
      }
    });
    
    setNavMappings(mappingsArray);
    
    // Create options for question selection
    const options = Object.entries(questions).map(([id, q]) => ({
      id,
      text: q.text
    }));
    
    setQuestionOptions(options);
  }, []);
  
  // Handle changing the next question
  const handleNextQuestionChange = (index, value) => {
    const updatedMappings = [...navMappings];
    updatedMappings[index].nextQuestionId = value;
    setNavMappings(updatedMappings);
  };
  
  // Save navigation changes
  const handleSaveChanges = () => {
    // Here we would rebuild the navigationMap object from the navMappings array
    // and update the application state
    alert('Navigation changes saved to temporary memory. Use Export functionality to save permanently.');
  };
  
  return (
    <EditorContainer>
      <Header>
        <Title>Question Navigation Flow</Title>
        <Description>
          Define where each question should lead based on the user's answer. This creates the
          decision tree for the troubleshooter.
        </Description>
      </Header>
      
      <NavigationTable>
        <TableHeader>
          <div>Question</div>
          <div>When Answer Is</div>
          <div>Go To Question</div>
        </TableHeader>
        
        <TableBody>
          {navMappings.map((mapping, index) => (
            <TableRow key={index}>
              <QuestionCell>{mapping.questionText}</QuestionCell>
              <AnswerCell>{mapping.answer}</AnswerCell>
              <NextQuestionCell>
                <SelectWrapper>
                  <Select
                    value={mapping.nextQuestionId}
                    onChange={(e) => handleNextQuestionChange(index, e.target.value)}
                  >
                    <option value="">-- Select Next Question --</option>
                    {questionOptions.map(option => (
                      <option key={option.id} value={option.id}>
                        {option.text}
                      </option>
                    ))}
                    <option value="SHOW_SUMMARY">Show Summary (End)</option>
                  </Select>
                  <SelectArrow>▼</SelectArrow>
                </SelectWrapper>
              </NextQuestionCell>
            </TableRow>
          ))}
        </TableBody>
      </NavigationTable>
      
      <ButtonContainer>
        <PrimaryButton onClick={handleSaveChanges}>
          Save Navigation Flow
        </PrimaryButton>
      </ButtonContainer>
    </EditorContainer>
  );
};

export default NavigationEditor;
