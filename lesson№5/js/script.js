'use strict';

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],  
    promptforApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");

   
    menu.insertBefore(menuItem[1],menuItem[2]);

    menuItemLi.classList.add("menu-item");
    menuItemLi.textContent = "Пятый пункт";
    menu.appendChild(menuItemLi);


    title.textContent = "Мы продаем только подлинную технику Apple";

    document.body.style.backgroundImage = "url('img/apple_true.jpg')";
    adv.remove();

    

let askUser = prompt('Как вы относитесь к технике еппл?');
promptforApple.textContent = askUser;