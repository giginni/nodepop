// getting-started.js
const mongoose = require('mongoose');
const Advertisement = require('../model/advertisement');
const data = require('./data');


async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/nodepop');
  await Advertisement.collection.drop().catch(() => {});

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  for (let i=0; i<data.Advertisements.length; i++) {
        const newAd = new Advertisement(data.Advertisements[i]);
        console.log(newAd.name);

        await newAd.save()
}
  
  mongoose.disconnect()
}


main().catch(err => console.log(err));
