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

export default reduceBatch;
