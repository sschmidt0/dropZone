import './styles/App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RegisterLoginPage } from './pages/RegisterLoginPage';
import { DropZonePage } from './pages/DropZonePage';

export const App = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegisterLoginPage />} />
          <Route path="/iniciar" element={<RegisterLoginPage />} />
          <Route path="/dropzone" element={<DropZonePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
