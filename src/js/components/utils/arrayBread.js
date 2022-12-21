import { isMobile, isTablet, isDesktop } from "../../functions/check-viewport";

// function arrayBread() {
//   const breadcrumb = document.querySelector(".breadcrumb ol");
//   if (breadcrumb && isMobile()) {
//     const items = breadcrumb.querySelectorAll(".breadcrumb-item");
//     const itemsCount = items.length;

//     if (itemsCount <= 2) {
//       return false;
//     }
//     let arr = Array.from(items);
//     arr.splice(0,  items.length-3);
//     let arr2 =  Array.from(items);
//     arr2 = arr2.pop();
//     console.log(arr2)



//     for (let i = 0; i < arr.length; i++) {

//       if (!arr[i].classList.contains('active')) {
//         let a = arr[i].querySelector('a');
//         let href = a.href;
//         breadcrumb.append = `<li class="breadcrumb-item"><a href="${a.href}">${a.textContent}</a></li>`
//         console.log(href);
//       }

//     }
//   }
// }

// export default arrayBread;
// {/* */}
//


// function arrayBread() {
//   const breadcrumb = document.querySelector(".breadcrumb ol");

//   if (breadcrumb) {
//     breadcrumb.scrollLeft = breadcrumb.scrollWidth;
//   }
// }

// export default arrayBread;
