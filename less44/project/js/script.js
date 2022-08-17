/* Задания на урок:




4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg'),
      textGenre = poster.querySelector('.promo__genre'),
      movuiList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {
    item.remove();
})
poster.style.backgroundImage = 'url("img/bg.jpg")';
textGenre.textContent = 'Drama';

movuiList.innerHTML = '';


movieDB.movies.sort();
/*console.log(poster.innerHTML);*/
movieDB.movies.forEach((film, i) => {
    movuiList.innerHTML += `<li class="promo__interactive-item">${i + 1} ${film}
                            <div class="delete"></div>
                        </li>`
});
