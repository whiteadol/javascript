// Nullish coalescing operator : null, undefined일 경우 변수 할당

// Bad Code
function printMessage(text) {
    let message = text;
    if (text == null || text == undefined) {
        message = 'Nothing to dispaly !';
    }
    console.log(message);
}

// Good Code
function printMessage(text) {
    const message = text ?? 'Nothing to dispaly !';
    console.log(message);
}

printMessage('Hello'); // Hello
printMessage(undefined); // Nothing to dispaly !
printMessage(null); // Nothing to dispaly !


// cf ) default Parameter : undefined일 경우에만, 변수 할당 (Default parameter is only for undefined)
function printMessage(text = 'Nothing to dispaly !') {
    console.log(text);
}

printMessage('Hello'); // Hello
printMessage(undefined); // Nothing to dispaly !
printMessage(null); // null


// cf ) Logical OR operator || : falsy인 경우, 우측의 변수 할당
// falsy : null, undefined, false, 0, -0, NaN, "", '', `` (Logical OR operator)
function printMessage(text) {
    const message = text || 'Nothing to dispaly !'
    console.log(message);
}

printMessage('Hello'); // Hello
printMessage(undefined); // Nothing to dispaly !
printMessage(null); // Nothing to dispaly !
printMessage(0); // Nothing to dispaly !
printMessage(''); // Nothing to dispaly !

// cf ) Nullish coalescing operator Example : Expression도 가능하다.
const result = getInitialState() ?? fetchFromServer();
console.log(result);

function getInitialState() {
    return null;
}

function fetchFromServer() {
    return 'Hello~';
}