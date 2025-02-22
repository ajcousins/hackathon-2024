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
    const mockTime = 1721405007152;

    useEffect(() => {
      // Calculate the initial countdown time
      const currentTime = Date.now();
      console.log('currentTime:', currentTime);
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
                    <p>{Math.floor(countdownTime / 1000)} seconds until show starts</p>
                  </div>
                  <p>MAIN STAGE</p>
              </div>

              {/* <div className='flex-container-2'>
                <p className='seat-index' id='auditorium-level'>LEVEL 6</p>
                <p className='seat-index' id='door-guide'>DOOR F</p>
                <p className='seat-index' id='seating-row'>ROW A</p>
                <p className='seat-index' id='seat-number'>SEAT 65</p>
              </div> */}

              <div className='grid'>
                <div>
                  LEVEL
                </div>
                <div>
                  DOOR
                </div>
                <h1>6</h1>
                <h1>F</h1>
                <div>
                  ROW
                </div>
                <div>
                  SEAT
                </div>
                <h1>A</h1>
                <h1>65</h1>
              </div>

              <div className="flex-container-3">
                <div className='qr-code-wrapper'>
                  <img id="qr-code" src={qrcode}  alt="qr code for your ticket" />
                </div>
            </div>
        </div>
      </Theme>
    );
  }
  
  export default Ticket;
  