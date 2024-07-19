import React, { useEffect, useState } from 'react'; 
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes';
import { data } from '../assets/libs/mock-data';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import qrcode from '../assets/images/qr_example.png'

function Ticket() {

    const [countdownTime, setCountdownTime] = useState(0);

    useEffect(() => {
      // Calculate the initial countdown time
      const currentTime = Date.now();
      let countdown = data.attributes.date - currentTime;
    
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
        <div className='wrapper'>
            <div className='ticket'>
              <h1>{data.attributes.title}</h1>
              <div>
                <p>7pm</p><p>18/07/24</p>
              </div>
              <div><p>{countdownTime}</p></div>
              <div>
              <img src={qrcode}  alt="qr code for your ticket" />
              </div>
            </div>
        </div>
      </Theme>
    );
  }
  
  export default Ticket;
  