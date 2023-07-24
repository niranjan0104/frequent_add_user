const mongoose = require('mongoose');
const City = require('../models/city');

const california = "64beb1d8a2ac9771122a9653";
const newYork = "64beb1d8a2ac9771122a9654";
const haryana = "64beb1d8a2ac9771122a9655";
const punjab = "64beb1d8a2ac9771122a9656"

const newCity = [
  {
    name: 'Los Angeles',
    state: california
  },
  {
    name: 'San Francisco',
    state: california
  },
  
  {
    name: 'New York City',
    state: newYork
  },
  {
    name: 'San Buff',
    state: newYork
  },

  {
    name: 'Gurgaon',
    state: haryana
  },
  {
    name: 'Faridabad',
    state: haryana
  },

  {
    name: 'Mohali',
    state: punjab
  },
  {
    name: 'Ludhiana',
    state: punjab
  },
];

async function saveCity(){
  try{
  mongoose.connect('mongodb://localhost:27017/frequent_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
       await City.deleteMany({})
       const saveCity = await City.insertMany(newCity);
       console.log('city saved successfully:', saveCity);
    }catch(e){
        console.log('Error saving State:', e)
    }
}

saveCity();
