import { validateForms } from "../../functions/validate-forms";
import { isMobile, isTablet, isDesktop } from "../../functions/check-viewport";


// import gsap from "gsap";
// import { TimelineLite } from "gsap/gsap-core";


function formView() {
  let selector = document.querySelectorAll('input[type="tel"');
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);





  function checkValue(item) {
      let input = document.querySelector(item);


      if (input.value !== "") {
        return true
      } else {

      }
  }

  function checkEmail() {
    let input = document.querySelector('input[type="email"]')
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {


      return true;
    } else {


      return false;
    }
  }








  const contactForm = document.querySelector(".form__default");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const checkMail = checkEmail();
      const checkname = checkValue('input[name="name"]')
      const checkEmailes = checkValue('input[name="email"]')
      const checkPhone = checkValue('input[name="phone"]')


      function checkFinnal(...args) {

        function isTrue(element) {
          return element == true;
        }
        let result = args.every(isTrue)

        return result;
      }

      const final = checkFinnal(checkMail, checkname, checkEmailes, checkPhone)

      if (final == true) {
        if (isDesktop()) {

        }

        if (isMobile() || isTablet()) {

        }

      } else {
        console.log(false)
        return;
      }

    });
  }


}

export default formView;
