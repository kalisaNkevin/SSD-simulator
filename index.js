const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/ussd', (req, res) => {
    // Read the variables sent via POST from our API
    const {
        sessionId,
        serviceCode,
        phoneNumber,
        text,
    } = req.body;

    let response = '';

    if (text == '') {
        // This is the first request. Note how we start the response with CON
        response = `CON What would you like to check
        1. Art and Cultures
        2. Agricultures
        3. Restaurants
        `;
    } else if ( text == '1') {
        // Business logic for first level response
        response = `CON Choose account information you want to view
        1. UZURI KY 
        2. Moshion
        3. Ineza fashion
        `;
    } else if ( text == '1*1') {
        // Business logic for first level response
        // This is a terminal request. Note how we start the response with END
        response = `END UZURI KY
        1. UZURI KY 
        2.Place: KIGALI HEIGHTS
        3.Description: FASHION BASED COMPANY IN KIGALI
        `
    } else if ( text == '1*2') {
      response = `END MOSHION
      1.MOSHION
      2.Place: KIYOVU
      3.Description: FASHION BASED COMPANY IN KIGALI
      `
    }
    else if ( text == '1*3') {
      response = `END INEZA ART
      1.INEZA ART
      2.Place: KARONGI
      3.Description: DRAWING AND PAINTING COMPANY IN KARONGI
      `
    }
    else if ( text == '2') {
      // Business logic for first level response
      response = `CON Choose account information you want to view
      1. Ubumwe cooperative
      2. Imbaraga cooperation
      `;
  }
  else if ( text == '2*1') {
      // Business logic for first level response
      // This is a terminal request. Note how we start the response with END
      response = `END UBUMWE COOPERATIVE
      1.UBUMWE COOPERATIVE
      2.Place: KANOMBE
      3.Description: group farmers cultivating coffee and tea
      4.Contact: 0438478374873
      `
  }
  else if ( text == '2*2') {
      // Business logic for first level response
      // This is a terminal request. Note how we start the response with END
      response = `END IMBARAGA COOPERATION
      1.IMBARAGA COOPERATION
      2.Place: KANOMBE
      3.Description: group farmers cultivating coffee and tea
      4.Contact: 0438478374873
      `
  }
  else if ( text == '3') {
      // Business logic for first level response
      response = `CON Choose account information you want to view
      1.BWOK
      2.KFC
      `;
}
else if ( text == '3*1') {
      // Business logic for first level response
      // This is a terminal request. Note how we start the response with END
      response = `END BWOK
      1.BWOK
      2.Place: KANOMBE
      3.Description: Korean Restaurant
      4.Contact: 0438478374873
      `
}
else if ( text == '3*2') {
      // Business logic for first level response
      // This is a terminal request. Note how we start the response with END
      response = `END KFC
      1.KFC
      2.Place: Kimihurura
      3.Description: Korean Restaurant
      4.Contact: 0438478374873
      `
}

    // Send the response back to the API
    res.set('Content-Type: text/plain');
    res.send(response);
})
app.listen (5000,()=>{
      console.log("server is runnign ");
})