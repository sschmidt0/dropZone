import './styles/App.scss';
import { Uploadfield } from './components/UploadField';
import { LoginBox } from './components/LoginBox';

export const App = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="App">
      <div className="left-part">
        <Uploadfield />
        <button onClick={ handleClick }>Subir archivos</button>
      </div>
      <div className="right-part">
        <LoginBox />
      </div>
    </div>
  );
};
