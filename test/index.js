import reduceBatch from 'reducebatch';
import reduceBatchSync from 'reducebatch/sync';

const arraySize = 100;
const batchSize = 10;
const perSecond = 5;
const largeArray = Array(arraySize).map((v,i) => i);

const syncTest = () => {
  console.log('reduceBatchSync(): testing synchronous function')  

  return reduceBatchSync(largeArray, (a, c, i) => {
  	return a + c;
  }, (err, res) => {
    if (!err && res) console.log(res)
    else console.error(err);
  }, 0, batchSize, perSecond)
  
}

const asyncTest = async () => { 
  console.log('reduceBatch(): testing asynchronous function')
  return new Promise(async (resolve, reject) => {
    let result = await reduceBatch(largeArray, (a, c, i) => {
      return a + c
    }, 0, batchSize, perSecond)

    try {
      if (result) resolve(result + 'items processed');
    } catch (err) {
      reject(console.error(err))
    }
  })
}

let startTime = Date.now();

setTimeout(() => {
  syncTest();

  setTimeout(async () => {

    await asyncTest().then(() => {
      console.log(
        'Elapsed time, sec:',
        ((Date.now() - startTime) / 1000).toFixed(3)
      )
    });

  }, 10);

}, 10);

