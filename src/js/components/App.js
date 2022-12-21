import formView from "./form/form";
import smoothScroll from "./smoothScroll/smoothScroll";
import textareaHeight from "./utils/textarea";
import animhref from "./utils/animhref";
import headerRoom from "./utils/headerRoom";
import accordion from "./utils/accordion";
import arrowUp from "./utils/arrowUp";
import arrayBread from "./utils/arrayBread";
import {sliderHorizontal, sliderVertical} from "./sliders/slider";




window.addEventListener('DOMContentLoaded', (event) => {
  animhref()
  headerRoom()
  smoothScroll()
  arrowUp()
  formView()
  sliderHorizontal()
  sliderVertical()
  textareaHeight()
  accordion()
  // arrayBread()
});
