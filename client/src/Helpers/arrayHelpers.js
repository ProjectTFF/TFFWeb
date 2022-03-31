export function getLengthOfLongestArray(...args) {
   const newArrayLengths = args.map((arg) => arg.length);
   return Math.max(...newArrayLengths);
}
