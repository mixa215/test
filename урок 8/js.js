
let num = 50;

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