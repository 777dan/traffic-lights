"use strict"
const colorsArr = ["red", "green", "yellow"];
function trafficLightsFunc(num) {
    let count = 0;
    let color = colorsArr[count];
    let changeColor = function () {
        if (count === 2) count = -1;
        return [color = colorsArr[++count], num];
    }
    return changeColor;
}

let trafficLight1 = trafficLightsFunc(1);
let trafficLight2 = trafficLightsFunc(2);
let trafficLightData = trafficLight1();
console.log('%c ' + trafficLightData[1] + ' traffic light ', 'background: ' + trafficLightData[0] + '; color: white;');
trafficLightData = trafficLight1();
console.log('%c ' + trafficLightData[1] + ' traffic light ', 'background: ' + trafficLightData[0] + '; color: white;');
trafficLightData = trafficLight2();
console.log('%c ' + trafficLightData[1] + ' traffic light ', 'background: ' + trafficLightData[0] + '; color: white;');
trafficLightData = trafficLight1();
console.log('%c ' + trafficLightData[1] + ' traffic light ', 'background: ' + trafficLightData[0] + '; color: white;');
trafficLightData = trafficLight2();
console.log('%c ' + trafficLightData[1] + ' traffic light ', 'background: ' + trafficLightData[0] + '; color: white;');
trafficLightData = trafficLight2();
console.log('%c ' + trafficLightData[1] + ' traffic light ', 'background: ' + trafficLightData[0] + '; color: white;');