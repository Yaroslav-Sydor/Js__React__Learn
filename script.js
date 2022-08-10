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
let num = 50;
for (let i = 1; i <= 10; i++){
    if(i === 6){
        continue;
    }
    console.log(i)
}
