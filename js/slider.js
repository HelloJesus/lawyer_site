const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = document.querySelector(".embla__button--prev");
const nextBtn = document.querySelector(".embla__button--next");
const embla = EmblaCarousel(viewPort, {
    slidesToScroll: 3,
    loop: true,
    align: "center",
    draggable: true,
    dragFree: false,
    breakpoints: {
        '(max-width: 800px)': { slidesToScroll: 2 }
        // '(max-width: 450px)': { slidesToScroll: 1 }
    }
});

const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
    prevBtn.addEventListener('click', embla.scrollPrev, false);
    nextBtn.addEventListener('click', embla.scrollNext, false);
};

const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
    return () => {
        if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
        else prevBtn.setAttribute('disabled', 'disabled');

        if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
        else nextBtn.setAttribute('disabled', 'disabled');
    };
};

const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

setupPrevNextBtns(prevBtn, nextBtn, embla);

embla.on("select", disablePrevAndNextBtns);
embla.on("init", disablePrevAndNextBtns);

