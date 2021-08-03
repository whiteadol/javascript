// Looping

const items = [1, 2, 3, 4, 5, 6];

// Bad Code
function getAllEvens(items) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] % 2 === 0) {
            result.push(items[i]);
        }
    }
    return result;
}

function multiplyByFour(items) {
    const result = [];
    for (let i = 0; i < items.length; i++) {
        result.push(items[i] * 4);
    }
    return result;
}

function sumArray(items) {
    let sum = 0;
    for (let i = 0; i < items.length; i++) {
        sum += items[i];
    }
    return sum;
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// Good Code #1

// filter : 조건에 해당하는 값만 필터링
function getAllEvens(items) {
    return items.filter((num) => num % 2 === 0);
}

// map: 기존 배열을 각각 다른 값으로 바꾼다.
function multiplyByFour(items) {
    return items.map((num) => num * 4);
}

function sumArray(items) {
    return item.reduce((a, b) => a + b, 0);
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// Good Code #2
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// Good Code #3
const result = items
    .filter((num) => num % 2 === 0)
    .map((num) => num * 4)
    .reduce((a, b) => a + b, 0);

console.log(result);