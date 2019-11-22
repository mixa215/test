import { strict } from "assert"




if (num < 49) {
    console.log("Не верно!")
}  else if (num > 100) {
    console.log("Много!")
} else {
    console.log("Верно!")
}

(num == 50) ? console.log("Верно!") : console.log("Не верно!");

switch (num) {
    case num < 49:
        console.log("Верно!");
        break;
    case num > 100:
        console.log("Много!");
        break;
    case num > 80:
        console.log("Все ещё много!");
        break;
        case 50:
        console.log("Верно!");
        break;
    default:
        console.log("Что то пошло не так!");
        break;
}

let num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while (num < 55)

for (let i = 1; i < 8; i++) {
    if (i == 6) {
        continue;
    }
    console.log(i);
}
let i = 0;
while (i < 8) {
    console.log(i);
    i++;
}
let i = 0;
do {
    console.log(i);
    i++;
} while (i < 8);