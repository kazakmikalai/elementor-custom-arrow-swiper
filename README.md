# Elementor Custom Arrow Swiper

Небольшой проект: скрипт для управления стрелками навигации кастомных слайдеров (Swiper) в Elementor.

## Что делает
Файл `js.js` ищет на странице контейнеры свайперов и "внешние" кнопки-стрелки. Когда пользователь кликает по кастомной стрелке (снаружи слайдера), скрипт вызывает `slideNext()` или `slidePrev()` у соответствующего экземпляра Swiper.


## Как подключить
1. Поместите `js.js` в папку с ассетами вашей темы/плагина.
2. Подключите файл на страницу (например, в footer):

```html
<script src="/path/to/js.js"></script>
```

Убедитесь, что Swiper уже инициализирован и что у контейнера есть класс `.swiper` (как у Elementor).

## Ожидаемая HTML-структура
Пример, который соответствует текущей логике скрипта:

```html
<div id="loop-gallery">
  <div class="swiper">
    <!-- Swiper slides -->
  </div>
  <div class="swiper-gallery">
    <a href="#" class="arrow-left">Prev</a>
    <a href="#" class="arrow-right">Next</a>
  </div>
</div>
```

Если у вас несколько слайдеров, добавляйте их в массив `sliders` внутри `js.js`. По умолчанию в файле один элемент:

```js
const sliders = [
  { id: "#loop-gallery", arrows: ".swiper-gallery" },
];
```

## Настройка и отладка
- Тайм-аут ожидания и интервал (`200ms` и `10000ms`) можно изменить в `js.js` при необходимости.
- Если кастомные стрелки находятся глубже в DOM, проверьте селектор в `arrows`.

## Git — базовые команды
Инициализация репозитория и первый коммит:

```powershell
git init
git add .
git commit -m "Initial commit: add js.js and README"
```

Добавление удалённого и пуш (пример для GitHub):

```powershell
git remote add origin https://github.com/<ваш-пользователь>/<репозиторий>.git
git branch -M main
git push -u origin main
```

## Лицензия
MIT
