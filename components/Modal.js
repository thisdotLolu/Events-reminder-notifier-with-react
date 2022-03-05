import React from 'react';
import ReactDOM from 'react';
import './Modal.css';


const Modal = ({children, handleClose,isSalesModal}) => {
  return(
    //   created modal pop-up
    <div className='modal-backdrop'>
    <div className='modal' style={
      {border:'4px solid',
      borderColor:isSalesModal?'#ff4500':'gray',//adding css claassdynamically to modal border
      textAlign:'center'}}>
        {children}
        <button onClick={handleClose} 
        className={isSalesModal?'sales-btn':''}>CLOSE</button>
        {/* adding css class */}
    </div>
    </div>
  )
}

export default Modal