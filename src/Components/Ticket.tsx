import React, { useEffect, useState } from 'react'; 
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
// import data from '../assets/libs/mock-data';
import { ArrowRightIcon, CardStackIcon } from '@radix-ui/react-icons';
import qrcode from '../assets/qrCode.png';
import './style.css';

function Ticket() {

  // const eventTitle = data.attributes.title;
  const eventTitle = 'Carmen';
  


    const [countdownTime, setCountdownTime] = useState(0)
    const mockTime = 1900;;

    useEffect(() => {
      // Calculate the initial countdown time
      const currentTime = Date.now();
      let countdown = mockTime - currentTime;
    
      // Update the countdown state every second
      const intervalId = setInterval(() => {
        if (countdown > 0) {
          setCountdownTime(countdown);
          countdown -= 1000; // Decrease the countdown by 1 second
        } else {
          clearInterval(intervalId); // Stop the interval when countdown reaches 0
        }
      }, 1000);
    
      return () => {
        clearInterval(intervalId); // Cleanup function to stop the interval when the component unmounts
      };
    }, []);
    

  
    return (
      <Theme accentColor='red' grayColor='sand' radius='large' scaling='95%'>
            <div className='ticket'>

              <div className='flex-container-1'>
                <h1>{eventTitle}</h1>
                <div className='time-date-line'>
                <p>7PM</p><p>18/07/2024</p>
                </div>
                  <div className='countdown-container'>
                    <p>{countdownTime} until show starts</p>
                  </div>
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
  