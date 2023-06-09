const celsius = parseFloat(prompt("Введите температуру в градусах Цельсия"));
alert(`Цельсий: ${celsius}, Фаренгейт: ${Math.round(((9 / 5) * celsius + 32) * 10) / 10}`);