/**
 * Utility functions to convert between different data formats for the QBO Troubleshooter
 * This helps bridge the original Google Apps Script format with our React app format
 */

/**
 * Convert a question from the original format to the React app format
 * @param {Object} originalQuestion - Question in original format [id, text, shortText, type, section, importance, completeSection, hint, textContent]
 * @returns {Object} Question in React app format
 */
export const convertQuestionFormat = (originalQuestion) => {
  // Original format is an array with fixed positions
  if (Array.isArray(originalQuestion)) {
    return {
      id: originalQuestion[0],
      text: originalQuestion[1],
      shortText: originalQuestion[2],
      type: originalQuestion[3],
      section: originalQuestion[4],
      importance: originalQuestion[5],
      completeSection: originalQuestion[6] === 'true',
      hint: originalQuestion[7],
      textContent: originalQuestion[8] || ''
    };
  }
  
  // Already in object format
  return originalQuestion;
};

/**
 * Convert a question from React app format back to original format
 * @param {Object} appQuestion - Question in React app format
 * @returns {Array} Question in original format
 */
export const convertQuestionToOriginalFormat = (appQuestion) => {
  return [
    appQuestion.id,
    appQuestion.text,
    appQuestion.shortText,
    appQuestion.type,
    appQuestion.section,
    appQuestion.importance,
    appQuestion.completeSection ? 'true' : 'false',
    appQuestion.hint || '',
    appQuestion.textContent || ''
  ];
};

/**
 * Convert an option from the original format to the React app format
 * @param {Object} originalOption - Option in original format [questionId, value, label]
 * @returns {Object} Option in React app format
 */
export const convertOptionFormat = (originalOption) => {
  // Original format is an array with fixed positions
  if (Array.isArray(originalOption)) {
    return {
      questionId: originalOption[0],
      value: originalOption[1],
      label: originalOption[2]
    };
  }
  
  // Already in object format
  return originalOption;
};

/**
 * Convert an option from React app format back to original format
 * @param {Object} appOption - Option in React app format
 * @returns {Array} Option in original format
 */
export const convertOptionToOriginalFormat = (appOption) => {
  return [
    appOption.questionId,
    appOption.value,
    appOption.label
  ];
};

/**
 * Convert a navigation rule from the original format to the React app format
 * @param {Object} originalNavRule - Navigation rule in original format [questionId, answer, nextQuestionId]
 * @returns {Object} Navigation rule in React app format
 */
export const convertNavigationFormat = (originalNavRule) => {
  // Original format is an array with fixed positions
  if (Array.isArray(originalNavRule)) {
    return {
      questionId: originalNavRule[0],
      answer: originalNavRule[1],
      nextQuestionId: originalNavRule[2]
    };
  }
  
  // Already in object format
  return originalNavRule;
};

/**
 * Convert a navigation rule from React app format back to original format
 * @param {Object} appNavRule - Navigation rule in React app format
 * @returns {Array} Navigation rule in original format
 */
export const convertNavigationToOriginalFormat = (appNavRule) => {
  return [
    appNavRule.questionId,
    appNavRule.answer,
    appNavRule.nextQuestionId
  ];
};

/**
 * Convert a section from the original format to the React app format
 * @param {Object} originalSection - Section in original format [id, title, firstQuestionId, questionCount, color, icon]
 * @returns {Object} Section in React app format
 */
export const convertSectionFormat = (originalSection) => {
  // Original format is an array with fixed positions
  if (Array.isArray(originalSection)) {
    return {
      id: originalSection[0],
      title: originalSection[1],
      firstQuestionId: originalSection[2],
      questionCount: originalSection[3],
      color: originalSection[4],
      icon: originalSection[5]
    };
  }
  
  // Already in object format
  return originalSection;
};

/**
 * Convert a section from React app format back to original format
 * @param {Object} appSection - Section in React app format
 * @returns {Array} Section in original format
 */
export const convertSectionToOriginalFormat = (appSection) => {
  return [
    appSection.id,
    appSection.title,
    appSection.firstQuestionId,
    appSection.questionCount,
    appSection.color,
    appSection.icon
  ];
};

/**
 * Prepare complete troubleshooter data for export in the original format
 * @param {Object} appData - Complete troubleshooter data in React app format
 * @returns {Object} Troubleshooter data in original format ready for export
 */
export const prepareDataForExport = (appData) => {
  const result = {
    questions: Object.values(appData.questions).map(convertQuestionToOriginalFormat),
    options: [],
    navigation: [],
    sections: appData.sections.map(convertSectionToOriginalFormat)
  };
  
  // Process options
  for (const questionId in appData.options) {
    appData.options[questionId].forEach(option => {
      result.options.push(convertOptionToOriginalFormat({
        questionId,
        value: option.value,
        label: option.label
      }));
    });
  }
  
  // Process navigation
  for (const questionId in appData.navigationMap) {
    const navRules = appData.navigationMap[questionId];
    if (typeof navRules === 'object') {
      for (const answer in navRules) {
        result.navigation.push([
          questionId,
          answer,
          navRules[answer]
        ]);
      }
    }
  }
  
  return result;
};

/**
 * Import data from original format to React app format
 * @param {Object} originalData - Troubleshooter data in original format
 * @returns {Object} Troubleshooter data in React app format
 */
export const importDataFromOriginalFormat = (originalData) => {
  const result = {
    questions: {},
    options: {},
    navigationMap: {},
    sections: []
  };
  
  // Process questions
  originalData.questions.forEach(q => {
    const question = convertQuestionFormat(q);
    result.questions[question.id] = question;
  });
  
  // Process options
  originalData.options.forEach(o => {
    const option = convertOptionFormat(o);
    if (!result.options[option.questionId]) {
      result.options[option.questionId] = [];
    }
    result.options[option.questionId].push({
      value: option.value,
      label: option.label
    });
  });
  
  // Process navigation
  originalData.navigation.forEach(n => {
    const nav = convertNavigationFormat(n);
    if (!result.navigationMap[nav.questionId]) {
      result.navigationMap[nav.questionId] = {};
    }
    result.navigationMap[nav.questionId][nav.answer] = nav.nextQuestionId;
  });
  
  // Process sections
  result.sections = originalData.sections.map(convertSectionFormat);
  
  return result;
};
