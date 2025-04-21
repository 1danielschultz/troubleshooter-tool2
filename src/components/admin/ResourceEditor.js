import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { knowledgeBase } from '../../data/troubleshooterData';

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  margin-top: 1rem;
`;

const ResourceCard = styled.div`
  border: 1px solid var(--border-light);
  border-radius: 8px;
  overflow: hidden;
  background-color: white;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }
`;

const ResourceHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid var(--border-light);
  background-color: var(--bg-lighter);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResourceTitle = styled.h3`
  font-size: 0.875rem;
  margin: 0;
  color: var(--text-gray-800);
  max-width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ResourceActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ActionButton = styled.button`
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: none;
  background-color: ${props => props.delete ? '#f8d7da' : 'var(--bg-purple-light)'};
  color: ${props => props.delete ? '#721c24' : 'var(--qbo-purple-primary)'};
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.delete ? '#f5c6cb' : 'var(--bg-purple-lighter)'};
  }
`;

const ResourceBody = styled.div`
  padding: 1rem;
`;

const ResourceDetail = styled.div`
  margin-bottom: 0.75rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ResourceLabel = styled.div`
  font-size: 0.75rem;
  color: var(--text-gray-500);
  margin-bottom: 0.25rem;
`;

const ResourceValue = styled.div`
  font-size: 0.875rem;
  color: var(--text-gray-700);
  word-break: break-word;
`;

const ResourceLink = styled.a`
  color: var(--qbo-purple-primary);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ResourceTag = styled.span`
  display: inline-block;
  padding: 0.125rem 0.375rem;
  background-color: var(--bg-lighter);
  border-radius: 4px;
  font-size: 0.75rem;
  color: var(--text-gray-700);
  margin-right: 0.375rem;
  margin-bottom: 0.375rem;
`;

const AddButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: var(--bg-lighter);
  color: var(--text-gray-700);
  border: 2px dashed var(--border-light);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--bg-purple-light);
    border-color: var(--qbo-purple-light);
  }
`;

const EditorModal = styled.div`
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
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  margin: 0;
  color: var(--text-gray-800);
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: var(--text-gray-500);
  font-size: 1.5rem;
  cursor: pointer;
  
  &:hover {
    color: var(--text-gray-700);
  }
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
  margin-top: 1.5rem;
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

const MessageContainer = styled.div`
  text-align: center;
  padding: 2rem;
  color: var(--text-gray-500);
`;

const ResourceEditor = () => {
  const [activeTab, setActiveTab] = useState('kb');
  const [resources, setResources] = useState({
    kbArticles: [],
    quickTips: []
  });
  const [showModal, setShowModal] = useState(false);
  const [editingResource, setEditingResource] = useState(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    description: '',
    url: '',
    content: '',
    driver: 'all'
  });
  
  // Load resources on component mount
  useEffect(() => {
    setResources({
      kbArticles: [...knowledgeBase.kbArticles],
      quickTips: [...knowledgeBase.quickTips]
    });
  }, []);
  
  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  // Open modal to add a new resource
  const handleAddResource = () => {
    // Generate a unique ID
    const newId = activeTab === 'kb' ? 
      `kb${Math.random().toString(36).substr(2, 6)}` : 
      `tip${Math.random().toString(36).substr(2, 6)}`;
    
    // Set default form data for the resource type
    setFormData({
      id: newId,
      title: '',
      description: activeTab === 'kb' ? '' : undefined,
      url: activeTab === 'kb' ? '' : undefined,
      content: activeTab === 'kb' ? undefined : '',
      driver: 'all'
    });
    
    setEditingResource(null);
    setShowModal(true);
  };
  
  // Open modal to edit an existing resource
  const handleEditResource = (resource) => {
    setFormData({
      ...resource
    });
    
    setEditingResource(resource);
    setShowModal(true);
  };
  
  // Handle resource deletion
  const handleDeleteResource = (resourceId) => {
    if (window.confirm('Are you sure you want to delete this resource?')) {
      if (activeTab === 'kb') {
        setResources(prev => ({
          ...prev,
          kbArticles: prev.kbArticles.filter(item => item.id !== resourceId)
        }));
      } else {
        setResources(prev => ({
          ...prev,
          quickTips: prev.quickTips.filter(item => item.id !== resourceId)
        }));
      }
    }
  };
  
  // Save the resource
  const handleSaveResource = () => {
    if (activeTab === 'kb') {
      // Handle KB article
      if (editingResource) {
        // Update existing article
        setResources(prev => ({
          ...prev,
          kbArticles: prev.kbArticles.map(item => 
            item.id === formData.id ? { ...formData } : item
          )
        }));
      } else {
        // Add new article
        setResources(prev => ({
          ...prev,
          kbArticles: [...prev.kbArticles, { ...formData }]
        }));
      }
    } else {
      // Handle quick tip
      if (editingResource) {
        // Update existing tip
        setResources(prev => ({
          ...prev,
          quickTips: prev.quickTips.map(item => 
            item.id === formData.id ? { ...formData } : item
          )
        }));
      } else {
        // Add new tip
        setResources(prev => ({
          ...prev,
          quickTips: [...prev.quickTips, { ...formData }]
        }));
      }
    }
    
    setShowModal(false);
    
    // Here we would update the resources data in the application
    alert('Resource changes saved to temporary memory. Use Export functionality to save permanently.');
  };
  
  // Render KB articles
  const renderKBArticles = () => {
    if (resources.kbArticles.length === 0) {
      return (
        <MessageContainer>
          No knowledge base articles found. Click "Add New Resource" to create one.
        </MessageContainer>
      );
    }
    
    return (
      <ResourcesGrid>
        {resources.kbArticles.map(article => (
          <ResourceCard key={article.id}>
            <ResourceHeader>
              <ResourceTitle>{article.title}</ResourceTitle>
              <ResourceActions>
                <ActionButton onClick={() => handleEditResource(article)}>
                  ✎
                </ActionButton>
                <ActionButton delete onClick={() => handleDeleteResource(article.id)}>
                  ×
                </ActionButton>
              </ResourceActions>
            </ResourceHeader>
            
            <ResourceBody>
              {article.description && (
                <ResourceDetail>
                  <ResourceLabel>Description</ResourceLabel>
                  <ResourceValue>{article.description}</ResourceValue>
                </ResourceDetail>
              )}
              
              <ResourceDetail>
                <ResourceLabel>URL</ResourceLabel>
                <ResourceValue>
                  <ResourceLink href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.url}
                  </ResourceLink>
                </ResourceValue>
              </ResourceDetail>
              
              <ResourceDetail>
                <ResourceLabel>Driver</ResourceLabel>
                <ResourceValue>
                  <ResourceTag>{article.driver}</ResourceTag>
                </ResourceValue>
              </ResourceDetail>
            </ResourceBody>
          </ResourceCard>
        ))}
      </ResourcesGrid>
    );
  };
  
  // Render quick tips
  const renderQuickTips = () => {
    if (resources.quickTips.length === 0) {
      return (
        <MessageContainer>
          No quick tips found. Click "Add New Resource" to create one.
        </MessageContainer>
      );
    }
    
    return (
      <ResourcesGrid>
        {resources.quickTips.map(tip => (
          <ResourceCard key={tip.id}>
            <ResourceHeader>
              <ResourceTitle>{tip.title}</ResourceTitle>
              <ResourceActions>
                <ActionButton onClick={() => handleEditResource(tip)}>
                  ✎
                </ActionButton>
                <ActionButton delete onClick={() => handleDeleteResource(tip.id)}>
                  ×
                </ActionButton>
              </ResourceActions>
            </ResourceHeader>
            
            <ResourceBody>
              <ResourceDetail>
                <ResourceLabel>Content</ResourceLabel>
                <ResourceValue>{tip.content}</ResourceValue>
              </ResourceDetail>
              
              <ResourceDetail>
                <ResourceLabel>Driver</ResourceLabel>
                <ResourceValue>
                  <ResourceTag>{tip.driver}</ResourceTag>
                </ResourceValue>
              </ResourceDetail>
            </ResourceBody>
          </ResourceCard>
        ))}
      </ResourcesGrid>
    );
  };
  
  return (
    <EditorContainer>
      <TabsContainer>
        <Tab 
          active={activeTab === 'kb'} 
          onClick={() => setActiveTab('kb')}
        >
          KB Articles
        </Tab>
        <Tab 
          active={activeTab === 'tips'} 
          onClick={() => setActiveTab('tips')}
        >
          Quick Tips
        </Tab>
      </TabsContainer>
      
      {activeTab === 'kb' ? renderKBArticles() : renderQuickTips()}
      
      <div style={{ marginTop: '1.5rem' }}>
        <AddButton onClick={handleAddResource}>
          + Add New Resource
        </AddButton>
      </div>
      
      {/* Resource Editor Modal */}
      {showModal && (
        <EditorModal>
          <ModalContent>
            <ModalHeader>
              <ModalTitle>
                {editingResource ? 'Edit Resource' : 'Add New Resource'}
              </ModalTitle>
              <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            </ModalHeader>
            
            <FormGroup>
              <FormLabel htmlFor="id">Resource ID</FormLabel>
              <FormInput 
                type="text" 
                id="id" 
                name="id" 
                value={formData.id || ''}
                onChange={handleInputChange}
                disabled={!!editingResource}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="title">Title</FormLabel>
              <FormInput 
                type="text" 
                id="title" 
                name="title" 
                value={formData.title || ''}
                onChange={handleInputChange}
              />
            </FormGroup>
            
            {activeTab === 'kb' ? (
              <>
                <FormGroup>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <FormTextarea 
                    id="description" 
                    name="description" 
                    value={formData.description || ''}
                    onChange={handleInputChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="url">URL</FormLabel>
                  <FormInput 
                    type="text" 
                    id="url" 
                    name="url" 
                    value={formData.url || ''}
                    onChange={handleInputChange}
                  />
                </FormGroup>
              </>
            ) : (
              <FormGroup>
                <FormLabel htmlFor="content">Content</FormLabel>
                <FormTextarea 
                  id="content" 
                  name="content" 
                  value={formData.content || ''}
                  onChange={handleInputChange}
                />
              </FormGroup>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="driver">Call Driver</FormLabel>
              <FormSelect 
                id="driver" 
                name="driver" 
                value={formData.driver || 'all'}
                onChange={handleInputChange}
              >
                {knowledgeBase.callDrivers.map(driver => (
                  <option key={driver.id} value={driver.id}>
                    {driver.name}
                  </option>
                ))}
              </FormSelect>
            </FormGroup>
            
            <ButtonGroup>
              <SecondaryButton onClick={() => setShowModal(false)}>
                Cancel
              </SecondaryButton>
              
              <PrimaryButton onClick={handleSaveResource}>
                Save Resource
              </PrimaryButton>
            </ButtonGroup>
          </ModalContent>
        </EditorModal>
      )}
    </EditorContainer>
  );
};

export default ResourceEditor;
