const mongoose = require('mongoose');
const State = require('../models/state');

const unitedStates = "64beb7f16f35df2eb70c4e72";
const india = "64beb7f16f35df2eb70c4e73";

const newState = [
  {
    name: 'California',
    country: unitedStates
  },
  {
    name: 'New York',
    country: unitedStates
  },
  
  {
    name: 'Haryana',
    country: india
  },
  {
    name: 'Punjab',
    country: india
  }
];

async function saveState(){
  try{
  mongoose.connect('mongodb://localhost:27017/frequent_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
       await State.deleteMany({})
       const saveState = await State.insertMany(newState);
       console.log('state saved successfully:', saveState);
    }catch(e){
        console.log('Error saving State:', e)
    }
}

saveState();
