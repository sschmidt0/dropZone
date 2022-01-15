import '../styles/DropZonePage.scss';
import { Uploadfield } from '../components/UploadField';
import { LoginBox } from '../components/LoginBox';

export const DropZonePage = () => {
  const handleClick = () => {
    console.log('clicked');
  };

  return (
    <div className="DropZonePage">
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
