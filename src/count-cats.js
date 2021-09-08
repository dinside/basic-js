import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(matrix) {
   let cats = 0

 for(let i = 0; i < matrix.length;i++) {
 let filtred = matrix[i].filter(item=>item==='^^')
 cats = cats + filtred.length

 }

 return cats

  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}
