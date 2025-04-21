# QBO Troubleshooter React App

This is a modern React implementation of the QBO Troubleshooter application, based on the original Google Apps Script version.

## Features

- Interactive troubleshooting flow for QBO issues
- Agent information collection
- Solution recommendations based on user responses
- Clean, modern UI with consistent styling
- Fully responsive design
- Local storage for state persistence

## Project Structure

- `/src/components` - Reusable UI components
- `/src/pages` - Main application pages
- `/src/context` - React context for state management
- `/src/styles` - Global styles and theming
- `/src/data` - Troubleshooter question and solution data

## Data Management

The application uses a local JavaScript data structure (`troubleshooterData.js`) for storing questions, answers, and solutions. This approach provides:

1. Easy maintenance and updates to the troubleshooting flow
2. Fast performance with no backend dependencies
3. Simple deployment to GitHub Pages or any static hosting
4. Optional integration with external databases or APIs if needed

For production use, you can:
- Connect to a backend API to fetch the troubleshooter data
- Use a JSON file stored in public assets
- Integrate with a CMS for content management

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm start
   ```

3. Build for production:
   ```
   npm run build
   ```

## Deployment

This application can be easily deployed to GitHub Pages:

```
npm install gh-pages --save-dev
```

Then add these scripts to package.json:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

And deploy with:
```
npm run deploy
```

## License

MIT
