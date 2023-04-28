const slider = (() => {
  let elem = null;
  let view = null;
  let imgs = null;
  let dots = null;
  let currentSlide = 0;

  const runAutoSlide = () => {
    currentSlide++;
    changeImg();
  };
  let interval = setInterval(runAutoSlide, 2000);

  const resetInterval = () => {
    clearInterval(interval);
    interval = setInterval(runAutoSlide, 2000);
  };

  const changeImg = () => {
    if (currentSlide > imgs.length - 1) currentSlide = 0;
    else if (currentSlide < 0) currentSlide = imgs.length - 1;
    view.style.transform = `translateX(${-currentSlide * 100}%)`;

    for (let i = 0; i < imgs.length; i++) {
      if (dots != null) {
        const d = dots.querySelectorAll(".slider-dot");
        d.forEach((dot) => {
          dot.classList.remove("current");
        });
      }
    }
  };

  const start = (data) => {
    elem = document.getElementById(data.elementId);
    imgs = data.images;
    numOfSlides = imgs.length;

    view = elem.querySelector(".slider-view");
    imgs.forEach((img) => {
      const slide = document.createElement("a");
      slide.style.backgroundImage = `url("${img.src}")`;
      slide.classList.add("slider-img");
      slide.setAttribute("href", "#");
      view.appendChild(slide);
    });

    dots = elem.querySelector(".slider-dots");
    for (let i = 0; i < imgs.length; i++) {
      const dot = document.createElement("span");
      if (i == currentSlide) dot.classList.add("current");
      dot.classList.add("slider-dot");
      dots.appendChild(dot);
    }

    const leftBtn = elem.querySelector(".slider-btn-left");
    leftBtn.addEventListener("click", () => {
      currentSlide--;
      changeImg();
      resetInterval();
    });
    const rightBtn = elem.querySelector(".slider-btn-right");
    rightBtn.addEventListener("click", () => {
      currentSlide++;
      changeImg();
      resetInterval();
    });
  };

  return { start };
})();

const imgs = [
  {
    src: "https://images.unsplash.com/photo-1599394022918-6c2776530abb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1458&q=80",
    alt: "1",
  },
  {
    src: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    alt: "2",
  },
  {
    src: "https://images.unsplash.com/photo-1599423300746-b62533397364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    alt: "3",
  },
  {
    src: "https://images.unsplash.com/photo-1599561046251-bfb9465b4c44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1492&q=80",
    alt: "4",
  },
];

slider.start({ elementId: "slider", images: imgs });
