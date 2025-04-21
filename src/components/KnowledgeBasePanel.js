import React, { useState } from 'react';
import styled from 'styled-components';
import { useTroubleshooter } from '../context/TroubleshooterContext';
import { knowledgeBase } from '../data/troubleshooterData';

const PanelContainer = styled.div`
  background-color: var(--bg-primary);
  height: 100%;
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
`;

const PanelHeader = styled.div`
  background-color: var(--qbo-purple-primary);
  color: white;
  padding: var(--spacing-md) var(--spacing-lg);
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h3 {
    margin: 0;
    font-size: var(--font-size-md);
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  font-size: var(--font-size-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid var(--border-light);
`;

const Tab = styled.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-sm);
  font-weight: ${props => props.active ? '600' : '400'};
  color: ${props => props.active ? 'var(--qbo-purple-primary)' : 'var(--text-secondary)'};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--qbo-purple-primary);
    opacity: ${props => props.active ? '1' : '0'};
  }
  
  &:hover {
    color: var(--qbo-purple-primary);
  }
`;

const PanelContent = styled.div`
  padding: var(--spacing-md);
  flex: 1;
  overflow-y: auto;
`;

const FilterContainer = styled.div`
  margin-bottom: var(--spacing-md);
`;

const FilterLabel = styled.label`
  display: block;
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-xs);
  color: var(--text-secondary);
`;

const Select = styled.select`
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
  }
`;

const SearchInput = styled.input`
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
  
  &:focus {
    outline: none;
    border-color: var(--qbo-purple-primary);
  }
`;

const ItemsList = styled.div``;

const ArticleItem = styled.a`
  display: block;
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  color: var(--text-primary);
  text-decoration: none;
  
  &:hover {
    background-color: var(--bg-purple-light);
    text-decoration: none;
  }
  
  h4 {
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-sm);
    color: var(--qbo-purple-primary);
  }
  
  p {
    margin: 0;
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
  }
`;

const TipItem = styled.div`
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-sm);
  border: 1px solid var(--border-light);
  border-radius: var(--border-radius-sm);
  background-color: var(--bg-purple-lightest);
  
  h4 {
    margin: 0 0 var(--spacing-xs) 0;
    font-size: var(--font-size-sm);
    font-weight: 600;
    color: var(--qbo-purple-primary);
  }
  
  p {
    margin: 0;
    font-size: var(--font-size-xs);
    color: var(--text-secondary);
  }
`;

const NoResults = styled.div`
  padding: var(--spacing-md);
  text-align: center;
  color: var(--text-secondary);
  font-size: var(--font-size-sm);
`;

const KnowledgeBasePanel = () => {
  const { state, toggleKnowledgeBase, updateResourcesState } = useTroubleshooter();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('articles');
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    updateResourcesState({ currentType: tab === 'articles' ? 'kbArticles' : 'quickTips' });
  };
  
  const handleDriverChange = (e) => {
    updateResourcesState({ currentDriver: e.target.value });
  };
  
  const handleClose = () => {
    toggleKnowledgeBase();
  };
  
  const filterItems = (items) => {
    const { currentDriver } = state.resourcesState;
    
    return items
      .filter(item => 
        (currentDriver === 'all' || item.driver === currentDriver) &&
        (searchTerm === '' || 
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item.content && item.content.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      );
  };
  
  const renderArticles = () => {
    const filteredArticles = filterItems(knowledgeBase.kbArticles);
    
    if (filteredArticles.length === 0) {
      return <NoResults>No articles found matching your criteria.</NoResults>;
    }
    
    return (
      <ItemsList>
        {filteredArticles.map((article, index) => (
          <ArticleItem 
            key={index} 
            href={article.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <h4>{article.title}</h4>
            <p>{article.description}</p>
          </ArticleItem>
        ))}
      </ItemsList>
    );
  };
  
  const renderTips = () => {
    const filteredTips = filterItems(knowledgeBase.quickTips);
    
    if (filteredTips.length === 0) {
      return <NoResults>No tips found matching your criteria.</NoResults>;
    }
    
    return (
      <ItemsList>
        {filteredTips.map((tip, index) => (
          <TipItem key={index}>
            <h4>{tip.title}</h4>
            <p>{tip.content}</p>
          </TipItem>
        ))}
      </ItemsList>
    );
  };
  
  return (
    <PanelContainer>
      <PanelHeader>
        <h3>Knowledge Base</h3>
        <CloseButton onClick={handleClose}>
          <i className="fas fa-times"></i>
        </CloseButton>
      </PanelHeader>
      
      <TabsContainer>
        <Tab 
          active={activeTab === 'articles'} 
          onClick={() => handleTabChange('articles')}
        >
          Articles
        </Tab>
        <Tab 
          active={activeTab === 'tips'} 
          onClick={() => handleTabChange('tips')}
        >
          Quick Tips
        </Tab>
      </TabsContainer>
      
      <PanelContent>
        <FilterContainer>
          <FilterLabel htmlFor="driver-filter">Filter by issue type:</FilterLabel>
          <Select 
            id="driver-filter" 
            value={state.resourcesState.currentDriver}
            onChange={handleDriverChange}
          >
            {knowledgeBase.callDrivers.map(driver => (
              <option key={driver.id} value={driver.id}>
                {driver.name}
              </option>
            ))}
          </Select>
        </FilterContainer>
        
        <SearchInput 
          type="text" 
          placeholder="Search knowledge base..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        {activeTab === 'articles' ? renderArticles() : renderTips()}
      </PanelContent>
    </PanelContainer>
  );
};

export default KnowledgeBasePanel;
