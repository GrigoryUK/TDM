import SmoothScroll from 'smooth-scroll';

function smoothScroll() {

const scroll = new SmoothScroll('a[href*="#"]', {
    updateURL: false, 
});
}

export default smoothScroll;
