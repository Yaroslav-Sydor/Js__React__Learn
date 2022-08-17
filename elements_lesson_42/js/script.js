'use strict';

const box = document.getElementById('box');
const buttons = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const hearts = document.querySelectorAll(".heart");
const oneHeart = document.querySelector('.heart');
const wrapper = document.querySelector('.wrapper');
/*box.style.backgroundColor = 'blue';
box.style.width = '500px';*/

buttons[2].style.borderRadius = '100%';
circles[2].style.backgroundColor = 'red';
box.style.cssText = `background-color: blue; width: 500px`;

/*for (let i = 0; i < hearts.length; i++){
    hearts[i].style.background = 'blue';
}*/
hearts.forEach(item => {
    item.style.background = 'blue';
})
const div = document.createElement('div');
/*
const text = document.createTextNode('hfhfhfhf');*/
div.classList.add('black');
document.body.append(div);
document.querySelector('.wrapper').append(div)
/*
wrapper.prepend(div);*/
/*hearts[0].before(div);*/
/*hearts[0].after(div);
circles[0].remove();*/
/*
hearts[0].replaceWith(circles[0]);
*/
/*wrapper.appendChild(div);*/
div.innerHTML = '<h1>Heloo world</h1>';
/*div.textContent = 'Hello';*/
div.insertAdjacentHTML('afterend', '<h2>hello</h2>');