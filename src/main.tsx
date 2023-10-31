import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@contexts/ThemeContext.tsx';
import {
  LocaleStorageProvider,
} from '@contexts/LocaleStorageContext.tsx';
import App from './App.tsx';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
  <Router>
    <LocaleStorageProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </LocaleStorageProvider>
  </Router>
);