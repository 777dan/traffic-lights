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

let trafficLights1 = trafficLightsFunc();
for (let i = 0; i < 5; i++) {
    let color = trafficLights1();
    console.log('%c ' + color + ' ', 'background: ' + color + '; color: white;');
}
console.log("-----");
let trafficLights2 = trafficLightsFunc();
for (let i = 0; i < 5; i++) {
    let color = trafficLights2();
    console.log('%c ' + color + ' ', 'background: ' + color + '; color: white;');
}