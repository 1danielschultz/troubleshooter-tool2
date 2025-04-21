import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionEditor from './QuestionEditor';
import SectionEditor from './SectionEditor';
import NavigationEditor from './NavigationEditor';
import ResourceEditor from './ResourceEditor';
import DataImportExport from './DataImportExport';

const AdminContainer = styled.div`
  background-color: #f5f7fa;
  min-height: 100vh;
  padding: 2rem;
`;

const AdminHeader = styled.header`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const AdminTitle = styled.h1`
  color: var(--qbo-purple-primary);
  margin: 0;
  font-size: 1.75rem;
`;

const AdminDescription = styled.p`
  color: var(--text-gray-600);
  margin: 0.5rem 0 0;
`;

const TabsContainer = styled.div`
  display: flex;
  background-color: white;
  border-radius: 8px 8px 0 0;
  overflow: hidden;
  margin-bottom: 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const Tab = styled.button`
  padding: 1rem 1.5rem;
  background-color: ${props => props.active ? 'var(--qbo-purple-primary)' : 'white'};
  color: ${props => props.active ? 'white' : 'var(--text-gray-700)'};
  border: none;
  cursor: pointer;
  font-weight: ${props => props.active ? '600' : '400'};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.active ? 'var(--qbo-purple-primary)' : 'var(--bg-purple-light)'};
  }
`;

const ContentContainer = styled.div`
  background-color: white;
  border-radius: 0 0 8px 8px;
  padding: 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
`;

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('questions');
  
  const renderContent = () => {
    switch (activeTab) {
      case 'questions':
        return <QuestionEditor />;
      case 'sections':
        return <SectionEditor />;
      case 'navigation':
        return <NavigationEditor />;
      case 'resources':
        return <ResourceEditor />;
      case 'import-export':
        return <DataImportExport />;
      default:
        return <QuestionEditor />;
    }
  };
  
  return (
    <AdminContainer>
      <AdminHeader>
        <AdminTitle>QBO Troubleshooter Admin Panel</AdminTitle>
        <AdminDescription>
          Edit questions, sections, navigation, and resources for the QBO Troubleshooter tool.
        </AdminDescription>
      </AdminHeader>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'questions'} 
          onClick={() => setActiveTab('questions')}
        >
          Questions
        </Tab>
        <Tab 
          active={activeTab === 'sections'} 
          onClick={() => setActiveTab('sections')}
        >
          Sections
        </Tab>
        <Tab 
          active={activeTab === 'navigation'} 
          onClick={() => setActiveTab('navigation')}
        >
          Navigation Flow
        </Tab>
        <Tab 
          active={activeTab === 'resources'} 
          onClick={() => setActiveTab('resources')}
        >
          Resources
        </Tab>
        <Tab 
          active={activeTab === 'import-export'} 
          onClick={() => setActiveTab('import-export')}
        >
          Import/Export
        </Tab>
      </TabsContainer>
      
      <ContentContainer>
        {renderContent()}
      </ContentContainer>
    </AdminContainer>
  );
};

export default AdminPanel;
