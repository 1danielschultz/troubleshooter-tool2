// QBO Troubleshooter data - imported from the original Google Apps Script application

// Questions organized by ID
export const questions = {
  // STARTING STAGE
  'ST1': {
    text: 'Please select the following category to begin troubleshooting.',
    shortText: 'Category selection',
    type: 'multiple',
    section: 'starting',
    importance: 'high',
    completeSection: false,
    hint: 'Select the area where the customer is experiencing issues'
  },
  
  // USER STAGE - GENERAL
  'U1': {
    text: 'Is the user able to log into QuickBooks Online successfully?',
    shortText: 'Login successful?',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: false,
    hint: 'Basic login functionality is the first step to troubleshoot'
  },
  'U2': {
    text: 'What specific permission or access issue is the user experiencing?',
    shortText: 'Specific permission issue',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific permission issue will help target the solution'
  },
  'U3': {
    text: "Has the user's role been verified in QBO?",
    shortText: 'Role verified?',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: false,
    hint: 'Different roles have different access levels in QBO'
  },
  'U4': {
    text: 'What browser and device is the user accessing QBO from?',
    shortText: 'Browser/device',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Browser compatibility issues can cause login problems'
  },
  'U5': {
    text: 'Have any of these common browser troubleshooting steps been tried?',
    shortText: 'Browser troubleshooting',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Browser-related issues are common causes of login problems'
  },
  'U6': {
    text: 'Is Multi-Factor Authentication (MFA) causing login issues?',
    shortText: 'MFA issues',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'MFA issues can prevent successful login'
  },
  'U7': {
    text: 'Has the user received any specific error message during login?',
    shortText: 'Login error message',
    type: 'text',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Error messages provide important clues for troubleshooting'
  },
  'U8': {
    text: "Is the user trying to access a specific feature they don't have permission for?",
    shortText: 'Feature permission issue',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: false,
    hint: 'Feature-specific permissions can be adjusted in the user settings'
  },
  'U9': {
    text: "Have you verified the user's custom role permissions?",
    shortText: 'Custom role verified',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Custom roles may need specific permission adjustments'
  },
  'U10': {
    text: 'Have you recommended these permission adjustment steps?',
    shortText: 'Permission adjustment steps',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Follow these steps to adjust user permissions correctly',
    textContent: '1. Log in as Admin or Company Admin\n2. Go to Gear icon > Manage Users\n3. Find the user and click Edit\n4. Adjust role or specific permissions as needed\n5. Save changes\n6. Have user log out and log back in'
  },
  'U11': {
    text: 'Has the company reached their user limit in their QBO subscription?',
    shortText: 'User limit reached',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'QBO subscriptions have limits on the number of users'
  },
  'U12': {
    text: 'Does the issue persist after implementing the user access solutions?',
    shortText: 'Issue persists after user solutions',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // USER STAGE - USER MANAGEMENT SPECIFIC
  'U-UM1': {
    text: 'What specific user management issue is the customer experiencing?',
    shortText: 'User management issue type',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific issue helps target the solution'
  },
  'U-UM2': {
    text: 'Can the admin see and manage all users in the Manage Users section?',
    shortText: 'Admin can manage users',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: false,
    hint: 'Only admins can manage users in QBO'
  },
  'U-UM3': {
    text: 'Is the user unable to be invited or is the invitation not being received?',
    shortText: 'User invitation issue',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Email delivery issues can prevent successful user invitations'
  },
  'U-UM4': {
    text: 'Is the issue related to deleting or removing a user?',
    shortText: 'User removal issue',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Certain users cannot be removed if they have transactions'
  },
  'U-UM5': {
    text: 'Have you advised on these steps for proper user management?',
    shortText: 'User management steps advised',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should resolve most user management issues',
    textContent: '1. Verify admin access\n2. Go to Gear icon > Manage Users\n3. Review current users and their roles\n4. For invitation issues: check email spelling, spam folders\n5. For deletion issues: ensure user has no associated transactions\n6. For role changes: select the appropriate role based on needed access'
  },
  'U-UM6': {
    text: 'Does the issue persist after implementing the user management solutions?',
    shortText: 'Issue persists after UM solutions',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // USER STAGE - BILLING SPECIFIC
  'U-B1': {
    text: 'What specific billing issue is the customer experiencing?',
    shortText: 'Billing issue type',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific billing issue helps target the solution'
  },
  'U-B2': {
    text: 'Does the user have admin or billing admin permissions?',
    shortText: 'Billing permissions',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: false,
    hint: 'Only admins or billing admins can access billing information'
  },
  'U-B3': {
    text: 'Is the customer trying to update their payment method?',
    shortText: 'Payment method update',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Payment method updates require specific permissions'
  },
  'U-B4': {
    text: 'Is the customer experiencing a declined payment?',
    shortText: 'Declined payment',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'Declined payments can cause subscription issues'
  },
  'U-B5': {
    text: 'Have you advised on these steps for billing issue resolution?',
    shortText: 'Billing steps advised',
    type: 'multiple',
    section: 'user',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should resolve most billing issues',
    textContent: '1. Verify admin access\n2. Go to Gear icon > Account and Settings > Billing & Subscription\n3. Verify subscription status and payment method\n4. For declined payments: update payment method\n5. For subscription changes: select appropriate plan\n6. For billing questions: review invoice and payment history'
  },
  'U-B6': {
    text: 'Does the issue persist after implementing the billing solutions?',
    shortText: 'Issue persists after billing solutions',
    type: 'multiple',
    section: 'user',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // DATA STAGE - GENERAL
  'D1': {
    text: 'Is the issue related to missing or incorrect data in QBO?',
    shortText: 'Data accuracy issues',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: false,
    hint: 'Data issues can be due to various factors in QBO'
  },
  'D2': {
    text: 'Have you checked if the data issue is related to date range filters?',
    shortText: 'Date filters checked',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: false,
    hint: 'Date range filters are a common cause of "missing" data'
  },
  'D3': {
    text: 'Is the customer having trouble finding specific transactions?',
    shortText: 'Finding transactions',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Transactions may exist but be difficult to locate'
  },
  'D4': {
    text: 'Has the customer checked the transaction status (e.g., pending, voided, deleted)?',
    shortText: 'Transaction status checked',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Transactions may have different statuses that affect visibility'
  },
  'D5': {
    text: 'Is the customer experiencing data sync issues between devices or users?',
    shortText: 'Data sync issues',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'QBO data should sync automatically across devices'
  },
  'D6': {
    text: 'Have custom reports been checked for the missing or incorrect data?',
    shortText: 'Custom reports checked',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Custom reports may include or exclude specific data'
  },
  'D7': {
    text: 'Have you advised on these steps to locate or correct data?',
    shortText: 'Data location steps advised',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should help locate most missing data',
    textContent: '1. Check date range settings (try All Dates)\n2. Clear all filters\n3. Check transaction status (pending, voided, deleted)\n4. Use advanced search with specific criteria\n5. Check all related accounts or registers\n6. Verify report settings and customizations'
  },
  'D8': {
    text: 'Does the issue persist after implementing the data solutions?',
    shortText: 'Issue persists after data solutions',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // DATA STAGE - INVOICES/SALES SPECIFIC
  'D-I1': {
    text: 'What specific invoice or sales transaction issue is occurring?',
    shortText: 'Invoice/sales issue type',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific issue helps target the solution'
  },
  'D-I2': {
    text: 'Is the customer unable to create a new invoice?',
    shortText: 'Cannot create invoice',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: false,
    hint: 'Permission or data issues may prevent invoice creation'
  },
  'D-I3': {
    text: 'Is the customer having trouble with invoice customization?',
    shortText: 'Invoice customization issue',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Custom templates and fields require specific steps'
  },
  'D-I4': {
    text: 'Are there issues with invoice email delivery?',
    shortText: 'Invoice email issue',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Email delivery depends on correct settings and email addresses'
  },
  'D-I5': {
    text: 'Is the customer having trouble recording payments against invoices?',
    shortText: 'Recording payments issue',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Payment recording requires specific steps'
  },
  'D-I6': {
    text: 'Have you advised on these steps for invoice and sales transaction issues?',
    shortText: 'Invoice steps advised',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should resolve most invoice issues',
    textContent: '1. Verify permissions for creating/editing invoices\n2. Check customer information is complete\n3. Ensure products/services exist and are active\n4. For customization: use Templates under Account and Settings\n5. For email issues: verify email settings and recipient addresses\n6. For payment recording: use Receive Payment function and select appropriate invoices'
  },
  'D-I7': {
    text: 'Does the issue persist after implementing the invoice solutions?',
    shortText: 'Issue persists after invoice solutions',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // DATA STAGE - BANKING SPECIFIC
  'D-BK1': {
    text: 'What specific banking issue is the customer experiencing?',
    shortText: 'Banking issue type',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific banking issue helps target the solution'
  },
  'D-BK2': {
    text: 'Is the customer having trouble connecting their bank account?',
    shortText: 'Bank connection issue',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: false,
    hint: 'Bank connection requires proper credentials and permissions'
  },
  'D-BK3': {
    text: 'Is the customer experiencing issues with transaction downloads?',
    shortText: 'Transaction download issue',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Transaction downloads depend on bank connectivity and timing'
  },
  'D-BK4': {
    text: 'Is there a problem with categorizing or matching transactions?',
    shortText: 'Transaction categorization issue',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Categorization and matching can be optimized for efficiency'
  },
  'D-BK5': {
    text: 'Are there bank reconciliation issues?',
    shortText: 'Reconciliation issue',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'Reconciliation requires specific steps and careful tracking'
  },
  'D-BK6': {
    text: 'Have you advised on these steps for banking issues?',
    shortText: 'Banking steps advised',
    type: 'multiple',
    section: 'data',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should resolve most banking issues',
    textContent: '1. For connection issues: verify credentials and try reconnecting\n2. For download issues: check connection status and update\n3. For categorization: use rules and review excluded transactions\n4. For matching: verify duplicate detection settings\n5. For reconciliation: start with opening balance verification\n6. Check for transactions in Excluded or In Review tabs'
  },
  'D-BK7': {
    text: 'Does the issue persist after implementing the banking solutions?',
    shortText: 'Issue persists after banking solutions',
    type: 'multiple',
    section: 'data',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // APPLICATION STAGE - GENERAL
  'A1': {
    text: 'Is the issue related to the QBO application performance or features?',
    shortText: 'Application performance issues',
    type: 'multiple',
    section: 'application',
    importance: 'high',
    completeSection: false,
    hint: 'Application issues can affect overall QBO functionality'
  },
  'A2': {
    text: 'What browser is the customer using to access QBO?',
    shortText: 'Browser type',
    type: 'multiple',
    section: 'application',
    importance: 'high',
    completeSection: false,
    hint: 'Browser compatibility is crucial for QBO functionality'
  },
  'A3': {
    text: 'Have you checked if the browser is up to date?',
    shortText: 'Browser updated',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Outdated browsers can cause QBO performance issues'
  },
  'A4': {
    text: 'Are there browser extensions or plugins that might interfere with QBO?',
    shortText: 'Browser extensions checked',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Extensions can sometimes conflict with QBO functionality'
  },
  'A5': {
    text: 'Has the customer tried clearing cache and cookies?',
    shortText: 'Cache/cookies cleared',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Clearing cache and cookies can resolve many browser issues'
  },
  'A6': {
    text: 'Has the customer tried using QBO in incognito/private browsing mode?',
    shortText: 'Incognito mode tried',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Incognito mode bypasses extensions and cache issues'
  },
  'A7': {
    text: 'Is the issue specific to certain QBO features (reports, invoicing, etc.)?',
    shortText: 'Feature-specific issue',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Some issues only affect specific features'
  },
  'A8': {
    text: 'Have you advised on these browser and application troubleshooting steps?',
    shortText: 'Browser steps advised',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should resolve most browser-related issues',
    textContent: '1. Update to the latest browser version\n2. Clear cache and cookies\n3. Try incognito/private browsing mode\n4. Disable browser extensions\n5. Try a different supported browser (Chrome, Firefox, Edge, Safari)\n6. Check for software conflicting with browser'
  },
  'A9': {
    text: 'Does the issue persist after implementing the application solutions?',
    shortText: 'Issue persists after application solutions',
    type: 'multiple',
    section: 'application',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // APPLICATION STAGE - REPORTS SPECIFIC
  'A-R1': {
    text: 'What specific report issue is the customer experiencing?',
    shortText: 'Report issue type',
    type: 'multiple',
    section: 'application',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific report issue helps target the solution'
  },
  'A-R2': {
    text: 'Is the customer having trouble accessing or running specific reports?',
    shortText: 'Report access issue',
    type: 'multiple',
    section: 'application',
    importance: 'high',
    completeSection: false,
    hint: 'Access to reports depends on permissions and settings'
  },
  'A-R3': {
    text: 'Are there issues with report accuracy or missing data?',
    shortText: 'Report accuracy issue',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Report accuracy depends on data and settings'
  },
  'A-R4': {
    text: 'Is the customer having trouble customizing reports?',
    shortText: 'Report customization issue',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Report customization requires specific steps'
  },
  'A-R5': {
    text: 'Are there issues with exporting or printing reports?',
    shortText: 'Report export/print issue',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Export and print functions may have specific requirements'
  },
  'A-R6': {
    text: 'Have you advised on these steps for report issues?',
    shortText: 'Report steps advised',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should resolve most report issues',
    textContent: '1. Verify permissions for accessing reports\n2. Check date range and filter settings\n3. For customization: use Customize button and save custom reports\n4. For export issues: try different formats (Excel, PDF)\n5. For printing: use Print button in QBO, not browser print\n6. For accuracy: verify source data and accounting method'
  },
  'A-R7': {
    text: 'Does the issue persist after implementing the report solutions?',
    shortText: 'Issue persists after report solutions',
    type: 'multiple',
    section: 'application',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // APPLICATION STAGE - 3RD PARTY APPS SPECIFIC
  'A-APP1': {
    text: 'What specific third-party app integration issue is occurring?',
    shortText: 'App integration issue type',
    type: 'multiple',
    section: 'application',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific integration issue helps target the solution'
  },
  'A-APP2': {
    text: 'Which third-party app is the customer trying to integrate?',
    shortText: 'App name',
    type: 'text',
    section: 'application',
    importance: 'high',
    completeSection: false,
    hint: 'Different apps have different integration requirements'
  },
  'A-APP3': {
    text: 'Has the app been properly authorized in QBO?',
    shortText: 'App authorization',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Apps require proper authorization in QBO'
  },
  'A-APP4': {
    text: 'Is there a data sync issue between QBO and the app?',
    shortText: 'App sync issue',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'Data syncing requires proper setup and permissions'
  },
  'A-APP5': {
    text: 'Have you advised on these steps for app integration issues?',
    shortText: 'App integration steps advised',
    type: 'multiple',
    section: 'application',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should resolve most integration issues',
    textContent: '1. Verify app is compatible with QBO version\n2. Go to Apps tab in QBO to manage connected apps\n3. Check authorization status and reconnect if needed\n4. Review data sync settings in both QBO and the app\n5. Ensure proper permissions are set for the app\n6. Check app developer support for specific integration issues'
  },
  'A-APP6': {
    text: 'Does the issue persist after implementing the app integration solutions?',
    shortText: 'Issue persists after app solutions',
    type: 'multiple',
    section: 'application',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // SYSTEM STAGE - GENERAL
  'S1': {
    text: 'Is the issue related to the customer\'s system, network, or environment?',
    shortText: 'System/network issues',
    type: 'multiple',
    section: 'system',
    importance: 'high',
    completeSection: false,
    hint: 'System and network issues can affect QBO accessibility'
  },
  'S2': {
    text: 'Has the internet connection been verified as stable?',
    shortText: 'Internet stable',
    type: 'multiple',
    section: 'system',
    importance: 'high',
    completeSection: false,
    hint: 'QBO requires a stable internet connection'
  },
  'S3': {
    text: 'Is the customer using a supported operating system and device?',
    shortText: 'OS/device supported',
    type: 'multiple',
    section: 'system',
    importance: 'medium',
    completeSection: false,
    hint: 'QBO works best on supported operating systems and devices'
  },
  'S4': {
    text: 'Is the customer connecting through a VPN, proxy, or corporate firewall?',
    shortText: 'Network filtering present',
    type: 'multiple',
    section: 'system',
    importance: 'medium',
    completeSection: false,
    hint: 'Network security measures can interfere with QBO'
  },
  'S5': {
    text: 'Have basic internet troubleshooting steps been completed?',
    shortText: 'Internet troubleshooting done',
    type: 'multiple',
    section: 'system',
    importance: 'medium',
    completeSection: false,
    hint: 'Basic troubleshooting can resolve many connection issues'
  },
  'S6': {
    text: 'Has the customer checked if QBO is experiencing a service outage?',
    shortText: 'Service status checked',
    type: 'multiple',
    section: 'system',
    importance: 'medium',
    completeSection: false,
    hint: 'Service outages can cause temporary access issues'
  },
  'S7': {
    text: 'Have you advised on these system and network troubleshooting steps?',
    shortText: 'System steps advised',
    type: 'multiple',
    section: 'system',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should resolve most system-related issues',
    textContent: '1. Run internet speed test (minimum 5 Mbps recommended)\n2. Restart router and modem\n3. Try different network (e.g., mobile hotspot)\n4. Check QBO status page for outages\n5. Temporarily disable VPN, firewall, or security software\n6. Update operating system and browser'
  },
  'S8': {
    text: 'Does the issue persist after implementing the system solutions?',
    shortText: 'Issue persists after system solutions',
    type: 'multiple',
    section: 'system',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // SYSTEM STAGE - BACKUP/RESTORE SPECIFIC
  'S-BR1': {
    text: 'What specific backup, copy, or restore issue is occurring?',
    shortText: 'Backup/restore issue type',
    type: 'multiple',
    section: 'system',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific backup/restore issue helps target the solution'
  },
  'S-BR2': {
    text: 'Is the customer trying to export company data from QBO?',
    shortText: 'Data export issue',
    type: 'multiple',
    section: 'system',
    importance: 'high',
    completeSection: false,
    hint: 'Data export has specific requirements and limitations'
  },
  'S-BR3': {
    text: 'Is the customer trying to transfer data between QBO companies?',
    shortText: 'Data transfer issue',
    type: 'multiple',
    section: 'system',
    importance: 'medium',
    completeSection: false,
    hint: 'Data transfer between companies requires specific steps'
  },
  'S-BR4': {
    text: 'Is the customer experiencing issues with QBO data integrity?',
    shortText: 'Data integrity issue',
    type: 'multiple',
    section: 'system',
    importance: 'medium',
    completeSection: false,
    hint: 'Data integrity issues require careful investigation'
  },
  'S-BR5': {
    text: 'Have you advised on these steps for backup and restore issues?',
    shortText: 'Backup/restore steps advised',
    type: 'multiple',
    section: 'system',
    importance: 'medium',
    completeSection: false,
    hint: 'These steps should address most backup/restore issues',
    textContent: '1. For data export: use Export Data utility in Tools menu\n2. For company transfer: use Move Company feature or export/import\n3. For backups: advise on periodic reports export for records\n4. For data integrity: run Audit History reports\n5. Verify admin permissions for these operations\n6. Check available company data storage space'
  },
  'S-BR6': {
    text: 'Does the issue persist after implementing the backup/restore solutions?',
    shortText: 'Issue persists after backup/restore solutions',
    type: 'multiple',
    section: 'system',
    importance: 'high',
    completeSection: true,
    hint: 'If the issue persists, we may need to check other aspects of QBO'
  },
  
  // ERROR CODE STAGE
  'E1': {
    text: 'Which QuickBooks Online error code is the client experiencing?',
    shortText: 'Error code identification',
    type: 'multiple',
    section: 'errorcode',
    importance: 'high',
    completeSection: false,
    hint: 'Identifying the specific error code helps target troubleshooting steps'
  },
  'E2': {
    text: 'Error H101: Client is experiencing a session timeout issue. When did this start occurring?',
    shortText: 'H101 timing',
    type: 'multiple',
    section: 'errorcode',
    importance: 'high',
    completeSection: false,
    hint: 'H101 errors occur when a session expires or times out'
  },
  'E2a': {
    text: 'For H101 errors, have you completed these troubleshooting steps?',
    shortText: 'H101 troubleshooting',
    type: 'multiple',
    section: 'errorcode',
    importance: 'medium',
    completeSection: false,
    hint: 'H101 errors are often related to browser settings or network issues',
    textContent: '1. Clear browser cache and cookies\n2. Log out of QBO completely\n3. Close all browser windows and restart\n4. Try using incognito/private mode\n5. Disable browser extensions that could interfere with sessions\n6. Check if the issue occurs on a different device/network'
  },
  'E2b': {
    text: 'Did the H101 error occur after a period of inactivity in QBO?',
    shortText: 'H101 inactivity check',
    type: 'multiple',
    section: 'errorcode',
    importance: 'medium',
    completeSection: false,
    hint: 'QBO sessions automatically time out after periods of inactivity'
  },
  'E2c': {
    text: 'Is the H101 error resolved after these steps?',
    shortText: 'H101 resolution',
    type: 'multiple',
    section: 'errorcode',
    importance: 'high',
    completeSection: false,
    hint: 'If not resolved, further investigation may be needed'
  }
};

// Options for multiple-choice questions
export const options = {
  // STARTING STAGE
  'ST1': [
    { id: 'billing', text: 'Billing' },
    { id: 'user-management', text: 'User Management / Login Issues' },
    { id: 'invoices', text: 'Invoices / Sales Transactions' },
    { id: 'customers', text: 'Customers' },
    { id: 'subscription', text: 'Subscription Management' },
    { id: 'revshare', text: 'Rev Share' },
    { id: 'reports', text: 'Reports' },
    { id: 'banking', text: 'Banking Feeds' },
    { id: 'backup', text: 'QBO Backup / Copy / Restore' },
    { id: 'proadvisor', text: 'ProAdvisor' },
    { id: 'training', text: 'Training and Certifications' },
    { id: 'taxes', text: 'Sales Taxes' },
    { id: '1099', text: '1099' },
    { id: 'bills', text: 'Bills / Vendor Transactions' },
    { id: 'client', text: 'Client Management' },
    { id: 'coa', text: 'COA / Register Issues' },
    { id: 'apps', text: '3rd Party / QBO Apps' }
  ],
  
  // USER STAGE OPTIONS - GENERAL
  'U1': [
    { id: 'yes', text: 'Yes, they can log in successfully' },
    { id: 'no', text: 'No, they cannot log in' },
    { id: 'intermittent', text: 'They experience intermittent login issues' }
  ],
  
  'U2': [
    { id: 'admin', text: 'Admin / Primary Admin' },
    { id: 'standard', text: 'Standard User' },
    { id: 'master', text: 'Master Admin' },
    { id: 'accountant', text: 'Accountant User' },
    { id: 'reports', text: 'Reports Only User' },
    { id: 'time-tracking', text: 'Time Tracking Only User' },
    { id: 'unknown', text: 'Unknown / Not Sure' }
  ],
  
  'U3': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'U4': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unknown', text: 'Unknown' }
  ],
  
  'U5': [
    { id: 'yes', text: 'Yes, all steps have been completed' },
    { id: 'partial', text: 'Some steps have been completed' },
    { id: 'no', text: 'No steps have been taken yet' }
  ],
  
  'U6': [
    { id: 'resolved', text: 'Issue resolved' },
    { id: 'partially', text: 'Partially resolved' },
    { id: 'unresolved', text: 'Not resolved' },
    { id: 'proceed', text: 'Proceed to next section' }
  ],
  
  // USER MANAGEMENT SPECIFIC OPTIONS
  'U-UM1': [
    { id: 'missing', text: 'User missing from list' },
    { id: 'permissions', text: 'Incorrect permissions' },
    { id: 'invitation', text: 'Invitation issues' },
    { id: 'deactivation', text: 'User deactivation problems' },
    { id: 'other', text: 'Other user management issues' }
  ],
  
  'U-UM2': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'U-UM3': [
    { id: 'unable-invite', text: 'Unable to send invitation' },
    { id: 'not-received', text: 'Invitation not received' },
    { id: 'error', text: 'Error when accepting invitation' },
    { id: 'other', text: 'Other invitation issue' }
  ],
  
  // BILLING SPECIFIC OPTIONS
  'U-B1': [
    { id: 'payment', text: 'Payment method issues' },
    { id: 'subscription', text: 'Subscription questions' },
    { id: 'price', text: 'Pricing concerns' },
    { id: 'upgrade', text: 'Upgrade/downgrade questions' },
    { id: 'cancellation', text: 'Cancellation issues' },
    { id: 'other', text: 'Other billing-related issues' }
  ],
  
  // DATA STAGE OPTIONS
  'D1': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'partial', text: 'Partially' }
  ],
  
  'D2': [
    { id: 'today', text: 'Today' },
    { id: 'yesterday', text: 'Yesterday' },
    { id: 'within_week', text: 'Within the last week' },
    { id: 'within_month', text: 'Within the last month' },
    { id: 'over_month', text: 'Over a month ago' }
  ],
  
  'D3': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'D4': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'na', text: 'Not applicable' }
  ],
  
  'D5': [
    { id: 'yes', text: 'Yes, all steps taken' },
    { id: 'partial', text: 'Some steps taken' },
    { id: 'no', text: 'No steps taken yet' }
  ],
  
  'D6': [
    { id: 'resolved', text: 'Fully resolved' },
    { id: 'partially', text: 'Partially resolved' },
    { id: 'unresolved', text: 'Not resolved' },
    { id: 'proceed', text: 'Proceed to next section' }
  ],
  
  // DATA - INVOICES SPECIFIC
  'D-I1': [
    { id: 'creation', text: 'Invoice creation problems' },
    { id: 'sending', text: 'Problems sending invoices' },
    { id: 'payments', text: 'Payment recording issues' },
    { id: 'customization', text: 'Invoice customization issues' },
    { id: 'recurring', text: 'Recurring invoice problems' },
    { id: 'other', text: 'Other invoice issues' }
  ],
  
  'D-I2': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  // DATA - BANKING SPECIFIC
  'D-BK1': [
    { id: 'connection', text: 'Bank connection issues' },
    { id: 'download', text: 'Transaction download problems' },
    { id: 'categorization', text: 'Transaction categorization issues' },
    { id: 'matching', text: 'Transaction matching problems' },
    { id: 'reconciliation', text: 'Reconciliation issues' },
    { id: 'other', text: 'Other banking issues' }
  ],
  
  // APPLICATION STAGE OPTIONS
  'A1': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'A2': [
    { id: 'chrome', text: 'Google Chrome' },
    { id: 'firefox', text: 'Firefox' },
    { id: 'safari', text: 'Safari' },
    { id: 'edge', text: 'Microsoft Edge' },
    { id: 'ie', text: 'Internet Explorer' },
    { id: 'other', text: 'Other' }
  ],
  
  'A3': [
    { id: 'yes', text: 'Yes, browser is updated' },
    { id: 'no', text: 'No, browser needs updating' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'A4': [
    { id: 'yes', text: 'Yes, extensions are present' },
    { id: 'no', text: 'No extensions identified' },
    { id: 'unsure', text: 'Not checked yet' }
  ],
  
  'A5': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'partially', text: 'Partially (only cache or only cookies)' }
  ],
  
  'A6': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'A7': [
    { id: 'yes', text: 'Yes, specific to certain features' },
    { id: 'no', text: 'No, affects the entire application' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'A8': [
    { id: 'yes', text: 'Yes, all steps advised' },
    { id: 'partial', text: 'Some steps advised' },
    { id: 'no', text: 'No steps advised yet' }
  ],
  
  'A9': [
    { id: 'resolved', text: 'Issue resolved' },
    { id: 'partially', text: 'Partially resolved' },
    { id: 'unresolved', text: 'Not resolved' },
    { id: 'proceed', text: 'Proceed to next section' }
  ],
  
  // APPLICATION - REPORTS SPECIFIC
  'A-R1': [
    { id: 'access', text: 'Report access issues' },
    { id: 'accuracy', text: 'Report accuracy problems' },
    { id: 'customization', text: 'Report customization issues' },
    { id: 'export', text: 'Export/print problems' },
    { id: 'other', text: 'Other report issues' }
  ],
  
  // APPLICATION - 3RD PARTY APPS SPECIFIC
  'A-APP1': [
    { id: 'connection', text: 'App connection issues' },
    { id: 'authorization', text: 'App authorization problems' },
    { id: 'sync', text: 'Data sync issues' },
    { id: 'functionality', text: 'App functionality problems' },
    { id: 'other', text: 'Other app integration issues' }
  ],
  
  // SYSTEM STAGE OPTIONS
  'S1': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'S2': [
    { id: 'yes', text: 'Yes, connection is stable' },
    { id: 'no', text: 'No, connection has issues' },
    { id: 'intermittent', text: 'Intermittent stability' }
  ],
  
  'S3': [
    { id: 'yes', text: 'Yes, using supported system' },
    { id: 'no', text: 'No, using unsupported system' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'S4': [
    { id: 'yes', text: 'Yes' },
    { id: 'no', text: 'No' },
    { id: 'unsure', text: 'Not sure' }
  ],
  
  'S5': [
    { id: 'yes', text: 'Yes, all steps completed' },
    { id: 'partial', text: 'Some steps completed' },
    { id: 'no', text: 'No steps completed yet' }
  ],
  
  'S6': [
    { id: 'yes', text: 'Yes, checked status page' },
    { id: 'no', text: 'No, have not checked' },
    { id: 'outage', text: 'Yes, outage confirmed' }
  ],
  
  'S7': [
    { id: 'yes', text: 'Yes, all steps advised' },
    { id: 'partial', text: 'Some steps advised' },
    { id: 'no', text: 'No steps advised yet' }
  ],
  
  'S8': [
    { id: 'resolved', text: 'Issue resolved' },
    { id: 'partially', text: 'Partially resolved' },
    { id: 'unresolved', text: 'Not resolved' },
    { id: 'proceed', text: 'Proceed to next section' }
  ],
  
  // SYSTEM - BACKUP/RESTORE SPECIFIC
  'S-BR1': [
    { id: 'export', text: 'Data export issues' },
    { id: 'transfer', text: 'Company transfer problems' },
    { id: 'backup', text: 'Backup creation issues' },
    { id: 'integrity', text: 'Data integrity concerns' },
    { id: 'other', text: 'Other backup/restore issues' }
  ],
  
  // ERROR CODE STAGE
  'E1': [
    { id: 'h101', text: 'H101 (Session timeout)' },
    { id: 'h202', text: 'H202 (Connection issue)' },
    { id: 'h505', text: 'H505 (Server error)' },
    { id: 'other', text: 'Other error code' },
    { id: 'unknown', text: 'Unknown error code' }
  ]
};

// Navigation map for questions
export const navigationMap = {
  // STARTING STAGE NAVIGATION
  'ST1': {
    'user-management': 'U1',
    'billing': 'U-B1',
    'invoices': 'D-I1',
    'banking': 'D-BK1',
    'reports': 'A-R1',
    'apps': 'A-APP1',
    'backup': 'S-BR1'
  },
  
  // USER STAGE NAVIGATION
  'U1': {
    'yes': 'U2',
    'no': 'U3',
    'intermittent': 'U4'
  },
  'U2': {
    'admin': 'U3',
    'standard': 'U3',
    'master': 'U3',
    'accountant': 'U3',
    'reports': 'U3',
    'time-tracking': 'U3',
    'unknown': 'U3'
  },
  'U3': {
    'yes': 'U4',
    'no': 'U5',
    'unsure': 'U5'
  },
  'U4': {
    'yes': 'U5',
    'no': 'U5',
    'unknown': 'U5'
  },
  'U5': {
    'yes': 'U6',
    'partial': 'U6',
    'no': 'U6'
  },
  'U6': {
    'resolved': 'ST1',
    'partially': 'D1',
    'unresolved': 'D1',
    'proceed': 'D1'
  },
  
  // USER MANAGEMENT SPECIFIC NAVIGATION
  'U-UM1': {
    'missing': 'U-UM2',
    'permissions': 'U-UM2',
    'invitation': 'U-UM3',
    'deactivation': 'U-UM2',
    'other': 'U-UM2'
  },
  'U-UM2': {
    'yes': 'U5',
    'no': 'U5',
    'unsure': 'U5'
  },
  'U-UM3': {
    'unable-invite': 'U5',
    'not-received': 'U5',
    'error': 'U5',
    'other': 'U5'
  },
  
  // BILLING SPECIFIC NAVIGATION
  'U-B1': {
    'payment': 'U5',
    'subscription': 'U5',
    'price': 'U5',
    'upgrade': 'U5',
    'cancellation': 'U5',
    'other': 'U5'
  },
  
  // DATA STAGE NAVIGATION
  'D1': {
    'yes': 'D2',
    'no': 'D3',
    'partial': 'D2'
  },
  'D2': {
    'today': 'D3',
    'yesterday': 'D3',
    'within_week': 'D3',
    'within_month': 'D3',
    'over_month': 'D3'
  },
  'D3': {
    'yes': 'D4',
    'no': 'D4',
    'unsure': 'D4'
  },
  'D4': {
    'yes': 'D5',
    'no': 'D5',
    'na': 'D5'
  },
  'D5': {
    'yes': 'D6',
    'partial': 'D6',
    'no': 'D6'
  },
  'D6': {
    'resolved': 'ST1',
    'partially': 'A1',
    'unresolved': 'A1',
    'proceed': 'A1'
  },
  
  // DATA - INVOICES SPECIFIC NAVIGATION
  'D-I1': {
    'creation': 'D-I2',
    'sending': 'D-I2',
    'payments': 'D-I2',
    'customization': 'D-I2',
    'recurring': 'D-I2',
    'other': 'D-I2'
  },
  'D-I2': {
    'yes': 'D-I3',
    'no': 'D-I3',
    'unsure': 'D-I3'
  },
  'D-I3': {
    'yes': 'D-I4',
    'no': 'D-I4',
    'unsure': 'D-I4'
  },
  'D-I4': {
    'yes': 'D-I5',
    'no': 'D-I5',
    'unsure': 'D-I5'
  },
  'D-I5': {
    'yes': 'D-I6',
    'no': 'D-I6',
    'partial': 'D-I6'
  },
  'D-I6': {
    'yes': 'D-I7',
    'no': 'D-I7',
    'partial': 'D-I7'
  },
  'D-I7': {
    'resolved': 'ST1',
    'partially': 'A1',
    'unresolved': 'A1',
    'proceed': 'A1'
  },
  
  // DATA - BANKING SPECIFIC NAVIGATION
  'D-BK1': {
    'connection': 'D-BK2',
    'download': 'D-BK3',
    'categorization': 'D-BK4',
    'matching': 'D-BK4',
    'reconciliation': 'D-BK5',
    'other': 'D-BK6'
  },
  'D-BK2': {
    'yes': 'D-BK6',
    'no': 'D-BK6',
    'unsure': 'D-BK6'
  },
  'D-BK3': {
    'yes': 'D-BK6',
    'no': 'D-BK6',
    'unsure': 'D-BK6'
  },
  'D-BK4': {
    'yes': 'D-BK6',
    'no': 'D-BK6',
    'unsure': 'D-BK6'
  },
  'D-BK5': {
    'yes': 'D-BK6',
    'no': 'D-BK6',
    'unsure': 'D-BK6'
  },
  'D-BK6': {
    'yes': 'D-BK7',
    'partial': 'D-BK7',
    'no': 'D-BK7'
  },
  'D-BK7': {
    'resolved': 'ST1',
    'partially': 'A1',
    'unresolved': 'A1',
    'proceed': 'A1'
  },
  
  // APPLICATION STAGE NAVIGATION
  'A1': {
    'yes': 'A2',
    'no': 'S1',
    'unsure': 'A2'
  },
  'A2': {
    'chrome': 'A3',
    'firefox': 'A3',
    'safari': 'A3',
    'edge': 'A3',
    'ie': 'A3',
    'other': 'A3'
  },
  'A3': {
    'yes': 'A4',
    'no': 'A8',
    'unsure': 'A8'
  },
  'A4': {
    'yes': 'A8',
    'no': 'A5',
    'unsure': 'A8'
  },
  'A5': {
    'yes': 'A6',
    'no': 'A8',
    'partially': 'A8'
  },
  'A6': {
    'yes': 'A7',
    'no': 'A8',
    'unsure': 'A8'
  },
  'A7': {
    'yes': 'A8',
    'no': 'A8',
    'unsure': 'A8'
  },
  'A8': {
    'yes': 'A9',
    'partial': 'A9',
    'no': 'A9'
  },
  'A9': {
    'resolved': 'ST1',
    'partially': 'S1',
    'unresolved': 'S1',
    'proceed': 'S1'
  },
  
  // APPLICATION - REPORTS SPECIFIC NAVIGATION
  'A-R1': {
    'access': 'A-R2',
    'accuracy': 'A-R3',
    'customization': 'A-R4',
    'export': 'A-R5',
    'other': 'A-R6'
  },
  'A-R2': {
    'yes': 'A-R6',
    'no': 'A-R6',
    'unsure': 'A-R6'
  },
  'A-R3': {
    'yes': 'A-R6',
    'no': 'A-R6',
    'unsure': 'A-R6'
  },
  'A-R4': {
    'yes': 'A-R6',
    'no': 'A-R6',
    'unsure': 'A-R6'
  },
  'A-R5': {
    'yes': 'A-R6',
    'no': 'A-R6',
    'unsure': 'A-R6'
  },
  'A-R6': {
    'yes': 'A-R7',
    'partial': 'A-R7',
    'no': 'A-R7'
  },
  'A-R7': {
    'resolved': 'ST1',
    'partially': 'S1',
    'unresolved': 'S1',
    'proceed': 'S1'
  },
  
  // APPLICATION - APPS SPECIFIC NAVIGATION
  'A-APP1': {
    'connection': 'A-APP2',
    'authorization': 'A-APP3',
    'sync': 'A-APP4',
    'functionality': 'A-APP5',
    'other': 'A-APP5'
  },
  'A-APP2': {
    'any': 'A-APP5'
  },
  'A-APP3': {
    'yes': 'A-APP5',
    'no': 'A-APP5',
    'unsure': 'A-APP5'
  },
  'A-APP4': {
    'yes': 'A-APP5',
    'no': 'A-APP5',
    'unsure': 'A-APP5'
  },
  'A-APP5': {
    'yes': 'A-APP6',
    'partial': 'A-APP6',
    'no': 'A-APP6'
  },
  'A-APP6': {
    'resolved': 'ST1',
    'partially': 'S1',
    'unresolved': 'S1',
    'proceed': 'S1'
  },
  
  // SYSTEM STAGE NAVIGATION
  'S1': {
    'yes': 'S2',
    'no': 'E1',
    'unsure': 'S2'
  },
  'S2': {
    'yes': 'S3',
    'no': 'S7',
    'intermittent': 'S7'
  },
  'S3': {
    'yes': 'S4',
    'no': 'S7',
    'unsure': 'S7'
  },
  'S4': {
    'yes': 'S7',
    'no': 'S5',
    'unsure': 'S7'
  },
  'S5': {
    'yes': 'S6',
    'partial': 'S7',
    'no': 'S7'
  },
  'S6': {
    'yes': 'S7',
    'no': 'S7',
    'outage': 'S7'
  },
  'S7': {
    'yes': 'S8',
    'partial': 'S8',
    'no': 'S8'
  },
  'S8': {
    'resolved': 'ST1',
    'partially': 'E1',
    'unresolved': 'E1',
    'proceed': 'E1'
  },
  
  // SYSTEM - BACKUP/RESTORE SPECIFIC NAVIGATION
  'S-BR1': {
    'export': 'S-BR2',
    'transfer': 'S-BR3',
    'backup': 'S-BR5',
    'integrity': 'S-BR4',
    'other': 'S-BR5'
  },
  'S-BR2': {
    'yes': 'S-BR5',
    'no': 'S-BR5',
    'unsure': 'S-BR5'
  },
  'S-BR3': {
    'yes': 'S-BR5',
    'no': 'S-BR5',
    'unsure': 'S-BR5'
  },
  'S-BR4': {
    'yes': 'S-BR5',
    'no': 'S-BR5',
    'unsure': 'S-BR5'
  },
  'S-BR5': {
    'yes': 'S-BR6',
    'partial': 'S-BR6',
    'no': 'S-BR6'
  },
  'S-BR6': {
    'resolved': 'ST1',
    'partially': 'E1',
    'unresolved': 'E1',
    'proceed': 'E1'
  },
  
  // ERROR CODE STAGE NAVIGATION
  'E1': {
    'h101': 'E2',
    'h202': 'ST1',
    'h505': 'ST1',
    'other': 'ST1',
    'unknown': 'ST1'
  },
  'E2': {
    'any': 'E2a'
  },
  'E2a': {
    'yes': 'E2b',
    'no': 'E2b',
    'partial': 'E2b'
  },
  'E2b': {
    'yes': 'E2c',
    'no': 'E2c',
    'unsure': 'E2c'
  },
  'E2c': {
    'resolved': 'ST1',
    'partially': 'ST1',
    'unresolved': 'ST1'
  }
};

// Resolutions / final outcomes
export const resolutions = {
  'resolution_access': {
    title: 'Access Permission Issue',
    steps: [
      'Confirm the user has been invited to access the QBO account',
      'Check which permission level they were granted (Admin, Standard User, etc.)',
      'If needed, have the admin re-invite the user with the correct permissions',
      'Guide the user through accepting the invitation',
      'Verify they can log in successfully with the correct permissions'
    ],
    relatedArticles: [
      {
        title: 'Add users and manage their access in QuickBooks Online',
        url: 'https://quickbooks.intuit.com/learn-support/en-us/user-management/add-users-and-manage-their-access-in-quickbooks-online/00/186370'
      }
    ]
  },
  'resolution_new_user': {
    title: 'New User Setup Process',
    steps: [
      'Verify the user\'s email address matches the invitation',
      'Check for the invitation email in spam/junk folders',
      'If invitation not received, have the admin resend the invitation',
      'Guide the user through setting up their account password',
      'Recommend bookmarking the QBO login page for future access'
    ],
    relatedArticles: [
      {
        title: 'Accept an invitation to QuickBooks Online',
        url: 'https://quickbooks.intuit.com/learn-support/en-us/user-management/accept-an-invitation-to-quickbooks-online/00/186375'
      }
    ]
  },
  'resolution_device': {
    title: 'Browser/Device Compatibility Issue',
    steps: [
      'Recommend trying another browser (Chrome, Firefox, or Edge)',
      'If on mobile, try a desktop computer if available',
      'Check if browser extensions might be interfering',
      'Clear browser cache and cookies',
      'Try using an incognito/private browsing window'
    ],
    relatedArticles: [
      {
        title: 'System requirements for QuickBooks Online',
        url: 'https://quickbooks.intuit.com/learn-support/en-us/help-article/general-information/system-requirements-for-quickbooks-online/L6qI3DHUo_US_en_US'
      }
    ]
  },
  'resolution_data_import': {
    title: 'Data Import Issue Resolution',
    steps: [
      'Verify the format of imported data matches required formats',
      'Check for any import errors in the import logs',
      'For large data sets, suggest breaking them into smaller batches',
      'Consider using an accountant or ProAdvisor to review the data',
      'For persistent issues, suggest contacting data services support'
    ],
    relatedArticles: [
      {
        title: 'Import data into QuickBooks Online',
        url: 'https://quickbooks.intuit.com/learn-support/en-us/importing-data/import-data-into-quickbooks-online/00/186290'
      }
    ]
  },
  'resolution_third_party': {
    title: 'Third-Party App Integration Issues',
    steps: [
      'Identify which third-party apps are connected to QBO',
      'Temporarily disconnect suspected problematic apps',
      'Check for recent updates or known issues with those apps',
      'Contact the app developer for specific integration issues',
      'Reconnect apps one at a time to identify the problematic one'
    ],
    relatedArticles: [
      {
        title: 'Manage your QuickBooks Online apps',
        url: 'https://quickbooks.intuit.com/learn-support/en-us/other-integrations/manage-your-quickbooks-online-apps/00/186360'
      }
    ]
  },
  'resolution_ie': {
    title: 'Internet Explorer Compatibility Issue',
    steps: [
      'Inform the user that Internet Explorer is not fully supported',
      'Recommend switching to Chrome, Firefox, Edge, or Safari',
      'Provide link to download a supported browser',
      'If they must use IE, suggest enabling Compatibility Mode',
      'For corporate environments with IE requirements, suggest discussing with IT'
    ],
    relatedArticles: [
      {
        title: 'System requirements for QuickBooks Online',
        url: 'https://quickbooks.intuit.com/learn-support/en-us/help-article/general-information/system-requirements-for-quickbooks-online/L6qI3DHUo_US_en_US'
      }
    ]
  },
  'resolution_clear_cache': {
    title: 'Browser Cache and Cookie Resolution',
    steps: [
      'Guide the user through clearing browser cache and cookies',
      'Provide specific instructions for their browser',
      'Recommend disabling browser extensions temporarily',
      'Suggest restarting the browser after clearing cache',
      'If problem persists, recommend trying a different browser'
    ],
    relatedArticles: [
      {
        title: 'Clear browser cache and cookies to fix issues in QuickBooks Online',
        url: 'https://quickbooks.intuit.com/learn-support/en-us/help-article/general-information/clear-browser-cache-and-cookies-to-fix-issues-in-quickbooks-online/L6UdSRFn8_US_en_US'
      }
    ]
  },
  'resolution_general': {
    title: 'General Troubleshooting Steps',
    steps: [
      'Confirm the user is on a supported browser and operating system',
      'Suggest logging out and logging back in',
      'Clear browser cache and cookies',
      'Check internet connection speed and stability',
      'Try accessing QBO in incognito/private browsing mode',
      'If the problem persists, suggest contacting direct support'
    ],
    relatedArticles: [
      {
        title: 'Fix QuickBooks Online account issues',
        url: 'https://quickbooks.intuit.com/learn-support/en-us/general-information/fix-quickbooks-online-account-issues/00/186280'
      }
    ]
  },
  'resolution_error_consistent': {
    title: 'Consistent Error Resolution',
    steps: [
      'Document the exact error code and message',
      'Check for known issues matching this error in the knowledge base',
      'Verify QBO service status for outages',
      'Suggest checking system requirements',
      'For persistent errors, recommend contacting direct support'
    ],
    relatedArticles: [
      {
        title: 'QuickBooks Online system status',
        url: 'https://status.quickbooks.intuit.com/'
      }
    ]
  }
};

// Sections define the different categories of troubleshooting
export const sections = [
  {
    id: 'starting',
    title: 'Starting Point',
    icon: '🔍',
    description: 'Identify the basic issue category to begin troubleshooting',
    color: 'bg-blue-100',
    borderColor: 'border-blue-500',
    completed: false,
    current: true,
    initialQuestion: 'ST1'
  },
  {
    id: 'user',
    title: 'User',
    icon: '👤',
    description: 'Identify user permissions and access issues',
    color: 'bg-indigo-100',
    borderColor: 'border-indigo-500',
    completed: false,
    current: false,
    initialQuestion: 'U1'
  },
  {
    id: 'data',
    title: 'Data',
    icon: '📊',
    description: 'Address data-related problems and inconsistencies',
    color: 'bg-green-100',
    borderColor: 'border-green-500',
    completed: false,
    current: false,
    initialQuestion: 'D1'
  },
  {
    id: 'application',
    title: 'Application',
    icon: '💻',
    description: 'Resolve application functionality issues',
    color: 'bg-yellow-100',
    borderColor: 'border-yellow-500',
    completed: false,
    current: false,
    initialQuestion: 'A1'
  },
  {
    id: 'system',
    title: 'System',
    icon: '🌐',
    description: 'Troubleshoot system and network-related problems',
    color: 'bg-red-100',
    borderColor: 'border-red-500',
    completed: false,
    current: false,
    initialQuestion: 'S1'
  },
  {
    id: 'errorcode',
    title: 'Error Codes',
    icon: '⚠️',
    description: 'Troubleshoot specific QuickBooks Online error codes',
    color: 'bg-orange-100',
    borderColor: 'border-orange-500',
    completed: false,
    current: false,
    initialQuestion: 'E1'
  },
  {
    id: 'resources',
    title: 'Resources',
    icon: '📚',
    description: 'Helpful articles, videos, and tools for QBO support',
    color: 'bg-purple-100',
    borderColor: 'border-purple-500',
    completed: false,
    current: false
  }
];

// Common errors for quick reference
export const commonErrors = [
  {
    id: 'error1',
    code: 'QB-101',
    message: 'Authentication failed',
    resolution: 'Verify credentials and try again. Check for Caps Lock.',
    section: 'user'
  },
  {
    id: 'error2',
    code: 'QB-102',
    message: 'Account locked',
    resolution: 'Wait 24 hours or contact support to unlock the account.',
    section: 'user'
  },
  {
    id: 'error3',
    code: 'QB-103',
    message: 'Session timeout',
    resolution: 'Log in again. Check for inactivity settings.',
    section: 'user'
  },
  {
    id: 'error4',
    code: 'QB-201',
    message: 'Bank connection failed',
    resolution: 'Update bank credentials or contact financial institution.',
    section: 'data'
  },
  {
    id: 'error5',
    code: 'QB-202',
    message: 'Duplicate transaction',
    resolution: 'Review and remove duplicate entries manually.',
    section: 'data'
  },
  {
    id: 'error6',
    code: 'QB-301',
    message: 'Report generation failed',
    resolution: 'Retry with a smaller date range or fewer filters.',
    section: 'application'
  },
  {
    id: 'error7',
    code: 'QB-302',
    message: 'Feature unavailable',
    resolution: 'Verify subscription level includes this feature.',
    section: 'application'
  },
  {
    id: 'error8',
    code: 'QB-401',
    message: 'Browser not supported',
    resolution: 'Try Chrome, Firefox, Edge, or Safari with the latest updates.',
    section: 'system'
  },
  {
    id: 'error9',
    code: 'QB-402',
    message: 'Slow performance',
    resolution: 'Clear cache and cookies, close unused tabs/applications.',
    section: 'system'
  }
];

// Knowledge Base Articles and Resources
export const knowledgeBase = {
  // Call drivers categorize resources by issue type
  callDrivers: [
    { id: 'all', name: 'All Types' },
    { id: 'signin', name: 'Sign In Issues' },
    { id: 'banking', name: 'Banking Issues' },
    { id: 'transactions', name: 'Transaction Issues' },
    { id: 'reports', name: 'Reporting Issues' },
    { id: 'performance', name: 'Performance Issues' },
    { id: 'errors', name: 'Error Messages' }
  ],
  
  // Knowledge base articles
  kbArticles: [
    {
      id: 'kb001',
      title: 'Troubleshooting Sign-In Issues',
      description: 'Common solutions for sign-in problems in QuickBooks Online',
      url: 'https://quickbooks.intuit.com/learn-support/en-us/sign-in/troubleshooting-qbo-sign-in-issues/00/370468',
      driver: 'signin'
    },
    {
      id: 'kb002',
      title: 'Fixing Bank Connection Errors',
      description: 'Steps to resolve bank feed connection issues',
      url: 'https://quickbooks.intuit.com/learn-support/en-us/banking/fixing-bank-connection-errors/00/518963',
      driver: 'banking'
    },
    {
      id: 'kb003',
      title: 'Missing or Duplicate Transactions',
      description: 'How to find and correct missing or duplicate transactions',
      url: 'https://quickbooks.intuit.com/learn-support/en-us/banking/missing-or-duplicate-transactions/00/516790',
      driver: 'transactions'
    },
    {
      id: 'kb004',
      title: 'Common Report Issues',
      description: 'Solutions for common reporting problems in QBO',
      url: 'https://quickbooks.intuit.com/learn-support/en-us/reports-and-accounting/common-report-issues/00/383401',
      driver: 'reports'
    },
    {
      id: 'kb005',
      title: 'Improving QBO Performance',
      description: 'Tips to optimize QBO performance in your browser',
      url: 'https://quickbooks.intuit.com/learn-support/en-us/qbo-troubleshooting/improving-qbo-performance/00/465321',
      driver: 'performance'
    },
    {
      id: 'kb006',
      title: 'Understanding Error -6000, -816',
      description: 'Causes and solutions for error code -6000, -816',
      url: 'https://quickbooks.intuit.com/learn-support/en-us/error-codes/understanding-error-6000-816/00/392456',
      driver: 'errors'
    },
    {
      id: 'kb007',
      title: 'Chrome Browser Troubleshooting',
      description: 'Specific steps for Chrome-related issues with QBO',
      url: 'https://quickbooks.intuit.com/learn-support/en-us/qbo-troubleshooting/chrome-browser-troubleshooting/00/502148',
      driver: 'performance'
    },
    {
      id: 'kb008',
      title: 'Resolving Payment Processing Errors',
      description: 'Steps to resolve common payment processing issues',
      url: 'https://quickbooks.intuit.com/learn-support/en-us/payments/resolving-payment-processing-errors/00/478963',
      driver: 'transactions'
    }
  ],
  
  // Quick tips for common issues
  quickTips: [
    {
      id: 'tip001',
      title: 'Clear Browser Cache',
      content: 'Clearing your browser cache often resolves many QBO issues. Try this first before more complex troubleshooting.',
      driver: 'performance'
    },
    {
      id: 'tip002',
      title: 'Incognito Mode Test',
      content: 'If you experience issues, try accessing QBO in an incognito/private browsing window to rule out extension conflicts.',
      driver: 'signin'
    },
    {
      id: 'tip003',
      title: 'Update Browser',
      content: 'Make sure your browser is updated to the latest version for optimal performance with QBO.',
      driver: 'performance'
    },
    {
      id: 'tip004',
      title: 'Check System Requirements',
      content: 'Verify your system meets the minimum requirements for QBO, including supported browsers and OS versions.',
      driver: 'performance'
    },
    {
      id: 'tip005',
      title: 'Verify Internet Connection',
      content: 'A stable internet connection with at least 5 Mbps download speed is recommended for QBO.',
      driver: 'performance'
    },
    {
      id: 'tip006',
      title: 'Multiple Windows',
      content: 'Avoid having multiple QBO company files open in different tabs or windows, as this can cause conflicts.',
      driver: 'errors'
    },
    {
      id: 'tip007',
      title: 'Banking Updates',
      content: 'Banking data typically updates once every 24 hours. Manual updates can be performed, but are limited.',
      driver: 'banking'
    },
    {
      id: 'tip008',
      title: 'Report Load Times',
      content: 'Large reports with extensive date ranges may take longer to load. Try narrowing your date range for faster results.',
      driver: 'reports'
    }
  ]
};
