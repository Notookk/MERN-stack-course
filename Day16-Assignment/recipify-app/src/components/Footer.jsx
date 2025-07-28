import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-title">Recipify</span>
        <span className="footer-desc">&copy; {new Date().getFullYear()} Recipify. All rights reserved.</span>
        <div className="footer-social">
        <span className="footer-social-icon" title="Instagram">
          <a href='https://instagram.com/xotik.ari' target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '32px',
            height: '32px',
            background: 'linear-gradient(135deg, #fbbf24 60%, #fffbe7 100%)',
            borderRadius: '50%',
            boxShadow: '0 2px 8px #fbbf2488',
            fontSize: '18px',
            color: '#1f2937'
          }}>
            <FontAwesomeIcon icon={faInstagram} />
          </span> </a>
        </span>
        <span className="footer-social-icon" title="Website">
          <a href="https://morning.is-a.dev" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              background: 'linear-gradient(135deg, #fbbf24 60%, #fffbe7 100%)',
              borderRadius: '50%',
              boxShadow: '0 2px 8px #fbbf2488',
              fontSize: '18px',
              color: '#1f2937'
            }}>
              <FontAwesomeIcon icon={faCode} />
            </span>
          </a>
        </span>
          <span className="footer-social-icon" title="Mail">
            <a href="mailto:aritrapradhan41@gmail.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #fbbf24 60%, #fffbe7 100%)',
                borderRadius: '50%',
                boxShadow: '0 2px 8px #fbbf2488',
                fontSize: '18px',
                color: '#1f2937'
              }}>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
