import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { questions, sections, navigationMap } from '../../data/troubleshooterData';
import { convertQuestionFormat, convertQuestionToOriginalFormat } from './utils/DataConverter';

const EditorContainer = styled.div`
  display: flex;
`;

const QuestionList = styled.div`
  width: 300px;
  border-right: 1px solid var(--border-light);
  padding-right: 1.5rem;
  margin-right: 1.5rem;
  overflow-y: auto;
  max-height: 700px;
`;

const QuestionItem = styled.div`
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  background-color: ${props => props.active ? 'var(--bg-purple-light)' : 'white'};
  border: 1px solid ${props => props.active ? 'var(--qbo-purple-light)' : 'var(--border-light)'};
  
  &:hover {
    background-color: var(--bg-purple-light);
  }
`;

const QuestionTitle = styled.h3`
  font-size: 0.875rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const QuestionSection = styled.span`
  font-size: 0.75rem;
  color: var(--text-gray-500);
  background-color: var(--bg-lighter);
  padding: 0.125rem 0.375rem;
  border-radius: 4px;
  margin-top: 0.25rem;
  display: inline-block;
`;

const EditorForm = styled.div`
  flex: 1;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
  color: var(--text-gray-700);
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  min-height: 100px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--border-light);
  border-radius: 4px;
  font-size: 0.875rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
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

const OptionsContainer = styled.div`
  margin-top: 1.5rem;
  border-top: 1px solid var(--border-light);
  padding-top: 1.5rem;
`;

const OptionItem = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
  align-items: flex-start;
`;

const RemoveButton = styled.button`
  background-color: #f8d7da;
  color: #721c24;
  border: none;
  width: 28px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover {
    background-color: #f5c6cb;
  }
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  background-color: var(--bg-lighter);
  color: var(--text-gray-700);
  border: 1px dashed var(--border-light);
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  margin-top: 0.75rem;
  
  &:hover {
    background-color: var(--bg-purple-light);
    border-color: var(--qbo-purple-light);
  }
`;

const QuestionEditor = () => {
  const [questionList, setQuestionList] = useState([]);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    text: '',
    shortText: '',
    type: 'multiple',
    section: 'starting',
    importance: 'medium',
    completeSection: false,
    hint: '',
    textContent: '',
    options: []
  });
  const [sectionFilter, setSectionFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Load questions on component mount
  useEffect(() => {
    // Convert questions from original format
    const questionsArray = Object.entries(questions).map(([id, questionData]) => {
      const question = convertQuestionFormat({
        id,
        ...questionData
      });
      
      // Add options for this question
      question.options = [];
      if (navigationMap[id] && typeof navigationMap[id] === 'object') {
        question.options = Object.entries(navigationMap[id])
          .filter(([answer]) => answer !== 'default')
          .map(([answer, nextQuestionId]) => ({
            value: answer,
            label: answer, // We'll try to find the full label later
            nextQuestionId
          }));
      }
      
      return question;
    });
    
    setQuestionList(questionsArray);
    
    if (questionsArray.length > 0) {
      setSelectedQuestion(questionsArray[0].id);
      setFormData({
        ...questionsArray[0]
      });
    }
  }, []);
  
  // Filter questions based on section and search term
  const getFilteredQuestions = () => {
    return questionList.filter(question => {
      // Filter by section if not 'all'
      const sectionMatch = sectionFilter === 'all' || question.section === sectionFilter;
      
      // Filter by search term if present
      const searchMatch = !searchTerm || 
        question.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        question.id.toLowerCase().includes(searchTerm.toLowerCase());
        
      return sectionMatch && searchMatch;
    });
  };

  // Handle selecting a question
  const handleSelectQuestion = (questionId) => {
    const selectedQuestionData = questionList.find(q => q.id === questionId);
    
    if (selectedQuestionData) {
      setSelectedQuestion(questionId);
      setFormData({
        ...selectedQuestionData
      });
    }
  };
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Handle option changes
  const handleOptionChange = (index, field, value) => {
    const updatedOptions = [...formData.options];
    updatedOptions[index] = {
      ...updatedOptions[index],
      [field]: value
    };
    
    setFormData(prev => ({
      ...prev,
      options: updatedOptions
    }));
  };
  
  // Add new option
  const handleAddOption = () => {
    setFormData(prev => ({
      ...prev,
      options: [...prev.options, { value: '', label: '', nextQuestionId: '' }]
    }));
  };
  
  // Remove option
  const handleRemoveOption = (index) => {
    const updatedOptions = [...formData.options];
    updatedOptions.splice(index, 1);
    
    setFormData(prev => ({
      ...prev,
      options: updatedOptions
    }));
  };
  
  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };
  
  // Save question changes
  const handleSaveQuestion = () => {
    // Validate form data
    if (!formData.id) {
      alert('Question ID is required');
      return;
    }
    
    if (!formData.text) {
      alert('Question text is required');
      return;
    }
    
    // For multiple choice questions, validate options
    if ((formData.type === 'multiple' || formData.type === 'yesno') && formData.options.length === 0) {
      alert('At least one option is required for multiple choice questions');
      return;
    }
    
    // Update the question list
    const updatedList = questionList.map(q => 
      q.id === formData.id ? { ...formData } : q
    );
    
    setQuestionList(updatedList);
    
    // Here we would update the questions data in the application
    alert('Question changes saved to temporary memory. Use Export functionality to save permanently.');
  };
  
  // Create new question
  const handleCreateQuestion = () => {
    // Create ID based on section and question number pattern like in original app
    const sectionPrefix = sectionFilter !== 'all' ? sectionFilter.charAt(0).toUpperCase() : 'Q';
    const sectionQuestions = questionList.filter(q => q.section === (sectionFilter !== 'all' ? sectionFilter : 'starting'));
    const questionNumber = sectionQuestions.length + 1;
    const newId = `${sectionPrefix}${questionNumber}`;
    
    const newQuestion = {
      id: newId,
      text: 'New Question',
      shortText: 'New Question',
      type: 'multiple',
      section: sectionFilter !== 'all' ? sectionFilter : 'starting',
      importance: 'medium',
      completeSection: false,
      hint: '',
      textContent: '',
      options: []
    };
    
    setQuestionList(prev => [...prev, newQuestion]);
    setSelectedQuestion(newId);
    setFormData(newQuestion);
  };
  
  return (
    <EditorContainer>
      <QuestionList>
        <div style={{ marginBottom: '1rem' }}>
          <FormGroup>
            <FormLabel htmlFor="sectionFilter">Filter by Section</FormLabel>
            <FormSelect 
              id="sectionFilter" 
              name="sectionFilter" 
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
            >
              <option value="all">All Sections</option>
              <option value="starting">Starting Point</option>
              <option value="user">User</option>
              <option value="data">Data</option>
              <option value="application">Application</option>
              <option value="system">System</option>
            </FormSelect>
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="searchTerm">Search Questions</FormLabel>
            <FormInput 
              type="text" 
              id="searchTerm" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by ID or text..."
            />
          </FormGroup>
        </div>
        
        {getFilteredQuestions().map(question => (
          <QuestionItem 
            key={question.id} 
            active={selectedQuestion === question.id}
            onClick={() => handleSelectQuestion(question.id)}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
              <QuestionTitle>{question.text}</QuestionTitle>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-gray-500)' }}>{question.id}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <QuestionSection>{question.section}</QuestionSection>
              <QuestionSection style={{ backgroundColor: question.importance === 'high' ? '#fad2e1' : question.importance === 'medium' ? '#fff4bd' : '#d1e9d5' }}>
                {question.importance}
              </QuestionSection>
            </div>
          </QuestionItem>
        ))}
        
        <AddButton onClick={handleCreateQuestion}>
          + Add New Question
        </AddButton>
      </QuestionList>
      
      <EditorForm>
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
          <FormGroup style={{ flex: 1 }}>
            <FormLabel htmlFor="id">Question ID</FormLabel>
            <FormInput 
              type="text" 
              id="id" 
              name="id" 
              value={formData.id || ''}
              onChange={handleInputChange}
              disabled={!!selectedQuestion} // Only editable for new questions
            />
          </FormGroup>
          
          <FormGroup style={{ flex: 1 }}>
            <FormLabel htmlFor="section">Section</FormLabel>
            <FormSelect 
              id="section" 
              name="section" 
              value={formData.section || 'starting'}
              onChange={handleInputChange}
            >
              <option value="starting">Starting Point</option>
              <option value="user">User</option>
              <option value="data">Data</option>
              <option value="application">Application</option>
              <option value="system">System</option>
            </FormSelect>
          </FormGroup>
          
          <FormGroup style={{ flex: 1 }}>
            <FormLabel htmlFor="importance">Importance</FormLabel>
            <FormSelect 
              id="importance" 
              name="importance" 
              value={formData.importance || 'medium'}
              onChange={handleInputChange}
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </FormSelect>
          </FormGroup>
        </div>
        
        <FormGroup>
          <FormLabel htmlFor="text">Question Text (Full)</FormLabel>
          <FormTextarea 
            id="text" 
            name="text" 
            value={formData.text || ''}
            onChange={handleInputChange}
            rows={3}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="shortText">Short Question Text (For History)</FormLabel>
          <FormInput 
            type="text" 
            id="shortText" 
            name="shortText" 
            value={formData.shortText || ''}
            onChange={handleInputChange}
            placeholder="Shorter version of the question for display in history"
          />
        </FormGroup>
        
        <div style={{ display: 'flex', gap: '1rem' }}>
          <FormGroup style={{ flex: 1 }}>
            <FormLabel htmlFor="type">Question Type</FormLabel>
            <FormSelect 
              id="type" 
              name="type" 
              value={formData.type || 'multiple'}
              onChange={handleInputChange}
            >
              <option value="multiple">Multiple Choice</option>
              <option value="yesno">Yes/No</option>
              <option value="text">Text Input</option>
            </FormSelect>
          </FormGroup>
          
          <FormGroup style={{ flex: 1 }}>
            <FormLabel style={{ display: 'flex', alignItems: 'center' }}>
              <input 
                type="checkbox" 
                name="completeSection" 
                checked={formData.completeSection} 
                onChange={handleCheckboxChange}
                style={{ marginRight: '0.5rem' }}
              />
              Completes Section
            </FormLabel>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-gray-600)', marginTop: '0.25rem' }}>
              Check if this question is the final question in a troubleshooting section
            </div>
          </FormGroup>
        </div>
        
        <FormGroup>
          <FormLabel htmlFor="hint">Question Hint</FormLabel>
          <FormInput 
            type="text" 
            id="hint" 
            name="hint" 
            value={formData.hint || ''}
            onChange={handleInputChange}
            placeholder="Guidance for agent on this question (optional)"
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="textContent">Detailed Content</FormLabel>
          <FormTextarea 
            id="textContent" 
            name="textContent" 
            value={formData.textContent || ''}
            onChange={handleInputChange}
            rows={3}
            placeholder="Additional detailed content for text-type questions (optional)"
          />
        </FormGroup>
        
        {(formData.type === 'multiple' || formData.type === 'yesno') && (
          <OptionsContainer>
            <FormLabel>Answer Options and Navigation</FormLabel>
            
            {formData.options && formData.options.map((option, index) => (
              <OptionItem key={index}>
                <RemoveButton onClick={() => handleRemoveOption(index)}>
                  ×
                </RemoveButton>
                
                <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.5rem' }}>
                  <FormInput 
                    type="text" 
                    placeholder="Option Value"
                    value={option.value || ''}
                    onChange={(e) => handleOptionChange(index, 'value', e.target.value)}
                    title="Internal value used for this option"
                  />
                  
                  <FormInput 
                    type="text" 
                    placeholder="Display Label"
                    value={option.label || ''}
                    onChange={(e) => handleOptionChange(index, 'label', e.target.value)}
                    title="Text shown to the user"
                  />
                  
                  <FormSelect
                    value={option.nextQuestionId || ''}
                    onChange={(e) => handleOptionChange(index, 'nextQuestionId', e.target.value)}
                    title="The next question to show when this option is selected"
                  >
                    <option value="">-- Select Next Question --</option>
                    {questionList.map(q => (
                      <option key={q.id} value={q.id}>
                        {q.id}: {q.text.substring(0, 30)}{q.text.length > 30 ? '...' : ''}
                      </option>
                    ))}
                    <option value="SHOW_SUMMARY">SHOW_SUMMARY (End)</option>
                  </FormSelect>
                </div>
              </OptionItem>
            ))}
            
            <AddButton onClick={handleAddOption}>
              + Add Answer Option
            </AddButton>
          </OptionsContainer>
        )}
        
        <ButtonGroup>
          <SecondaryButton onClick={() => handleSelectQuestion(selectedQuestion)}>
            Cancel Changes
          </SecondaryButton>
          
          <PrimaryButton onClick={handleSaveQuestion}>
            Save Question
          </PrimaryButton>
        </ButtonGroup>
      </EditorForm>
    </EditorContainer>
  );
};

export default QuestionEditor;
