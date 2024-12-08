import React from "react";
import './modalGame.css';

export default function Modal({ children }) {
    return (
        <div className="modal">
         <div className="modal-box">{children}</div>
         </div>
        );
}
