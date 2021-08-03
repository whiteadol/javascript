// Spread Syntax - Object

const item = { type: 'shirt', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// Bad Code #1
item['price'] = detail.price;

// Bad Code #2
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

// Bad Code #3
const newObject2 = {
    type: item.type,
    size: item.size,
    price: detail.price,
    made: detail.made,
    gender: detail.gender,
};

// Good Code
const shirt0 = Object.assign(item, detail);

// Better Code : Spread-syntax - Object
const shirt = { ...item, ...detail };

// cf ) Spread-syntax Object의 값 Update (price 20 -> 40)
const shirt1 = { ...item, ...detail, price: 40 };