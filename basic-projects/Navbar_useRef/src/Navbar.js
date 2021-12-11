import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './data';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linkref = useRef(null);
  useEffect(() => {
    const linkHeight = linkref.current.getBoundingClientRect().height;
    if (showLinks) {
      linkContainerRef.current.style.height = `${linkHeight}px`;
    } else {
      linkContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img
            style={{ height: '50px', width: '150px' }}
            src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbigcodenerd.org%2Fwp-content%2Fuploads%2F2020%2F07%2Freactjs.png&f=1&nofb=1'
            alt='logo'
          />
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linkContainerRef}>
          <ul className='links' ref={linkref}>
            {links.map((item) => {
              const { id, url, text } = item;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
