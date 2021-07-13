const reviews = [
    {
        id: 1,
        name: "john doe",
        job: "web developer",
        img: "https://robohash.org/john-doe.png?size=150x150",
        text: "Mauris justo erat, gravida sed lacus at, lobortis vulputate sem. Cras vel ante magna. Ut nec laoreet ligula. Quisque pharetra cursus libero ac tristique. Suspendisse et scelerisque nulla, eu ultricies nunc.",
    },
    {
        id: 2,
        name: "Alyosha Samed",
        job: "web designer",
        img: "https://robohash.org/Alyosha-Samed.png?size=150x150",
        text: "Maecenas pellentesque risus a eros pretium, non porttitor tortor congue. Quisque porttitor lectus a nunc venenatis, sit amet pretium nisl bibendum. Nullam interdum mauris id nulla suscipit gravida.",
    },
    {
        id: 3,
        name: "Efemena Boško",
        job: "mobile developer",
        img: "https://robohash.org/Efemena-Boško.png?size=150x150",
        text: "Donec aliquet id magna non commodo. Aliquam facilisis nibh eget nisi aliquam ullamcorper. Integer posuere sodales mi at porttitor. Aliquam posuere sagittis vestibulum.",
    },
    {
        id: 4,
        name: "Andi Sultan",
        job: "web developer",
        img: "https://robohash.org/andi-sultan.png?size=150x150",
        text: "Maecenas fermentum pretium pulvinar. Proin sagittis luctus sapien, a volutpat eros dignissim ut. Duis pharetra enim ut urna ultrices gravida. Proin egestas arcu non mauris tristique suscipit.",
    },
];

let idCount = 0;
const c_name = document.getElementById("carousel-name");
const c_img = document.getElementById("carousel-img");
const c_occupation = document.getElementById("carousel-occupation");
const c_review = document.getElementById("carousel-review");
const c_prev = document.getElementById("carousel-prev");
const c_next = document.getElementById("carousel-next");
const c_surprise = document.getElementById("carousel-surprise");

const btns = document.querySelectorAll(".carousel__btn");

function setReview(n) {
    c_name.textContent = reviews[n].name;
    c_img.src = reviews[n].img;
    c_occupation.textContent = reviews[n].job;
    c_review.textContent = reviews[n].text;
}

setReview(idCount);

c_prev.addEventListener("click", () => {
    idCount--;
    if (idCount < 0) idCount = reviews.length - 1;
    setReview(idCount);
});

c_next.addEventListener("click", () => {
    idCount++;
    if (idCount > reviews.length - 1) idCount = 0;
    setReview(idCount);
});

c_surprise.addEventListener("click", () => {
    idCount = Math.floor(Math.random() * 4);
    setReview(idCount);
});
