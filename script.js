/*
const numberOfFilms = +prompt('How match films are you see?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('One of the last you films?', ''),
      b = prompt('How do you like it?', ''),
      c = prompt('One of the last you films?', ''),
      d = prompt('How do you like it?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);*/


/*
if (1){
    console.log('ok');
}else {
    console.log('error')
};


if(num < 49){
    console.log('error');
}else if (num > 100){
    console.log('so match');
}else {
    console.log('ok');
}*/
/*
const num = 40;
(num === 50) ? console.log('ok') : console.log('error');*/
/*
const num = '100';
switch (num){
    case '49':
        console.log('error');
        break;
    case '100':
        console.log('errror1');
        break;
    case '50':
        console.log('ok');
        break;
    default:
        console.log('good task')
        break;
}*/
/*
const humburger = 5;
const fries = null;
if ( humburger && fries ){
    console.log('yes');
}

console.log((humburger && fries));
*/

/*
false {
        '',
        null,
        undefined,
        0,
        NaN
}*/
/*
const humburger = 3;
const fries = 3;
const colla = 0;
const nuggits = 2;
*/

/*console.log(humburger === 3 && colla && fries);
console.log(1 && 0);
console.log(1 && 5);
console.log(null && 5);
console.log(0 && 'gbfbnfnfn');*/
/*
if ( humburger === 3 && colla === 2 || fries ===3 && nuggits ){
    console.log('yes');
}else {
    console.log('go averyver');
};
console.log(humburger === 3 && (colla === 2 || fries === 3) && nuggits);
console.log(!0);
*/

/*
let jonReport, maryReport, samReport, alexReport = 'done';
console.log(jonReport || maryReport || samReport || alexReport );*/
/*
console.log( NaN || 2 || undefined );*/
/*
console.log( NaN && 2 && undefined );*/
/*console.log( 1 && 2 && 3 );*/
/*console.log( !1 && 2 || !3 );*/
/*console.log( 25 || null && !3 );*/
/*console.log( NaN || null || !3 || undefined || 5);*/
/*console.log( NaN || null && !3 && undefined || 5);*/
/*
console.log( 5 === 5 && 3 > 1 || 5);*/

/*let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger || cola || fries === 3 || nuggets) {
    console.log('Done!')
}*/
/*let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
    console.log('Done!')
}*/

/*
let num = 50;
/!*while (num <= 55){
    console.log(num);
    num++
}*!/

/!*
do {
    console.log(num);
    num++
} while (num <= 55);*!/
*/
/*
let num = 50;
for (let i = 1; i <= 10; i++){
    if(i === 6){
        continue;
    }
    console.log(i)
}
*/
/*
for(let i = 0; i < 5; i++){
    console.log(i);
    for(let j = 0; j < 6; j++) {
        console.log(j);
    }
}*/
/*
let a = '';
const length = 7;
for (let i = 1; i < length; i++){
    for (let j = 0; j < i; i++){
      a += '*';
    }
    a += '/n';
}
console.log(a );
*/
/*first: for(let i = 0; i < 5; i++) {
    console.log(`first lavel ${i}`);
    for (let j = 0; j < 6; j++) {
        console.log(`second lavel ${j}`);
    }
    for (let k = 0; k < 6; k++) {
        if(k === 3) break first;
        console.log(`second lavel ${k}`);
    }
}*/
/*let a = '';
for (let i = 1; i < 10; i++){
    /!*for (let j = 0; j < a; i++){
    }*!/
    console.log(a += '*');
};
let b = '';
for (let i = 13; i > 1; i--){
    b = '';
    for (let j = 1; j < i; j++){
        b += '*';
    }
    console.log(b);
};*/
/*for (let i = 5; i <= 10; i++ ){
    console.log(i);
}*/
/*
for (let i = 20; i > 10; i--){
    if(i === 12){ break}
    console.log(i);
}*/
/*for(let i = 1; i <= 5; i++){
    console.log(i * 2);
}*/

/*for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}*/

/*let b = 2;
while (b <= 16) {
    if (b % 2 !== 0) {
        console.log(b);
    }
    b++;
}*/
/*let b = 2;
while (true) {
    if (b % 2 !== 0) {
        console.log(b);
    }
    if(b >= 16){
        break
    }
    b++;
}*/
/*
let arr = [];
for (let i = 5; i <= 10; i++){
    arr[i];

}console.log(arr)*/
/*const a = prompt('один из последнич просмотреных фильмов?', ''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('один из последнич просмотреных фильмов?', ''),
      d = prompt('на сколько оцените его?', '');*/
/*const numberOfFilms = +prompt('how matgh?', '');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};*/
/*console.log(personalMoviesDB.count)*/
/*for(let i = 0; i < 2; i++){
    const a = prompt('один из последнич просмотреных фильмов?', ''),
        b = prompt('на сколько оцените его?', '');
    if(a !== null && b !== null && a !== '' && b !== '' && a !== a.length < 50){
        personalMoviesDB.movies[a] = b;
        console.log('done');
    }else {
        console.log('error');
        i--;
    }

}*/
/*console.log(personalMoviesDB)*/

/*if(personalMoviesDB.count < 10){
    console.log('malovato');
}else if(personalMoviesDB.count >= 10 && personalMoviesDB.count < 30){
    console.log('normalno');
}else if(personalMoviesDB.count >=30 ){
    console.log('kinoman');
}else {
    console.log('error');
}*/


/*
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;*/
/*
let num = 20
function showFirstMassage(text, arg, dfb, dfbfd){
    console.log(text);
    let num = 10;
    console.log(num)
}
showFirstMassage('hello world');
console.log(num);*/
/*
function calck(a, b){
    return (a + b);
}

console.log(calck(2, 4));
console.log(calck(5, 6));
console.log(calck(8, 7));
console.log(calck(9, 345));
*/

/*function rer(){
    let num = 50;
    return num;
}
const anothherNum = rer();
console.log(anothherNum)

const loger = function(){
    console.log('hello')
};
loger();

const calk = (a, b) => {
    return a + b
};*/

/*const curs = 28;
/!*const cursEv =30;*!/
const discount = 0.9;
function convert(amount, cursER){
    return cursER * amount;
}
function  promotion(result){
    console.log(result * discount);
    return
}*/
/*
convert(500, curs);
convert(700, cursEv);*/
/*const res = convert(500, curs);
promotion(res);

function test(){
    for(let i = 0; i < 5; i++){
        console.log(i)
        if(i === 3) return
    }
    console.log('done')
}
test();*/

/*
function doNathing(){
}
console.log(doNathing() === undefined)
doNathing();*/
/*
const str = 'teSt';
const arr = [1, 2, 4, 5];
console.log(str.toLowerCase());

const fruit = 'Some fruit';
console.log(fruit.indexOf('q'));

const logg ='Hello world';
console.log(logg.slice(-5, -1));
console.log(logg.substr(6, 5))

const num = 12.2;
console.log(Math.round(num))

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));*/


/*
const a = prompt('один из последнич просмотреных фильмов?', ''),
      b = prompt('на сколько оцените его?', ''),
      c = prompt('один из последнич просмотреных фильмов?', ''),
      d = prompt('на сколько оцените его?', '');
/!*const numberOfFilms = +prompt('how matgh?', '');*!/
let numberOfFilms;
function start(){
     while (numberOfFilms == '' || numberOfFilms == null || numberOfFilms == isNaN(numberOfFilms)){
         numberOfFilms = +prompt('how matgh?', '');
     }
}
start();
function remembarMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt('один из последнич просмотреных фильмов?', ''),
            b = prompt('на сколько оцените его?', '');
        if(a !== null && b !== null && a !== '' && b !== '' && a !== a.length < 50){
            personalMoviesDB.movies[a] = b;
            console.log('done');
        }else {
            console.log('error');
            i--;
        }

    }
}
remembarMyFilms();

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
function showMyDB(hidden){
if(!hidden){
    console.log(personalMoviesDB.privat)
}
}
showMyDB();
function runGenus(){
    for(let i = 1; i <= 3; i++){
        let genre = prompt(`один из последнич просмотреных фильмов${i}?`);
        personalMoviesDB.genres[i - 1] = genre;
    }
}
runGenus();*/

/*
function  first(){
    //do something
    setTimeout(function (){
        console.log(1)
    },500)
}
function second(){
    console.log(2)
}
first();
second();

function lernJs(lang, callback){
    console.log(`i learn${lang}`);
    callback();
}
function done(){
    console.log('djhhfhhfhfhf');
}
lernJs('JS', done);*/


/*const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        background: 'red'
    },
    makeTest: function (){
        console.log('test');
    }
};

options.makeTest();
const {border, background} = options.colors;
console.log(border);*/
    /*console.log(options.name);
    delete  options.name;
    console.log(options);*/
/*
let counter = 0;
for (let key in options) {
    if (typeof (options[key]) === "object") {
            for(let i in  options[key]){
                console.log(`svoystvo ${i} imeet znachenie ${options[key][i]}`);

            }
    }else {
        console.log(`svoystvo ${key} imeet znachenie ${options[key]}`);
        counter++;
    }
}
console.log(counter);*/
/*console.log(Object.keys(options).length);*/

/*const arr = [199, 26, 13, 6, 8];
arr.sort(compareNumber);
console.log(arr);
function  compareNumber(a, b){
return a - b;
}*/
/*arr[99] = 0;
console.log(arr.length);
console.log(arr);*/
/*arr.pop();*/
/*arr.push(10);
console.log(arr);*/
/*
for(let i = 0; i <= arr.length; i++){
    console.log(arr[i]);
}*/
/*
for(let value of arr){
    console.log(value);
}*/
/*
arr.forEach(function (item, index, arr){
    console.log(`${index}: ${item} vnutry masiva ${arr}`)
});*/
 /*const str = prompt('', '');
 const products = str.split(', ');
 products.sort();
console.log(products.join('; '));*/
/*let a = 5,
    b = a;

b = b + 5;
console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj;

copy.a = 10;
console.log(copy);
console.log(obj);*/

/*function coppy(mainObj){
    let objCopy = {};
    let key;
    for( key in mainObj){
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }

}*/
/*const newNumbers = coppy(numbers);
newNumbers.a = 10;
newNumbers.c.x = 10;*/
/*console.log(newNumbers);
console.log(numbers);*/

/*const add = {
    d: 17,
    e: 20
};
const clone = Object.assign({}, add);
clone.d = 20;*/
/*
console.log(add);
console.log(clone);*/
/*
const oldArr = ['a', 'b', 'c'];
const newArr = oldArr.slice();
newArr[1] = 'jfjfjfjfjfjf';
console.log(oldArr);
console.log(newArr);*/
/*
const video = ['youtube', 'vimeo', 'rutybe'],
      blogs = ['wordpress', 'livejornal', 'kupapupa'],
      internet = [...video,...blogs, 'vk', 'jgjg'];
console.log(internet);

function  log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

const arr = ['a', 'b'];
const newfArr = [...arr];
console.log(newfArr);*/
/*const q = {
    one: 1,
    two: 2
};
const newObj = {...q};
console.log(newObj);*/
/*let str = 'some';
let strObj = new String(str);
console.log(typeof(str));
console.log(typeof(strObj));*/
/*console.dir([1,2,3]);*/
/*const soldger = {
    halth: 400,
    armor: 100,
    seyHello: function (){
        console.log('hello')
    }
};
const jon = Object.create(soldger);*/
/*Object.setPrototypeOf(jon, soldger)
console.log(jon);*/
/*
jon.seyHello();*/
/*
const num = 5;
console.log(typeof (5 + ''));

const fontSize = 26 + 'px';
console.log(typeof (parseInt('15px', 10)));
let ans = +prompt('fkfkfkfkf', '');

let switcher = null;

if(switcher){
    console.log('jfjfjfjf');
}
switcher = 1;*/
/*
console.log(typeof (Boolean('3')));

console.log(typeof (!!'388888888'));*/
/*let number = 5; debugger

function logNumber(){
    let number = 4; debugger
    console.log(number);
}
number = 6;
logNumber(); debugger*/

/*function createCounter(){
    let counter = 0;
    const myFunction = function (){ debugger
        counter = counter + 1;debugger
        return counter;  debugger
    }
    return myFunction;
}debugger

const increment = createCounter(); debugger
const c1 = increment(); debugger
const c2 = increment(); debugger
const c3 = increment(); debugger

console.log(c1, c2, c3);*/

/*
function createCounter() {
       let counter = 0
      const myFunction = function() {
           counter = counter + 1
             return counter
          }
       return myFunction
     }
 const increment = createCounter()
 const c1 = increment()
 const c2 = increment()
 const c3 = increment()
 console.log('example increment', c1, c2, c3)
*/
/*
let x = 5; alert(++x);*/
/*
[] + false - null + true;*/
/*
let y = 1; let x = y = 2; alert(x);*/
