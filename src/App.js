import './App.scss';
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(false);
  const [status, setStatus] = useState('close');

  return (
    <>
      <header>
        <div className="сontainer">
          <div className="Nav">
            <div
              className={active ? 'NavMenu active' : 'NavMenu'}
              onClick={() => setActive(!active)}>
              <nav>
                <a href
                  className="menuBtn"
                  role="button"
                  onClick={() => setStatus(status === 'open' ? 'close' : 'open')}>
                  <span className={status}></span>
                </a>
                <a href="/" className="NavLink">Home</a>
                <a href="/About" className="NavLink">About</a>
                <a href="/productss" className="NavLink">Download</a>
                <a href="/ContactUS" className="NavLink">ContactUS</a>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default App;
