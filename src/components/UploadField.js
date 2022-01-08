import { BorderDiv, StyledField } from "../styles/UploadField.styles";
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ErrorMessage } from "./ErrorMessage";

import Vue from '../img/Vue.svg';
import Git from '../img/Git.svg';
import Sass from '../img/Sass.svg';
import TypeScript from '../img/TypeScript.svg';
import PHP from '../img/PHP.svg';
import MySQL from '../img/MySQL.svg';
import Python from '../img/Python.svg';
import CSS from '../img/CSS.svg';
import TF from '../img/TF.svg';
import Nkube from '../img/Nkube.svg';

export const Uploadfield = () => {
  const [document, setDocument] = useState('');
  const [isError, setIsError] = useState(false);

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    setDocument(acceptedFiles[0].path);
  }, []);

  const { getRootProps, getInputProps, isDragAccept } = useDropzone({onDrop});

  return (
    <BorderDiv>
      <StyledField {...getRootProps()}>
        <input {...getInputProps()} />
        {
          isDragAccept ?
            <p>{`Tu archivo ${document} se ha subido correctamente`}</p> :
            <p>arrastra tus archivos aquí</p>
        }
        { isError && <ErrorMessage setIsError={ setIsError } /> }
        <img src={ Vue } alt="Vue symbol" className="vue" />
        <img src={ Git } alt="Git symbol" className="git" />
        <img src={ Sass } alt="Sass symbol" className="sass" />
        <img src={ TypeScript } alt="TypeScript symbol" className="typescript" />
        <img src={ PHP } alt="PHP symbol" className="php" />
        <img src={ MySQL } alt="MySQL symbol" className="mysql" />
        <img src={ Python } alt="Python symbol" className="python" />
        <img src={ CSS } alt="CSS symbol" className="css" />
        <img src={ TF } alt="TF symbol" className="tf" />
        <img src={ Nkube } alt="Nkube symbol" className="nkube" />
      </StyledField>
    </BorderDiv>
  )
};
