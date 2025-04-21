import React, { createContext, useContext, useReducer } from 'react';

// Initial state of the troubleshooter
const initialState = {
  // Agent information
  agentId: 'Unknown',
  sessionStartTime: null,
  
  // Navigation and sections
  currentQuestionId: 'ST1',
  previousQuestionIds: [],
  currentSection: 'starting',
  sectionProgress: {
    starting: 0,
    user: 0,
    data: 0,
    application: 0,
    system: 0,
    errorcode: 0,
    resources: 0
  },
  completedSections: {
    starting: false,
    user: false,
    data: false,
    application: false,
    system: false,
    errorcode: false,
    resources: false
  },
  
  // User responses
  answers: {},
  
  // History of questions with detailed information
  history: [],
  
  // UI state
  showKnowledgeBase: false,
  
  // Analytics tracking
  analyticsData: {
    questionsAnswered: 0,
    pathTaken: [],
    timeSpent: 0
  },
  
  // Knowledge base and resources state
  resourcesState: {
    currentType: 'kbArticles', // kbArticles, quickTips
    currentDriver: 'all',
    recentlyViewed: []
  }
};

// Action types for reducer
const ACTION_TYPES = {
  SET_AGENT_INFO: 'SET_AGENT_INFO',
  START_SESSION: 'START_SESSION',
  ANSWER_QUESTION: 'ANSWER_QUESTION',
  GO_TO_QUESTION: 'GO_TO_QUESTION',
  GO_TO_PREVIOUS: 'GO_TO_PREVIOUS',
  UPDATE_SECTION_PROGRESS: 'UPDATE_SECTION_PROGRESS',
  TOGGLE_KNOWLEDGE_BASE: 'TOGGLE_KNOWLEDGE_BASE',
  UPDATE_RESOURCES_STATE: 'UPDATE_RESOURCES_STATE',
  ADD_VIEWED_RESOURCE: 'ADD_VIEWED_RESOURCE',
  COMPLETE_SECTION: 'COMPLETE_SECTION',
  RESET: 'RESET'
};

// Reducer function to handle state changes
const troubleshooterReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_AGENT_INFO:
      return {
        ...state,
        agentId: action.payload
      };
    
    case ACTION_TYPES.START_SESSION:
      return {
        ...state,
        sessionStartTime: new Date().toISOString()
      };
    
    case ACTION_TYPES.ANSWER_QUESTION:
      // Extract section from payload or use the one defined in the questions object
      let section = action.payload.section || 'unknown';
      
      // If section wasn't provided, try to get it from the questions object
      if (section === 'unknown' && action.payload.questionId) {
        const { questions } = require('../data/troubleshooterData');
        section = questions[action.payload.questionId]?.section || 'unknown';
      }
      
      // Create a history entry with detailed information
      const historyEntry = {
        id: action.payload.questionId,
        section: section,
        question: action.payload.questionText || `Question ${action.payload.questionId}`,
        shortQuestion: action.payload.shortQuestionText,
        answer: action.payload.answer,
        importance: action.payload.importance || 'low',
        timestamp: new Date().toISOString()
      };
      
      // Make sure we're not adding duplicate entries for the same question
      // First check if this question is already in the history
      const historyWithoutCurrentQuestion = state.history.filter(
        entry => entry.id !== action.payload.questionId
      );
      
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.questionId]: action.payload.answer
        },
        // Only add the new history entry, removing any previous entries for this question
        history: [...historyWithoutCurrentQuestion, historyEntry],
        analyticsData: {
          ...state.analyticsData,
          questionsAnswered: state.analyticsData.questionsAnswered + 1,
          pathTaken: [...state.analyticsData.pathTaken, action.payload.questionId]
        }
      };
    
    case ACTION_TYPES.GO_TO_QUESTION:
      return {
        ...state,
        currentQuestionId: action.payload.questionId,
        previousQuestionIds: [
          ...state.previousQuestionIds, 
          state.currentQuestionId
        ],
        currentSection: action.payload.section || state.currentSection
      };
    
    case ACTION_TYPES.GO_TO_PREVIOUS:
      const previousQuestionIds = [...state.previousQuestionIds];
      const previousId = previousQuestionIds.pop();
      
      // Find the section for the previous question
      let previousSection = state.currentSection;
      
      // First check if it's a question in our new format
      const { questions } = require('../data/troubleshooterData');
      if (questions[previousId]) {
        previousSection = questions[previousId].section;
      } else {
        // Fallback to the old format extraction
        const sectionMatch = previousId.match(/question_([^_]+)_/);
        if (sectionMatch) {
          previousSection = sectionMatch[1];
        }
      }
      
      // Remove the last history entry if it exists
      // This prevents duplicates when answering the same question again
      const updatedHistory = state.history.length > 0 
        ? state.history.slice(0, -1) 
        : state.history;
      
      return {
        ...state,
        currentQuestionId: previousId,
        previousQuestionIds,
        currentSection: previousSection,
        history: updatedHistory
      };
    
    case ACTION_TYPES.UPDATE_SECTION_PROGRESS:
      return {
        ...state,
        sectionProgress: {
          ...state.sectionProgress,
          [action.payload.section]: action.payload.progress
        }
      };
    
    case ACTION_TYPES.TOGGLE_KNOWLEDGE_BASE:
      return {
        ...state,
        showKnowledgeBase: !state.showKnowledgeBase
      };
    
    case ACTION_TYPES.UPDATE_RESOURCES_STATE:
      return {
        ...state,
        resourcesState: {
          ...state.resourcesState,
          ...action.payload
        }
      };
    
    case ACTION_TYPES.ADD_VIEWED_RESOURCE:
      // Add to recently viewed, but avoid duplicates and limit to 5 items
      const updatedRecent = [
        action.payload,
        ...state.resourcesState.recentlyViewed.filter(r => r.id !== action.payload.id)
      ].slice(0, 5);
      
      return {
        ...state,
        resourcesState: {
          ...state.resourcesState,
          recentlyViewed: updatedRecent
        }
      };
    
    case ACTION_TYPES.COMPLETE_SECTION:
      return {
        ...state,
        completedSections: {
          ...state.completedSections,
          [action.payload]: true
        }
      };
    
    case ACTION_TYPES.RESET:
      return {
        ...initialState,
        agentId: state.agentId, // Preserve agent ID
        sessionStartTime: new Date().toISOString() // Reset session time
      };
    
    default:
      return state;
  }
};

// Create context
const TroubleshooterContext = createContext();

// Provider component
export const TroubleshooterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(troubleshooterReducer, initialState);
  
  // Helper functions to dispatch actions
  const updateAgentInfo = (agentId) => {
    dispatch({ 
      type: ACTION_TYPES.SET_AGENT_INFO, 
      payload: agentId 
    });
    
    // Also start the session
    dispatch({ type: ACTION_TYPES.START_SESSION });
  };
  
  const answerQuestion = (questionId, answer, questionText, shortQuestionText, importance) => {
    dispatch({
      type: ACTION_TYPES.ANSWER_QUESTION,
      payload: { questionId, answer, questionText, shortQuestionText, importance }
    });
  };
  
  const goToQuestion = (questionId, section) => {
    dispatch({
      type: ACTION_TYPES.GO_TO_QUESTION,
      payload: { questionId, section }
    });
  };
  
  const goToPrevious = () => {
    if (state.previousQuestionIds.length > 0) {
      dispatch({ type: ACTION_TYPES.GO_TO_PREVIOUS });
    }
  };
  
  const updateSectionProgress = (section, progress) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_SECTION_PROGRESS,
      payload: { section, progress }
    });
  };
  
  const toggleKnowledgeBase = () => {
    dispatch({ type: ACTION_TYPES.TOGGLE_KNOWLEDGE_BASE });
  };
  
  const updateResourcesState = (newState) => {
    dispatch({
      type: ACTION_TYPES.UPDATE_RESOURCES_STATE,
      payload: newState
    });
  };
  
  const addViewedResource = (resource) => {
    dispatch({
      type: ACTION_TYPES.ADD_VIEWED_RESOURCE,
      payload: resource
    });
  };
  
  const completeSection = (section) => {
    dispatch({
      type: ACTION_TYPES.COMPLETE_SECTION,
      payload: section
    });
  };
  
  const resetTroubleshooter = () => {
    dispatch({ type: ACTION_TYPES.RESET });
  };
  
  // Value to be provided to consumers
  const value = {
    state,
    updateAgentInfo,
    answerQuestion,
    goToQuestion,
    goToPrevious,
    updateSectionProgress,
    toggleKnowledgeBase,
    updateResourcesState,
    addViewedResource,
    completeSection,
    resetTroubleshooter
  };
  
  return (
    <TroubleshooterContext.Provider value={value}>
      {children}
    </TroubleshooterContext.Provider>
  );
};

// Custom hook to use the troubleshooter context
export const useTroubleshooter = () => {
  const context = useContext(TroubleshooterContext);
  
  if (!context) {
    throw new Error('useTroubleshooter must be used within a TroubleshooterProvider');
  }
  
  return context;
};
