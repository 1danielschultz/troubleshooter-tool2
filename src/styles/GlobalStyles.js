import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Primary Colors */
    --qbo-purple-primary: #6A39B3;
    --qbo-purple-dark: #4E2A87;
    --qbo-purple-darker: #341C5C;
    --qbo-purple-light: #8A5CD6;
    --qbo-purple-lighter: #F2E9FC;
    --qbo-purple-lightest: #F8F2FF;
    
    /* Header Colors */
    --header-bg: #6A39B3;
    --header-dark-bg: #4E2A87;
    --header-darker-bg: #341C5C;
    --header-text: #FFFFFF;
    
    /* Status Colors */
    --success-color: #16A34A;
    --warning-color: #F59E0B;
    --error-color: #DC2626;
    --alert-color: #EF4444;
    
    /* Text Colors */
    --text-primary: #1E293B;
    --text-secondary: #475569;
    --text-light: #94A3B8;
    --text-white: #FFFFFF;
    --text-purple-900: #4C1D95; /* Deep purple for history item titles */
    --text-gray-600: #4B5563;   /* Gray for history answer text */
    
    /* Background Colors */
    --bg-primary: #FFFFFF;
    --bg-secondary: #F1F5F9;
    --bg-lighter: #F8FAFC;
    --bg-purple-light: #F5F0FF;
    --bg-purple-hover: #EBE0FE;
    
    /* Border Colors */
    --border-light: #E2E8F0;
    --border-primary: #CBD5E1;
    --border-purple-light: #D4C0FA;
    
    /* Tab Colors */
    --tab-starting-color: #38B2AC; /* Teal shade for Starting tab */
    --tab-user-color: #6A39B3;
    --tab-data-color: #8A5CD6;
    --tab-application-color: #4E2A87;
    --tab-system-color: #341C5C;
    --tab-errorcode-color: #C53030; /* Red shade for Error Codes tab */
    --tab-resources-color: #3B82F6; /* Blue shade for Resources tab */
    
    /* Spacing */
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
    
    /* Font sizes */
    --font-size-xs: 12px;
    --font-size-sm: 14px;
    --font-size-md: 16px;
    --font-size-lg: 18px;
    --font-size-xl: 24px;
    
    /* Border radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    
    /* Transitions */
    --transition-fast: 0.2s;
    --transition-normal: 0.3s;
    --transition-slow: 0.5s;
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-primary);
    background-color: var(--bg-lighter);
  }
  
  /* Animation for pulse effect */
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  
  .animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  }
  
  /* QBO utility classes to match GAS app */
  .qbo-bg-lighter {
    background-color: var(--bg-lighter);
  }
  
  .qbo-bg-primary {
    background-color: var(--bg-primary);
  }
  
  .qbo-header-bg {
    background-color: var(--header-bg);
  }
  
  .qbo-header-dark-bg {
    background-color: var(--header-dark-bg);
  }
  
  .qbo-border-primary {
    border-color: var(--border-primary);
  }
  
  .qbo-text-primary {
    color: var(--qbo-purple-primary);
  }
  
  .qbo-button-primary {
    background-color: var(--qbo-purple-primary);
    color: var(--text-white);
    padding: 8px 16px;
    border: none;
    border-radius: var(--border-radius-sm);
    font-weight: 500;
    cursor: pointer;
    transition: background-color var(--transition-fast);
  }
  
  .qbo-button-primary:hover {
    background-color: var(--qbo-purple-dark);
  }
  
  .qbo-section-active {
    background-color: var(--bg-primary);
    color: var(--qbo-purple-primary);
  }
  
  /* Tab colors */
  .qbo-tab-starting {
    background-color: var(--tab-starting-color);
  }
  
  .qbo-tab-user {
    background-color: var(--tab-user-color);
  }
  
  .qbo-tab-data {
    background-color: var(--tab-data-color);
  }
  
  .qbo-tab-application {
    background-color: var(--tab-application-color);
  }
  
  .qbo-tab-system {
    background-color: var(--tab-system-color);
  }
  
  .qbo-tab-errorcode {
    background-color: var(--tab-errorcode-color);
  }
  
  .qbo-tab-resources {
    background-color: var(--tab-resources-color);
  }
  
  /* Custom border classes */
  .border-l-3 {
    border-left-width: 3px !important;
  }
  
  /* History panel styling */
  .history-item-title {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-purple-900);
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1.3;
    margin-bottom: 4px;
  }
  
  .history-item-content {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: var(--text-gray-600);
    font-size: 0.75rem;
    line-height: 1.4;
  }
  
  .history-section-header {
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 1.2;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  }
  
  .history-panel {
    background-color: var(--bg-lighter);
    border-right: 2px solid var(--qbo-purple-primary);
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  }
  
  .history-container {
    padding: 10px;
    background-color: var(--bg-lighter);
  }
  
  .history-item {
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
    transition: all 0.2s ease;
    position: relative;
    overflow: hidden;
  }
  
  .history-item:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    background-color: var(--bg-purple-light);
  }
  
  .history-item::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 5px;
    background: linear-gradient(to right, transparent, rgba(106, 57, 179, 0.05));
  }
  
  .history-item.border-l-red-500::after {
    background: linear-gradient(to right, transparent, rgba(239, 68, 68, 0.05));
  }
  
  /* Style for the first item in each section */
  .history-item:first-of-type {
    border-top-right-radius: 3px;
  }
  
  /* Style for the last item in each section */
  .history-item:last-of-type {
    border-bottom-right-radius: 3px;
    border-bottom: none;
  }
  
  /* Hide scrollbar for cleaner UI */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--qbo-purple-lighter);
  }
  
  ::-webkit-scrollbar-thumb {
    background: var(--qbo-purple-primary);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: var(--qbo-purple-dark);
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    color: var(--text-primary);
  }
  
  h1 {
    font-size: var(--font-size-xl);
  }
  
  h2 {
    font-size: var(--font-size-lg);
  }
  
  p {
    margin-bottom: var(--spacing-md);
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
    transition: all var(--transition-fast);
  }
`;

export default GlobalStyles;
