import React, { useState } from 'react';
import {Link} from "react-router-dom";

const OTPModal = ({setOtp}) => {

  let [isAuthenticated,setIsAuthenticated] = useState(false);

const handleValidation = ({setOtp})=>{
  setIsAuthenticated(true);
  };

  const modalStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '999',
  };

  const contentStyle = {
    background: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: '300px',
    textAlign: 'center',
  };
  let password = '9999';

  return (
        <div style={modalStyle}>
          <div style={contentStyle}>
            <h2>Enter OTP</h2>
            <h1 onClick={()=>{setOtp(false)}}>X</h1>
            <input
              type="text"
              style={{
                padding: '10px',
                width: '100%',
                marginBottom: '10px',
              }}
              placeholder="Enter OTP"
            />
            <button
              style={{
                padding: '10px 20px',
                background: '#0074cc',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }
            }
            >
              Submit
            </button>
          </div>
        </div>
      )}


export default OTPModal;
