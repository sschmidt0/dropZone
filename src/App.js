import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterLoginPage } from './pages/RegisterLoginPage';
import { DropZonePage } from './pages/DropZonePage';
import { UserProvider } from './components/UserContext';

export const App = () => {

  return (
    <UserProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<RegisterLoginPage />} />
            <Route path="/iniciar" element={<RegisterLoginPage />} />
            <Route path="/dropzone" element={<DropZonePage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </UserProvider>
  );
};
