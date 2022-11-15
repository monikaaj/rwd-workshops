import './App.css';
import { useState } from 'react';
import styled from 'styled-components';

const flexItems = [{
  color: 'red'
}, {
  color: 'green'
}, {
  color: 'blue'
}, {
  color: 'purple'
}, {
  color: 'yellow'
}, {
  color: 'orange'
}];

const gridItems = [{
  color: 'red'
}, {
  color: 'green'
}, {
  color: 'blue'
}, {
  color: 'purple'
}];

function App() {
  const [ showFlexboxDemo, setShowFlexboxDemo ] = useState(false);
  const [ showGridDemo, setShowGridDemo ] = useState(false);
  const [ showMenu, setShowMenu ] = useState(false);

  return (
    <div className='App'>
      <div className='input-wrapper'>
        <input id='flexbox-demo' type='checkbox' onChange={() => setShowFlexboxDemo(!showFlexboxDemo)} />
        <label htmlFor='flexbox-demo'>Show Flexbox demo</label>
      </div>

      <div className='input-wrapper'>
        <input id='grid-demo' type='checkbox' onChange={() => setShowGridDemo(!showGridDemo)} />
        <label htmlFor='grid-demo'>Show Grid demo</label>
      </div>

      <div className='demo-wrapper'>
        {showFlexboxDemo && (
          <div className='container-layout flexbox-container'>
            {flexItems.map((item, index) => (
              <div key={`${index}-${item.color}`} className={`flex-item flex-item-${index}`} style={{'backgroundColor': item.color}} >
                <span className='item-text'>{index}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='demo-wrapper'>
        <button className='sidebar-menu-btn' onClick={() => setShowMenu(!showMenu)}>{showMenu ? 'Hide menu' : 'Show menu'}</button>

        {showMenu && (
          <div className='sidebar-menu'>
            SIDEBAR MENU
          </div>
        )}

        {showGridDemo && (
          <div className='container-layout grid-container'>
            {gridItems.map((item, index) => (
              <div key={`${index}-${item.color}`} className={`grid-item grid-item-${index}`} style={{'backgroundColor': item.color}} >
                <span className='grid-item-text'>{index}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className='demo-wrapper'>
        <button className='sidebar-menu-btn' onClick={() => setShowMenu(!showMenu)}>{showMenu ? 'Hide menu' : 'Show menu'}</button>

        {showMenu && (
          <div className='sidebar-menu'>
            SIDEBAR MENU
          </div>
        )}

        {showGridDemo && (
          <div className='container-layout grid-container'>
            {gridItems.map((item, index) => (
              <div key={`${index}-${item.color}`} className={`grid-item grid-item-${index}`} style={{'backgroundColor': item.color}} >
                <span className='grid-item-text'>{index}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
