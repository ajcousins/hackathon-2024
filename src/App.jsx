import { useState } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import './App.css';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { qr_example } from './qr_example';
import Ticket from './Components/Ticket';

function App() {
  const [screen, setScreen] = useState('ticket');

  return (
    <Theme accentColor='red' grayColor='sand' radius='large' scaling='95%'>
      <div className='wrapper'>
        {screen === 'ticket' && (
          <>
            <Ticket />
            <div className='ticket'>
              <h1>Tosca</h1>
              <p></p>
              <p>Stuff</p>
              <img src={qr_example} alt="qr code for your ticket" />
            </div>
          </>
        )}
        {screen === 'wayfinder-text' && (
          <div className='wayfinder-text'>
            <h1>1.</h1>
            <ul>
              <li>Staircase...</li>
              <li>Lift XYZ...</li>
            </ul>
            <p>Stuff</p>
          </div>
        )}
        <div className='bottom-nav'>
          <Button>
            Find My Seat
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </Theme>
  );
}

export default App;
