import formView from "./form/form";
import smoothScroll from "./smoothScroll/smoothScroll";
import textareaHeight from "./utils/textarea";
import animhref from "./utils/animhref";
import {sliderHorizontal, sliderVertical} from "./sliders/slider";




window.addEventListener('DOMContentLoaded', (event) => {
  animhref()
  smoothScroll()
  formView()
  sliderHorizontal()
  sliderVertical()
  textareaHeight()
});
