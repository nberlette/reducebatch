/**
 * Asynchronous (async/await) batch array reductions.
 *
 * @param {any[]} array - target array
 * @param {function} reducer - reduction function
 * @param {*} [initialValue] - accumulator's initial value. `default = 0`
 * @param {number} [batchSize] - the batch chunk size. `default = 100`
 * @param {number} [rateLimit] - (optional) thottling in ops/sec. `default = 0` (no limit)
 * @returns {Promise<*>} accumulator
 */
export async function reduceBatch(
  array,
  reducer = (acc, cur) => acc + cur,
  initialValue = 0,
  batchSize = 100,
  rateLimit = 0
) {
  let accumulator = initialValue;
  let index = 0;
  let delay = 0 < rateLimit ? 1000 / parseInt(rateLimit) : 0;
  async function batch() {
    return new Promise((resolve, reject) => () => {
      try {
        for (let i = index; i < index + batchSize; i++) {
          accumulator = reducer(accumulator, array[i], i, array);
        }
      } catch (err) {
        reject(err.message || err.toString());
      }

      index += batchSize;
      index === array.length && resolve(accumulator);
      setTimeout(() => resolve(batch()), delay);
    });
  }

  return await batch();
}

export default reduceBatch;
