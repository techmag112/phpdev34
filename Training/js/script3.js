"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups(arr) {
    let newCommand = {
        "0" : [],
        "1" : [],
        "2" : [],
        last : "",
    };
    arr = arr.sort();
    for (let i = 0; i<3 ;i++) {
        let [first, second, three, ...last] = arr;
        arr.splice(0, 3);
        newCommand[i] = [first, second, three];
        newCommand.last = last;
    }
    
        newCommand.last = "Оставшиеся студенты: " + (newCommand.last.length === 0 ? "-" : newCommand.last.join(", "));
    return [ newCommand[0], newCommand[1], newCommand[2], newCommand.last ];
}

//Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. 
//Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

console.log(sortStudentsByGroups(students));

