const slider = (() => {
  let imgs = null;
  let currentSlide = 0;
  let numOfSlides = 0;
  const start = (data) => {
    const elem = document.getElementById(data.elementId);
    imgs = data.images;
    numOfSlides = imgs.length;

    const view = elem.querySelector('.slider-view')
    imgs.forEach(img => {
      const slide = document.createElement('img')
      slide.setAttribute('src', img.src)
      slide.setAttribute('alt', img.alt)
      slide.classList.add('slider-img')
      // todo
    });

    const dots = elem.querySelector(".slider-dots");
    for (let i = 0; i < imgs.length; i++) {
      const dot = document.createElement("span");
      dot.classList.add("slider-dot");
      dots.appendChild(dot);
    }
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
