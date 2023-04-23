//your JS code here. If required.
let element = document.querySelector('#level');
let level = 0;
while (element.parentNode) {
    level++;
    element = element.parentNode;
}
alert(`The level of the element is: ${level}`);