function makeAnagram(a, b) {
  // Write your code here
  let dictionary = {};
  a.split('').forEach((letter) => { 
      if (!dictionary[letter]) {
          dictionary[letter] = [0, 0];
      }
      dictionary[letter][0] += 1;
  })
  b.split('').forEach((letter) => {
      if (!dictionary[letter]) {
          dictionary[letter] = [0, 0];
      }
      dictionary[letter][1] += 1;
  });
  
  let sum = 0;
 Object.values(dictionary).forEach((arr) => {
     sum += Math.abs(arr[0] - arr[1])
 })
 return sum;
}

console.log(makeAnagram('spyss', 'pie'));