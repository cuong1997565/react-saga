// console.log("learning generator function");
// function* helloGeneratorFuntion() {
//     yield 2019;
//     return 'Tu hoc lap trinh redux-saga';
// }

// const result = helloGeneratorFuntion();
// console.log(result.next());
// console.log( result.next());
////////////
// console.log('Vong lap vo tan');
// function* helloGeneratorFuntion() {
//     while(true) {
//         yield('Toi dang lang nghe');
//     }
// }
// const iterator = helloGeneratorFuntion();
// console.log(iterator.next());
///////////////////////////
console.log('generator function: generator about generator');

function* printName() {
    yield 'redux-saga';
}

function* hello() {
    yield 'xin chao';
    yield* printName();
    yield 'ket thuc';
}

const iterator = hello();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());