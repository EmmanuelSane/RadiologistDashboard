import { useRef } from 'react';         
import "./styles.css";

export const FileUploader = ({handleFile}) => { // REVISED
  const hiddenFileInput = useRef(null); 

  const handleClick = event => {
    hiddenFileInput.current.click();   
  };

  const handleChange = event => {
    const fileUploaded = event.target.files[0];
    handleFile(fileUploaded);                   // ADDED
  };

  return (
    <>
      <button 
        className="button-upload"
        onClick={handleClick}
      >
        Upload CT Scan/XRAY
      </button>
      <input 
        type="file"
        onChange={handleChange}
        ref={hiddenFileInput}
        style={{display:'none'}}
      />
    </>
  );
};