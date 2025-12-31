import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import App from './App';
import ChangelogLayout from './components/ChangelogLayout';
const Changelog = lazy(() => import('./sections/Changelog'));
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route
          path="changelog"
          element={
            <Suspense fallback={<ChangelogLayout fallback="Chargement..." />}>
              <Changelog />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
