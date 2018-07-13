

var container = document.getElementById("container");
var hclick = document.getElementById("hclick");
var desserts= document.getElementById("desserts");
var pagetitle = document.getElementById("pagetitle");
var counter1 = 0;
var counter2 = 0;

hclick.addEventListener("click", showMenu);
desserts.addEventListener("click", showDess);

hclick.style.textAlign = "center";
desserts.style.textAlign = "center";
pagetitle.style.textAlign = "center";

function showMenu() {
  counter1 ++;
  if (counter1 < 2) {
    var header = document.createElement("header");
    var item1 = document.createElement("h3");
    var item2 = document.createElement("h3");
    var item3 = document.createElement("h3");
    item1.textContent = "Buffalo Wing Combo (w/ celery and blue cheese) --- $11.95";
    item2.textContent = "Gyro Platter (w/ greek salad and fries) -------------- $14.50";
    item3.textContent = "Full Rack of Ribs (w/ mashed potatoes) ------------ $11.95";
    header.appendChild(item1);
    header.appendChild(item2);
    header.appendChild(item3);
    container.appendChild(header);
    header.style.textAlign = "center";
    header.style.color = "blue";
 }
}

function showDess() {
  counter2 ++;
  if (counter2 < 2) {
    var section = document.createElement("div");
    var item4 = document.createElement("h3");
    var item5 = document.createElement("h3");
    var item6 = document.createElement("h3");
    item4.textContent = "Black Forest Cake ------------- $8.95";
    item5.textContent = "Ice Cream w/ Truffles --------- $9.50";
    item6.textContent = "Apple Strudel ----------------- $6.95";
    section.appendChild(item4);
    section.appendChild(item5);
    section.appendChild(item6);
    container.appendChild(section);
    section.style.textAlign = "center";
    section.style.color = "blue";
  }
}
