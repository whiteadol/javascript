// Remove Duplicates!

const array = ['dog', 'fox', 'cat', 'dog', 'bud', 'cat'];

console.log(array); // ['dog', 'fox', 'cat', 'dog', 'bud', 'cat']
console.log([...new Set(array)]); // ['dog', 'fox', 'cat', 'bud']

// 배열 자료구조는 중복 허용 O, Set 자료구조는 중복 허용 X