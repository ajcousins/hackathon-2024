import React from 'react'; 
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import data from '../assets/libs/mock-data';
import { ArrowRightIcon } from '@radix-ui/react-icons';
// import qrcode from '../assets/images/qr_example.png'

function Ticket() {
  
    return (
      <Theme accentColor='red' grayColor='sand' radius='large' scaling='95%'>
        <div className='wrapper'>
            <div className='ticket'>
              {/* <h1>{data.attributes.title}</h1> */}
              <div>
              {/* <img src={qrcode}  alt="qr code for your ticket" /> */}
              </div>
            </div>
            <div className='wayfinder-text'>
              <h1>1.</h1>
              <ul>
                <li>Staircase...</li>
                <li>Lift XYZ...</li>
              </ul>
              <p>Stuff</p>
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
  