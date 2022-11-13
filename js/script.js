const lines = 5;
let result = '';
    // Пишем решение вот тут
    // Проверяется именно переменная result, формируйте строку в ней
       for (let i = 0; i <= lines; i++) {
            for (let j = 0; j < (lines - i); j++) {
                result += " ";
            }
            for (let j = 0; j < (11 - ((lines - i)*2)); j++) {
                result += "*";
            }
                if (i <= lines+1) result += "\n";
            }
        
    console.log(result);