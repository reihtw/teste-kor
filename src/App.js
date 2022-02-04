import React, { useEffect }  from 'react';
import axios from 'axios';
import {
  useGoogleReCaptcha
} from 'react-google-recaptcha-v3';
import { TextField, Button } from "@material-ui/core";
// This library is required for KORConnect

const App = () => {
  // This constant is required for ReCaptcha, which is used by KOR Connect 
  const { executeRecaptcha } = useGoogleReCaptcha();

  // This function is an example of how to call your API through KOR Connect 
  const handleGet = async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
    }

    /* We'll need this constant to make request */
    const token = await executeRecaptcha('submit');
    const timestamp = new Date().toUTCString();
    // You need to append the path of the endpoint you are calling to the KOR Connect base URI 
    axios.post('https://rodrigo.free.beeceptor.com',
      {
        data: {
          'test':'test'
        }
      },
      {
        headers:
          {
            token,
            timestamp,
            'x-api-key': 'rtJc5YpWZy2iIJuadHNqa1q7g0hoRtJQ7AtuF9Xc'
          }
        }
      )
    .then(response => {
      console.log(response)
      
    })
    .catch(error => {
      console.log(error)
    })
  };

  // In this example, we are using useEffect to trigger the attestation process as soon as the component is loaded
  // useEffect(() => {
  //   if (executeRecaptcha) {
  //     handleGet();
  //   }

  // }, [executeRecaptcha]);

  // This is used to hide your Recaptcha badge (please read Recaptcha’s TOS) 
  useEffect(() => {
    if (document.querySelector('.grecaptcha-badge')) {
      const el = document.querySelector('.grecaptcha-badge');
      el.style.display = 'none';
    }
  }, []);

  // Extend this sample application by modifying this code 
  return (
    <>
    <h1>Hello World</h1>
    <Button variant="contained" color="primary" size="large" onClick={async () => {
                if (executeRecaptcha) {
                  handleGet();
                }
              }}><p className="reset-a"></p></Button>
    </>
  );
};

export default App;