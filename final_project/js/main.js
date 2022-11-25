import { currentDate } from "./utilities.js";

//call currentDate function and put in HTML div
let todayDate = document.getElementById('date');
todayDate.innerHTML = currentDate();