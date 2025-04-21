import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { sections } from '../../data/troubleshooterData';

const EditorContainer = styled.div`
  display: flex;
`;

const SectionList = styled.div`
  width: 300px;
  border-right: 1px solid var(--border-light);
  padding-right: 1.5rem;
  margin-right: 1.5rem;
  overflow-y: auto;
  max-height: 700px;
`;

const SectionItem = styled.div`
  padding: 0.75rem;
  border-radius: 4px;
  margin-bottom: 0.5rem;
  cursor: pointer;
  background-color: ${props => props.active ? 'var(--bg-purple-light)' : 'white'};
  border: 1px solid ${props => props.active ? 'var(--qbo-purple-light)' : 'var(--border-light)'};
  
  &:hover {
    background-color: var(--bg-purple-light);
  }
  
  display: flex;
  align-items: center;
`;

const SectionIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${props => props.color || 'var(--qbo-purple-primary)'};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 0.75rem;
  font-size: 0.875rem;
`;

const SectionDetails = styled.div`
  flex: 1;
`;

const SectionTitle = styled.h3`
  font-size: 0.875rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SectionId = styled.span`
  font-size: 0.75rem;
  color: var(--text-gray-500);
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

const ColorPreview = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  background-color: ${props => props.color};
  margin-top: 0.5rem;
  border: 1px solid var(--border-light);
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

const SectionEditor = () => {
  const [sectionList, setSectionList] = useState([]);
  const [selectedSection, setSelectedSection] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    color: '',
    icon: ''
  });
  
  // Load sections on component mount
  useEffect(() => {
    setSectionList([...sections]);
    
    if (sections.length > 0) {
      setSelectedSection(sections[0].id);
      setFormData({
        ...sections[0]
      });
    }
  }, []);
  
  // Handle selecting a section
  const handleSelectSection = (sectionId) => {
    const selectedSectionData = sectionList.find(s => s.id === sectionId);
    
    if (selectedSectionData) {
      setSelectedSection(sectionId);
      setFormData({
        ...selectedSectionData
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
  
  // Save section changes
  const handleSaveSection = () => {
    const updatedList = sectionList.map(s => 
      s.id === formData.id ? { ...formData } : s
    );
    
    setSectionList(updatedList);
    
    // Here we would update the sections data in the application
    alert('Section changes saved to temporary memory. Use Export functionality to save permanently.');
  };
  
  // Create new section
  const handleCreateSection = () => {
    const newId = 'section_' + Math.random().toString(36).substr(2, 9);
    
    const newSection = {
      id: newId,
      title: 'New Section',
      color: 'var(--qbo-purple-primary)',
      icon: 'fa-star'
    };
    
    setSectionList(prev => [...prev, newSection]);
    setSelectedSection(newId);
    setFormData(newSection);
  };
  
  // Get icon element based on icon name
  const getIconElement = (icon) => {
    if (icon.startsWith('fa-')) {
      return <i className={`fas ${icon}`}></i>;
    }
    
    // For emoji icons
    return icon;
  };
  
  return (
    <EditorContainer>
      <SectionList>
        {sectionList.map(section => (
          <SectionItem 
            key={section.id} 
            active={selectedSection === section.id}
            onClick={() => handleSelectSection(section.id)}
          >
            <SectionIcon color={section.color}>
              {getIconElement(section.icon)}
            </SectionIcon>
            <SectionDetails>
              <SectionTitle>{section.title}</SectionTitle>
              <SectionId>{section.id}</SectionId>
            </SectionDetails>
          </SectionItem>
        ))}
        
        <AddButton onClick={handleCreateSection}>
          + Add New Section
        </AddButton>
      </SectionList>
      
      <EditorForm>
        <FormGroup>
          <FormLabel htmlFor="id">Section ID</FormLabel>
          <FormInput 
            type="text" 
            id="id" 
            name="id" 
            value={formData.id || ''}
            onChange={handleInputChange}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="title">Section Title</FormLabel>
          <FormInput 
            type="text" 
            id="title" 
            name="title" 
            value={formData.title || ''}
            onChange={handleInputChange}
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="color">Section Color</FormLabel>
          <FormInput 
            type="text" 
            id="color" 
            name="color" 
            value={formData.color || ''}
            onChange={handleInputChange}
            placeholder="var(--color-name) or #RRGGBB"
          />
          <ColorPreview color={formData.color} />
        </FormGroup>
        
        <FormGroup>
          <FormLabel htmlFor="icon">Section Icon</FormLabel>
          <FormInput 
            type="text" 
            id="icon" 
            name="icon" 
            value={formData.icon || ''}
            onChange={handleInputChange}
            placeholder="fa-icon-name or emoji"
          />
          <div style={{ marginTop: '0.5rem', fontSize: '1.5rem' }}>
            {formData.icon && getIconElement(formData.icon)}
          </div>
        </FormGroup>
        
        <ButtonGroup>
          <SecondaryButton onClick={() => handleSelectSection(selectedSection)}>
            Cancel Changes
          </SecondaryButton>
          
          <PrimaryButton onClick={handleSaveSection}>
            Save Section
          </PrimaryButton>
        </ButtonGroup>
      </EditorForm>
    </EditorContainer>
  );
};

export default SectionEditor;
