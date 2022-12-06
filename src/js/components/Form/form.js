import { validateForms } from "../../functions/validate-forms";
import { isMobile, isTablet, isDesktop } from "../../functions/check-viewport";


// import gsap from "gsap";
// import { TimelineLite } from "gsap/gsap-core";


function formView() {
  let selector = document.querySelectorAll('input[type="tel"');
  let im = new Inputmask("+7 (999) 999-99-99");
  im.mask(selector);

  function inputPlaceholder (input, color) {

    if (!input) return null;

    // Do nothing if placeholder supported by the browser (Webkit, Firefox 3.7)
    if (input.placeholder && 'placeholder' in document.createElement(input.tagName)) return input;

    color = color || '#AAA';
    var default_color = input.style.color;
    var placeholder = input.getAttribute('placeholder');

    if (input.value === '' || input.value == placeholder) {
      input.value = placeholder;
      input.style.color = color;
      input.setAttribute('data-placeholder-visible', 'true');
    }

    var add_event = /*@cc_on'attachEvent'||@*/'addEventListener';

    input[add_event](/*@cc_on'on'+@*/'focus', function(){
     input.style.color = default_color;
     if (input.getAttribute('data-placeholder-visible')) {
       input.setAttribute('data-placeholder-visible', '');
       input.value = '';
     }
    }, false);

    input[add_event](/*@cc_on'on'+@*/'blur', function(){
      if (input.value === '') {
        input.setAttribute('data-placeholder-visible', 'true');
        input.value = placeholder;
        input.style.color = color;
      } else {
        input.style.color = default_color;
        input.setAttribute('data-placeholder-visible', '');
      }
    }, false);

    input.form && input.form[add_event](/*@cc_on'on'+@*/'submit', function(){
      if (input.getAttribute('data-placeholder-visible')) {
        input.value = '';
      }
    }, false);

    return input;
  }





  function checkValue(item) {
      let input = document.querySelector(item);


      if (input.value !== "") {
        return true
      } else {

      }
  }

  function checkEmail() {
    let input = document.querySelector('input[type="email"]');
    let warning = document.querySelector('.form__warning')
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value)) {
      input.style.border = '1px solid var(--primary2)'
      warning.style.opacity = '0';
      warning.style.visibility = 'hidden';

      return true;
    } else {
      input.style.border = '1px solid var(--error)'
      warning.style.opacity = '1';
      warning.style.visibility = 'visible';


      return false;
    }
  }








  const form = document.querySelector(".form__default");
  const formBtn = form.querySelector('.btn__default')
  const formSuc = form.querySelector('.form__success')
  const formInputs = form.querySelector('.form__inputs')
  if (form) {
    form.addEventListener("submit", function (e) {
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

      const final = checkFinnal(checkMail)

      if (final == true) {
        if (isDesktop()) {

          // setTimeout ради примера

          setTimeout(() => {
            formBtn.setAttribute('disabled', '')
            formBtn.style.background = 'var(--placeholder)'
            formBtn.innerHTML = 'обрабатываем заявку...'
          }, 1000)


          setTimeout(() => {
            formInputs.style.opacity = '0'
            formInputs.style.visibility = 'hidden'
            formBtn.style.opacity = '0'
            formBtn.style.visibility = 'hidden'
          }, 1500)

          setTimeout(() => {
            formSuc.style.opacity = '1'
            formSuc.style.visibility = 'visible'
          }, 2000)


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
