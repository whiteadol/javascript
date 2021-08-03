// Spread-Syntax - Array

let fruits = ['melon', 'orange', 'banana'];

// fruits.push('apple');
fruits = [...fruits, 'apple'];

// fruits.unshift('grape');
fruits = ['grape', ...fruits];


const fruits2 = ['pinch', 'carrot', 'watermelon'];

let combined = fruits.concat(fruits2);
combined = [...fruits, 'cherry', ...fruits2];