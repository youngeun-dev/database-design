const sliderValue = document.getElementById("js-range")
const sliderOutput = document.getElementById("slider-value")
const guessNumber = document.getElementById("guess-number");
const resultOutput = document.getElementById("js-result");
const printForm = document.getElementById("js-guess");

sliderOutput.innerHTML = sliderValue.value; // default slider 값 보이게 하기

// 실시간으로 변경된 slider 값 보이게 하기 
sliderValue.oninput = function() {
    sliderOutput.innerHTML = this.value;
}

// 난수 생성 5 <= randNum <= sliderValue
const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// random number game play
const game = (e) => {
    e.preventDefault(); 
    const rn = getRandom(5,sliderValue.value);
    const gn = guessNumber.value;

    const displaySpan = resultOutput.querySelector("span");

    if(rn == gn) {
        displaySpan.innerHTML = `
            You choose: ${gn}, the machine choose: ${rn}<br>
            <b>You Win !!!<b>
            `;
    }else {
        displaySpan.innerHTML = `
            You choose: ${gn}, the machine choose: ${rn}<br>
            <b>You Lose !!!<b>
            `;
    }
    
};

printForm.addEventListener("submit", game);