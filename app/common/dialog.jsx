import React from 'react';
import ReactDOM from 'react-dom';
import './dialog.scss';

export default function Dialog({ children, closePortal }) {
  const portalRoot = document.getElementById('portal-root');
  if (!portalRoot) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className="dialog-container">
      <div className="dialog-content-wrapper">
        <button className="dialog-close-btn" onClick={closePortal}>
          &#10060;
        </button>
        <div className="dialog-content">{children}</div>
      </div>
    </div>,
    document.getElementById('portal-root')
  );
}
