var userName = name => name ? 'Hello' + name.userName : 'Hello!';
userQuestion = `Do you want to play Magic Eight Ball?`;
console.log(userQuestion);

function eightBall() {
    var randomNumber = Math.floor(Math.random() * 8); {
        if (randomNumber <= 0) {
            return 'It is certain'
        } else if (randomNumber <= 1) {
            return 'It is decidedly so'
        } else if (randomNumber <= 2) {
            return 'Reply hazy try again'
        } else if (randomNumber <= 3) {
            return 'Cannot predict now'
        } else if (randomNumber <= 4) {
            return 'Do not count on it'
        } else if (randomNumber <= 5) {
            return 'My sources say no'
        } else if (randomNumber <= 6) {
            return 'Outlook not so good'
        } else if (randomNumber <= 7) { return 'Signs point to yes' }
    }
};
console.log(eightBall())