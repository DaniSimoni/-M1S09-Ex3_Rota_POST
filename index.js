/* Após criar o modelo Place no exercício anterior, é necessário implementar uma rota do tipo POST com o path "/places" que receba valores por meio de BODY params. Os seguintes valores devem ser recebidos:
*/

const express = require('express');
const connection = require('./src/database');
const Place = require('./src/models/places');

const app = express();

app.use(express.json());        

connection.authenticate();
connection.sync({alter: true})
console.log('API ON') 

app.listen(3333, () => {
    console.log('SERVIDOR ON!')
}); 


app.post('/places', async (req, res) => {

    try {
         const place = {

        name: req.body.name,
       
        numberPhone: req.body.numberPhone,
  
        openingHours: req.body.openingHours,
  
        description: req.body.description,
 
        latitude: req.body.latitude,   
    
        longitude: req.body.longitude,
      }

         const newPlace = await Place.create(place)

             res.status(201).json(newPlace)

    } catch (error) {
        res.status(400).json({message: error.message})
    }
   
})

