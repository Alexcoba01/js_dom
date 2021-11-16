'use strict';

const body = document.querySelector('body');

const div = document.createElement('div');

setInterval(() => {
    let fecha = new Date();
    let hour = fecha.getHours();
    let minute = fecha.getMinutes();
    let second = fecha.getSeconds();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }
    div.innerHTML = `${hour}:${minute}:${second}`;
    body.prepend(div);
}, 1000);
