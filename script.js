const colorsArr = ["red", "green", "yellow"];
function trafficLightsFunc() {
    let count = 0;
    let color = colorsArr[count];
    let changeColor = function () {
        if (count === 2) count = -1;
        return color = colorsArr[++count];
    }
    return changeColor;
}

let trafficLight1 = trafficLightsFunc();
for (let i = 0; i < 5; i++) {
    let color = trafficLight1();
    console.log('%c 1 traffic light ', 'background: ' + color + '; color: white;');
}
console.log("-----");
let trafficLight2 = trafficLightsFunc();
for (let i = 0; i < 5; i++) {
    let color = trafficLight2();
    console.log('%c 2 traffic light ', 'background: ' + color + '; color: white;');
}