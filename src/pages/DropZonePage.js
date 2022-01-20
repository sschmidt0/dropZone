import { useContext, useState } from 'react';
import { UserContext } from '../components/UserContext';
import '../styles/DropZonePage.scss';
import { Uploadfield } from '../components/UploadField';
import { LoginBox } from '../components/LoginBox';
import { uploadFile } from '../assets/uploadFile';

export const DropZonePage = () => {
  const { userAccessToken } = useContext(UserContext);
  const [document, setDocument] = useState({ docName: '', docPath: '', docType: '' });

  const handleClick = () => {
    console.log('clicked');
    console.log(userAccessToken);
    console.log('document', document);
    document.docName !== '' && uploadFile(document);
  };

  return (
    <div className="DropZonePage">
      <div className="left-part">
        <Uploadfield document={ document } setDocument={ setDocument } />
        <button onClick={ handleClick }>Subir archivos</button>
      </div>
      <div className="right-part">
        <LoginBox />
      </div>
    </div>
  );
};
