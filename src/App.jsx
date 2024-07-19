import { useEffect, useState } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import './App.css';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import Ticket from './Components/Ticket';
import way1 from './assets/images/way_01.png';
import way2 from './assets/images/way_02.png';
import way3 from './assets/images/way_03.png';
import way4 from './assets/images/way_04.png';
import way5 from './assets/images/way_05.png';
import way6 from './assets/images/way_06.png';

const IMAGES = [way1, way2, way3, way4, way5, way6];

const DIRECTIONS = [
  'Proceed up the ramp...',
  'Continue to the opposite corner of the room...',
  'Go to the lift...',
  'Go to level 3',
  'Exit the lift. Take a left and go up the steps...',
  'Row A. Seat 65',
];

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
    ctaCopy: 'View My Ticket',
  },
};

function App() {
  const [screen, setScreen] = useState('TICKET');
  const [currentImg, setCurrentImg] = useState(0);

  const handleChangeScreen = () => {
    if (screen === SCREENS.TICKET.id) {
      setScreen(SCREENS.WAYFINDER_TEXT.id);
      return;
    }
    if (
      screen === SCREENS.WAYFINDER_TEXT.id ||
      screen === SCREENS.WAYFINDER_IMAGES.id
    ) {
      setScreen(SCREENS.TICKET.id);
      return;
    }
  };

  const handleImageIncrement = () => {
    if (currentImg === IMAGES.length - 1) {
      setCurrentImg(0);
      return;
    }

    setCurrentImg(currentImg + 1);
  };

  useEffect(() => {
    console.log('screen:', screen);
  });

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
            <Button onClick={() => setScreen(SCREENS.WAYFINDER_IMAGES.id)}>
              Show me
            </Button>
            <h1>1.</h1>
            <ul>
              {DIRECTIONS.map((dir, i) => {
                return (<li key={i}>{dir}</li>)
              })}
            </ul>
          </div>
        )}
        {screen === SCREENS.WAYFINDER_IMAGES.id && (
          <div className='wayfinder-text'>
            {/* <h1>Images</h1> */}
            <Button onClick={() => setScreen(SCREENS.WAYFINDER_TEXT.id)}>
              Tell me
            </Button>
            <div className='image-wrapper' onClick={handleImageIncrement}>
              <div className='floating-instructions'>
                <h2>{DIRECTIONS[currentImg]}</h2>
              </div>
              <img src={IMAGES[currentImg]} />
            </div>
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
