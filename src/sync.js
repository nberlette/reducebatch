/**
 * Synchronous version of reducedBatch()
 *
 * @param {any[]} array - target array
 * @param {function} reducerfn - reduction function
 * @param {function} callback - callback function to handle `err` and `res`
 * @param {*} [initialValue] - accumulator's initial value. `default = 0`
 * @param {number} [batchSize] - the batch chunk size. `default = 100`
 * @param {number} [rateLimit] - (optional) thottling in ops/sec. `default = 0` (no limit)
 * @returns {*} accumulator
 */
export function reduceBatchSync(
  array,
  reducerfn,
  callback,
  initialValue = 0,
  batchSize = 100,
  rateLimit = 0
) {
  try {
    let accumulator = initialValue
    let index = 0,
      delay = 0 < rateLimit ? (1000 / parseInt(rateLimit)) : 0

    const batch = () => {
      for (let i = index; i < index + batchSize && i < array.length; i++) {
        accumulator = reducerfn(accumulator, array[i], i, array)
      }
      index += batchSize
      if (index == array.length)
        return callback(null, accumulator)
      setTimeout(() => batch(), delay)
    }

    batch()
  } catch (err) {
    return callback(err, null)
  }
}

export default reduceBatchSync;
