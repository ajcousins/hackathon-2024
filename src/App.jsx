import { useState } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import './App.css';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import qrCode from './assets/qrCode.png'
import Ticket from './Components/Ticket';

const SCREENS = {
  TICKET: {
    id: 'TICKET',
    ctaCopy: 'Find My Seat',
  },
  WAYFINDER_TEXT: {
    id: 'WAYFINDER_TEXT',
    ctaCopy: 'View My Ticket',
  },
  WAYFINDER_IMAGES: {
    id: 'WAYFINDER_IMAGES',
    ctaCopy: ''
  },
};



function App() {
  const [screen, setScreen] = useState('TICKET');

  const handleChangeScreen = () => {
    if (screen === SCREENS.TICKET.id) {
      setScreen(SCREENS.WAYFINDER_TEXT.id);
    }
    if (screen === SCREENS.WAYFINDER_TEXT.id) {
      setScreen(SCREENS.TICKET.id);
    }
  };

  return (
    <Theme accentColor='red' grayColor='sand' radius='large'>
      <div className='wrapper'>
        {screen === SCREENS.TICKET.id && (
          <div className='ticket'>
            <Ticket />
          </div>

        )}
        {screen === SCREENS.WAYFINDER_TEXT.id && (
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
          <Button
            style={{ flexGrow: '1', margin: '1em' }}
            onClick={handleChangeScreen}
          >
            {SCREENS[screen].ctaCopy}
            <ArrowRightIcon />
          </Button>
        </div>
      </div>
    </Theme>
  );
}

export default App;
