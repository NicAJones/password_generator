const pwLength = 10;
const random = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", '1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
let rtnPw = []
const qs = (query) => {
    return document.querySelector(query);
}

const btn = qs('.btn');
const password = qs('.password');



btn.addEventListener('click', (e) => {
    for (let i = 1; i <= pwLength; i++) {
        let num = Math.floor(Math.random() * random.length + 1)
        rtnPw.push(random[num]);
    }
    password.textContent = rtnPw.join().replaceAll(',', '');
})