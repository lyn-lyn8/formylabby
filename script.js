function showMessage() {

    const message = document.getElementById("secretMessage");
    const music = document.getElementById("bgMusic");

    message.classList.toggle("show");

    music.play().catch(() => {
        console.log("Music needs user interaction.");
    });

}


function createHeart() {
    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = ["❤️", "💕", "💗", "💖", "💘"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 20 + 15 + "px";

    heart.style.animationDuration =
        Math.random() * 5 + 5 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}


setInterval(createHeart, 700);

const bgMusic = document.getElementById("bgMusic");
const musicButton = document.getElementById("musicButton");

function toggleMusic() {

    if (bgMusic.paused) {
        bgMusic.play();
        musicButton.innerHTML = "⏸️ Pause Music";
    } else {
        bgMusic.pause();
        musicButton.innerHTML = "🎵 Play Music";
    }

}

function sayYes() {

    const result =
        document.getElementById("answerResult");

    const text =
        document.getElementById("resultText");

    const emoji =
        document.getElementById("resultEmoji");

    const effect =
        document.getElementById("effectContainer");

    const finalNote = document.getElementById("finalNoteAfterAnswer");

    result.classList.add("show");

    text.innerHTML =
        "KISS MOKO MADAMI 😘❤️";

    emoji.innerHTML =
        "🥰💋❤️";

    effect.innerHTML = "";

    createFireworks();

    createHearts();

    

    setTimeout(function () {

        finalNote.classList.add("show");

    }, 1800);

    setTimeout(() => {
    document.getElementById("finalNoteAfterAnswer")
        .classList.add("show");
}, 1500);

}


function sayNo() {

    const result =
        document.getElementById("answerResult");

    const text =
        document.getElementById("resultText");

    const emoji =
        document.getElementById("resultEmoji");

    const effect =
        document.getElementById("effectContainer");

    result.classList.add("show");

    text.innerHTML =
        "Wala akong kiss ouch 😭💔";

    emoji.innerHTML =
        "😭🥺💔";

    effect.innerHTML = "";

    createSadEmojis();

    setTimeout(() => {
    document.getElementById("finalNoteAfterAnswer")
        .classList.add("show");
}, 1500);

}

function createFireworks() {

    const container =
        document.getElementById("effectContainer");

    for (let i = 0; i < 8; i++) {

        setTimeout(() => {

            const firework =
                document.createElement("div");

            firework.classList.add("firework");

            firework.style.left =
                Math.random() * 100 + "%";

            firework.style.top =
                Math.random() * 70 + "%";


            const x =
                (Math.random() - 0.5) * 300;

            const y =
                (Math.random() - 0.5) * 300;


            firework.style.setProperty(
                "--x",
                x + "px"
            );

            firework.style.setProperty(
                "--y",
                y + "px"
            );


            container.appendChild(firework);


            setTimeout(() => {

                firework.remove();

            }, 1300);

        }, i * 180);

    }

}


function createHearts() {

    const container =
        document.getElementById("effectContainer");

    for (let i = 0; i < 15; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.classList.add(
                "floating-heart"
            );

            heart.innerHTML =
                ["❤️", "💕", "💗", "💖", "💋"]
                [Math.floor(Math.random() * 5)];


            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.bottom = "0px";


            container.appendChild(heart);


            setTimeout(() => {

                heart.remove();

            }, 2600);

        }, i * 150);

    }

}


function createSadEmojis() {

    const container =
        document.getElementById("effectContainer");

    for (let i = 0; i < 18; i++) {

        setTimeout(() => {

            const sad =
                document.createElement("div");

            sad.classList.add(
                "sad-emoji"
            );

            sad.innerHTML =
                ["😭", "🥺", "💔", "😢", "😿"]
                [Math.floor(Math.random() * 5)];


            sad.style.left =
                Math.random() * 100 + "%";

            sad.style.top = "-30px";


            container.appendChild(sad);


            setTimeout(() => {

                sad.remove();

            }, 2600);

        }, i * 130);

    }

}

function resetAnswer() {

    const result =
        document.getElementById("answerResult");

    const effect =
        document.getElementById("effectContainer");

    const finalNote =
        document.getElementById("finalNoteAfterAnswer");

    result.classList.remove("show");

    finalNote.classList.remove("show");

    effect.innerHTML = "";

}

function playYesMusic() {
    const bgMusic = document.getElementById("bgMusic");
    const yesMusic = document.getElementById("yesMusic");
    const noMusic = document.getElementById("noMusic");

    bgMusic.pause();
    noMusic.pause();
    noMusic.currentTime = 0;

    yesMusic.currentTime = 0;
    yesMusic.play();
}

function playNoMusic() {
    const bgMusic = document.getElementById("bgMusic");
    const yesMusic = document.getElementById("yesMusic");
    const noMusic = document.getElementById("noMusic");

    bgMusic.pause();
    yesMusic.pause();
    yesMusic.currentTime = 0;

    noMusic.currentTime = 0;
    noMusic.play();
}