import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { knowledgeBase } from '../data/troubleshooterData';

const ResourcesContainer = styled.div`
  max-width: 4xl;
  margin: 0 auto;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const ResourceTypeButton = styled.button`
  width: 33.333%;
  padding: 0.75rem;
  font-weight: 600;
  border-radius: 0.375rem;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  
  &.primary {
    background-color: var(--qbo-purple-primary);
    color: white;
    border: 1px solid var(--qbo-purple-dark);
  }
  
  &.secondary {
    background-color: white;
    color: var(--text-gray-700);
    border: 1px solid var(--border-light);
    
    &:hover {
      background-color: var(--bg-purple-light);
      border-color: var(--qbo-purple-light);
    }
  }
`;

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  gap: 1rem;
`;

const FilterLabel = styled.label`
  font-weight: 600;
  color: var(--text-gray-700);
  white-space: nowrap;
`;

const FilterSelect = styled.select`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid var(--qbo-purple-primary);
  border-radius: 0.375rem;
  outline: none;
  
  &:focus {
    box-shadow: 0 0 0 2px var(--qbo-purple-lighter);
  }
`;

const ResourcesContent = styled.div`
  background-color: white;
  border-radius: 0.375rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
`;

const ResourcesHeader = styled.div`
  margin-bottom: 1rem;
`;

const ResourcesTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--text-gray-700);
  margin: 0;
`;

const ResourcesCount = styled.p`
  font-size: 0.875rem;
  color: var(--text-gray-500);
  margin-top: 0.25rem;
`;

const KBArticlesList = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid var(--border-light);
`;

const QuickTipsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const QuickTipCard = styled.div`
  background-color: var(--bg-purple-light);
  border-radius: 0.375rem;
  padding: 1rem;
  border-left: 4px solid var(--qbo-purple-primary);
`;

const QuickTipTitle = styled.h4`
  font-weight: 700;
  color: var(--text-purple-900);
  margin-bottom: 0.5rem;
`;

const QuickTipContent = styled.div`
  font-size: 0.875rem;
  color: var(--text-gray-700);
`;

const QuickTipTags = styled.p`
  font-size: 0.75rem;
  color: var(--text-gray-500);
  margin-top: 0.5rem;
`;

const ResourceItem = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid var(--border-light);
  
  &:last-child {
    border-bottom: none;
  }
`;

const ResourceItemHeader = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ResourceIcon = styled.div`
  margin-right: 0.75rem;
  font-size: 1.25rem;
  color: var(--qbo-purple-primary);
`;

const ResourceInfo = styled.div`
  flex: 1;
`;

const ResourceTitle = styled.h4`
  font-weight: 700;
  color: var(--text-purple-800);
  margin: 0 0 0.25rem 0;
`;

const ResourceLink = styled.a`
  text-decoration: none;
  color: inherit;
  
  &:hover {
    text-decoration: underline;
  }
`;

const ResourceType = styled.p`
  font-size: 0.75rem;
  color: var(--qbo-purple-primary);
  margin: 0.125rem 0 0.25rem 0;
`;

const ResourceDescription = styled.p`
  font-size: 0.875rem;
  color: var(--text-gray-600);
  margin: 0.25rem 0;
`;

const ResourceTags = styled.p`
  font-size: 0.75rem;
  color: var(--text-gray-500);
  margin: 0.25rem 0 0;
`;

// Component to render the Resources section
const ResourcesPanel = () => {
  const [resourceType, setResourceType] = useState('kbArticles');
  const [callDriver, setCallDriver] = useState('all');
  const [filteredResources, setFilteredResources] = useState([]);
  
  // Initialize data on component mount
  useEffect(() => {
    updateFilteredResources(resourceType, callDriver);
  }, [resourceType, callDriver]);
  
  // Update filtered resources based on type and driver
  const updateFilteredResources = (type, driver) => {
    let resources = [];
    
    if (type === 'kbArticles') {
      resources = knowledgeBase.kbArticles || [];
    } else if (type === 'quickTips') {
      resources = knowledgeBase.quickTips || [];
    }
    
    // Filter by call driver if not 'all'
    if (driver !== 'all') {
      resources = resources.filter(r => r.driver === driver || r.driver === 'all');
    }
    
    setFilteredResources(resources);
  };
  
  // Get icon based on resource type
  const getResourceTypeIcon = (type) => {
    switch (type?.toLowerCase()) {
      case 'pdf':
        return '📑';
      case 'video':
        return '🎬';
      case 'tool':
        return '🔧';
      case 'guide':
        return '📝';
      case 'template':
        return '📋';
      case 'training':
        return '🎓';
      default:
        return '🔗';
    }
  };
  
  // Render knowledge base articles
  const renderKBArticles = (articles) => {
    if (!articles || articles.length === 0) {
      return <p className="text-center text-gray-500">No articles found for the selected criteria.</p>;
    }
    
    return (
      <KBArticlesList>
        {articles.map(article => (
          <ResourceItem key={article.id}>
            <ResourceItemHeader>
              <ResourceIcon>📄</ResourceIcon>
              <ResourceInfo>
                <ResourceTitle>
                  <ResourceLink href={article.url} target="_blank" rel="noopener noreferrer">
                    {article.title}
                  </ResourceLink>
                </ResourceTitle>
                {article.description && <ResourceDescription>{article.description}</ResourceDescription>}
                {article.keywords && <ResourceTags>Tags: {article.keywords}</ResourceTags>}
              </ResourceInfo>
            </ResourceItemHeader>
          </ResourceItem>
        ))}
      </KBArticlesList>
    );
  };
  
  // Render quick tips
  const renderQuickTips = (tips) => {
    if (!tips || tips.length === 0) {
      return <p className="text-center text-gray-500">No tips found for the selected criteria.</p>;
    }
    
    return (
      <QuickTipsList>
        {tips.map(tip => (
          <QuickTipCard key={tip.id}>
            <QuickTipTitle>{tip.title}</QuickTipTitle>
            <QuickTipContent>{tip.content}</QuickTipContent>
            {tip.keywords && <QuickTipTags>Tags: {tip.keywords}</QuickTipTags>}
          </QuickTipCard>
        ))}
      </QuickTipsList>
    );
  };
  
  // Get title text based on current resource type
  const getTitleText = () => {
    switch (resourceType) {
      case 'kbArticles':
        return 'Knowledge Base Articles';
      case 'quickTips':
        return 'Quick Tips';
      default:
        return 'Resources';
    }
  };
  
  return (
    <ResourcesContainer>
      {/* Resource Type Selection Buttons */}
      <ButtonGroup>
        <ResourceTypeButton 
          className={resourceType === 'kbArticles' ? 'primary' : 'secondary'}
          onClick={() => setResourceType('kbArticles')}
        >
          KB Articles
        </ResourceTypeButton>
        <ResourceTypeButton 
          className={resourceType === 'quickTips' ? 'primary' : 'secondary'}
          onClick={() => setResourceType('quickTips')}
        >
          Quick Tips
        </ResourceTypeButton>
      </ButtonGroup>
      
      {/* Call Driver Filter */}
      <FilterContainer>
        <FilterLabel htmlFor="callDriverSelect">Filter by Issue Type:</FilterLabel>
        <FilterSelect
          id="callDriverSelect"
          value={callDriver}
          onChange={(e) => setCallDriver(e.target.value)}
        >
          {knowledgeBase.callDrivers.map(driver => (
            <option key={driver.id} value={driver.id}>{driver.name}</option>
          ))}
        </FilterSelect>
      </FilterContainer>
      
      {/* Resources Content */}
      <ResourcesContent>
        <ResourcesHeader>
          <ResourcesTitle>{getTitleText()}</ResourcesTitle>
          <ResourcesCount>
            Showing {filteredResources.length} result{filteredResources.length !== 1 ? 's' : ''}
          </ResourcesCount>
        </ResourcesHeader>
        
        {resourceType === 'kbArticles' ? 
          renderKBArticles(filteredResources) : 
          renderQuickTips(filteredResources)
        }
      </ResourcesContent>
    </ResourcesContainer>
  );
};

export default ResourcesPanel;
