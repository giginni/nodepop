// getting-started.js
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const Advertisement = require('../model/advertisement');
const data = require('./data');


function yesOrNoQuestion(text) {
  return new Promise((resolve, reject) => {
    const interphase = readline.createInterphase({
      input: process.stdin,
      output: process.stdout,
    });
    interphase.question(text, (answer) => {
      interphase.close();
      if (answer.toLowerCase() === "si") {
        resolve(true);
        return;
      }
      resolve(false);
    });
  });
}


async function main() {
  const continue = await yesOrNoQuestion("¿Esta seguro que desea eliminar la base de datos? [n]");
  if (!continue) {
    process.exit();
  }

  
  await mongoose.connect('mongodb://127.0.0.1:27017/nodepop');
  await Advertisement.collection.drop().catch(() => {});  //limpia la bd para inicializarla
  await Advertisement.ensureIndexes(); //me asegura de crear los indices

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  for (let i=0; i<data.Advertisements.length; i++) {
        const newAd = new Advertisement(data.Advertisements[i]);
        console.log(newAd.name);

        await newAd.save()
}
  
  mongoose.disconnect()
}


main().catch(err => console.log(err));
