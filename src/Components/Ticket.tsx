import React from 'react'; 
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
// import data from '../assets/libs/mock-data';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import qrcode from '../assets/qrCode.png';
import './style.css';

function Ticket() {

  // const eventTitle = data.attributes.title;
  const eventTitle = 'Carmen';

    return (
      <Theme accentColor='red' grayColor='sand' radius='large' scaling='95%'>
            <div className='ticket'>

              <div className='flex-container-1'>
                <h1>{eventTitle}</h1>
              </div>

              <div className='flex-container-2'>
                <p id='auditorium-level'>LEVEL 6</p>
                <p id='door-guide'>DOOR F</p>
              </div>

              <div className="flex-container-3">
                <div className='qr-code-wrapper'>
                  <img id="qr-code" src={qrcode}  alt="qr code for your ticket" />
                </div>
            </div>
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
  
  export default Ticket;
  