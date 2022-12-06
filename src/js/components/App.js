import formView from "./Form/form";
import smoothScroll from "./smoothScroll/smoothScroll";
import textareaHeight from "./utils/textarea";
import {sliderHorizontal} from "./Slider/slider";




window.addEventListener('DOMContentLoaded', (event) => {
  formView()
  sliderHorizontal()
  smoothScroll()
  textareaHeight()
});
