import { validateForms } from "../../functions/validate-forms";
import { isMobile, isTablet, isDesktop } from "../../functions/check-viewport";

import gsap from "gsap";
import { TimelineLite } from "gsap/gsap-core";
import { Linear } from "gsap";

function formView() {
  let selector = document.querySelectorAll('input[type="tel"');
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);



  function checkValue(item) {
    let input = document.querySelector(item);

    if (input.value !== "") {
      return true;
    } else {
    }
  }

  function checkEmail() {
    let input = document.querySelector('input[type="email"]');
    let warning = document.querySelector(".form__warning");
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
      input.style.border = "1px solid var(--primary2)";
      warning.style.opacity = "0";
      warning.style.visibility = "hidden";

      return true;
    } else {
      input.style.border = "1px solid var(--error)";
      warning.style.opacity = "1";
      warning.style.visibility = "visible";

      return false;
    }
  }

  const form = document.querySelector(".form__default");

  if (form) {
    const formBtn = form.querySelector(".btn__default");
    const formSuc = form.querySelector(".form__success");
    const formInputs = form.querySelector(".form__inputs");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const checkMail = checkEmail();
      const checkname = checkValue('input[name="name"]');
      const checkEmailes = checkValue('input[name="email"]');
      const checkPhone = checkValue('input[name="phone"]');

      function checkFinnal(...args) {
        function isTrue(element) {
          return element == true;
        }
        let result = args.every(isTrue);

        return result;
      }

      const final = checkFinnal(checkMail);

      if (final == true) {
        gsap.registerPlugin(TimelineLite)
        const tl = new TimelineLite();

        tl.to(formBtn, .5, {opacity: 0,  ease: Linear}, 0)
        tl.to(formInputs, 1, {opacity: 0,  ease: Linear}, 0)
        tl.to(formSuc, 1, {opacity: 1, visibility: 'visible', ease: Linear})
        
      } else {
        console.log(false);
        return;
      }
    });
  }
}

export default formView;
