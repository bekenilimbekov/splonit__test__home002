function secretNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let low = 1, high = 100;
    let attempts = 0;
    let guess;

    console.log(`Первый компьютер загадал число от 1 до 100.`);

    while (low <= high) {
        attempts++;
        guess = Math.floor((low + high) / 2);
        console.log(`Попытка ${attempts}: компьютер угадывает ${guess}`);
        
        if (guess === secretNumber) {
            console.log(`Число угадано! Это ${guess}. Количество попыток: ${attempts}`);
            break;
        } else if (guess < secretNumber) {
            console.log(`${guess} меньше загаданного числа.`);
            low = guess + 1;
        } else {
            console.log(`${guess} больше загаданного числа.`);
            high = guess - 1;
        }
    }
}

secretNumberGame();
