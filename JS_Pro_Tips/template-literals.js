// Template Literals (Template String)

const person = {
    name: 'Julia',
    score: 4,
};

// Bad Code
console.log(
    'Hello ' + person.name + ', Your current score is: ' + person.score
);

// Good Code #1
console.log(`Hello ${person.name}, Your current score is: ${person.score}`);

// Good Code #2
const { name, score } = person;
console.log(`Hello ${name}, Your current score is: ${score}`);

// Good Code #3 : 재사용이 가능하게 함수화하여 사용한다.
function greetings(person) {
    const { name, score } = person;
    console.log(`Hello ${name}, Your current score is: ${score}`);
}