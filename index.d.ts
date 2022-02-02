/**
 * Asynchronous (async/await) batch array reductions.
 *
 * @param {any[]} array - target array
 * @param {function} reducer - reduction function
 * @param {*} [initialValue] - accumulator's initial value. `default = 0`
 * @param {number} [batchSize] - the batch chunk size. `default = 100`
 * @param {number} [rateLimit] - (optional) thottling in ops/sec. `default = 0` (no limit)
 * @returns {Promise<any>}
 */
export function reduceBatch(
  array: Array<any>,
  reducer: (acc: any, cur: any, idx?: number, arr?: any[]) => any,
  initialValue?: any,
  batchSize?: number,
  rateLimit?: number
): Promise<any>;

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
  array: Array<any>,
  reducerfn: (acc: any, cur: any, idx?: number, arr?: any[]) => any,
  callback: (err?: any | null, result?: any | null) => any,
  initialValue?: any,
  batchSize?: number,
  rateLimit?: number,
): any;
