// Object Destructuring : 구조를 분해하여 할당한다.

const person = {
    name: 'Julia',
    age: 20,
    phone: '01077777777',
};

// Bad Code
function displayPerson(person) {
    displayAvatar(person.name);
    displayName(person.name);
    displayProfile(person.name, person.age);
}

// Good Code
function displayPerson(person) {
    const { name, age } = person;
    displayAvatar(name);
    displayName(name);
    displayProfile(name, age);
}