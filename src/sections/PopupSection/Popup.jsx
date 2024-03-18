import React from 'react';

const PopupBox = () => {
  const openPopup = () => {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    overlay.style.display = 'block';
    popup.style.display = 'block';
  };

  const closePopup = () => {
    const overlay = document.getElementById('overlay');
    const popup = document.getElementById('popup');
    overlay.style.display = 'none';
    popup.style.display = 'none';
  };

  return (
    <div>
      <style>
        {`
          #overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: none;
            overflow-hidden;
          }

          #popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: black;
            color:white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            display: none;
          }

          .popup-content {
            text-align: center;
          }
          .button{
            justify-content:center;
            border: 2px solid #000;
          }

          .close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
          }
        `}
      </style>

      <button className=' flex justify-center items-center bg-red-200 border-black' onClick={openPopup}>Open Popup</button>

      <div id="overlay"></div>

      <div id="popup">
        <div className="popup-content">
          <span className="close" onClick={closePopup}>&times;</span>
          <h2>Hey! Babe.</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae, earum tenetur minima fugiat culpa consectetur.</p>
        </div>
      </div>
    </div>
  );
};

export default PopupBox;
