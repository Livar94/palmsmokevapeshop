import React, { useRef, useState } from 'react';
import UploadIcon from '../assets/upload-icon.png';
import Image from 'next/image';

const UploadImage = ({ img, setImg }) => {
    /* const [img, setImg] = useState(''); */
    const [uploadedImg, setUploadedImg] = useState(false);
    const inputRef = useRef(null);
  
    const setNewImg = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
  
      reader.addEventListener("load", function () {
        setImg(reader.result);
      }, false);
  
      if (file) {
        reader.readAsDataURL(file);
      }
    }
    
    if (uploadedImg) return "";
  
    return (
      <div className="uploadImg">
        {img ? (
          <div className='uploaded-img'>
            <img src={img} alt="" />
            <div className="btns">
{/*               <button className='btn btn-create' onClick={() => {
                setBase64(img);
                setUploadedImg(true);
              }}>Create QR Code</button> */}
              <button className='btn btn-delete' onClick={() => setImg('')}>Remove upload</button>
            </div>
          </div>
        ) : (
          <div className='upload-file-btn' role="button" onClick={() => inputRef.current.click()} >
            <Image src={UploadIcon} className='upload-icon' alt="" />
            <p>Upload image</p>
            <input className='file-input' type="file" name="" id="" ref={inputRef} onChange={setNewImg} />
          </div>
        )}
        
        
      </div>
    );
  }
  
  export default UploadImage;