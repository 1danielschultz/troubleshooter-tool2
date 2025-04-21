import { questions } from '../data/troubleshooterData';

// Helper function to count questions by section
export const countQuestionsBySection = (() => {
  // Use a cache to avoid recalculating every time
  const cache = {};
  
  return (section) => {
    if (cache[section]) return cache[section];
    
    const count = Object.keys(questions).filter(questionId => {
      return questions[questionId].section === section && questionId.startsWith('question_');
    }).length;
    
    cache[section] = count;
    return count;
  };
})();

// Calculate progress percentage for a section
export const calculateSectionProgress = (section, answers) => {
  const totalQuestions = countQuestionsBySection(section);
  if (totalQuestions === 0) return 0;
  
  // Count answered questions in this section
  const answeredQuestions = Object.keys(answers || {})
    .filter(questionId => {
      return questionId.includes(`_${section}_`) && questionId.startsWith('question_');
    }).length;
  
  // Calculate percentage with a maximum of 100%
  return Math.min(Math.round((answeredQuestions / totalQuestions) * 100), 100);
};

// Get section display name from section ID
export const getSectionDisplayName = (section) => {
  const sectionNames = {
    starting: 'Initial Assessment',
    user: 'User Information',
    data: 'Data Issues',
    application: 'Application Problems',
    system: 'System Requirements',
    errorcode: 'Error Codes',
    resources: 'Resources'
  };
  
  return sectionNames[section] || section;
};

// Get icon class for a section
export const getIconForSection = (section) => {
  const sectionIcons = {
    starting: 'fa-flag',
    user: 'fa-user',
    data: 'fa-database',
    application: 'fa-laptop',
    system: 'fa-cogs',
    errorcode: 'fa-exclamation-triangle',
    resources: 'fa-book'
  };
  
  return sectionIcons[section] || 'fa-question';
};

// Get importance class for styling
export const getImportanceClass = (importance) => {
  switch (importance) {
    case 'high':
      return 'high-importance';
    case 'medium':
      return 'medium-importance';
    case 'low':
    default:
      return 'low-importance';
  }
};

// Format date for display
export const formatDate = (date) => {
  if (!date) return 'N/A';
  
  const options = { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  
  return new Date(date).toLocaleDateString(undefined, options);
};
