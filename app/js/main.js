/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_headerHeight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/_headerHeight */ "./src/js/components/_headerHeight.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/_tabs */ "./src/js/components/_tabs.js");
/* harmony import */ var _components_homeTrustpilotSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/_homeTrustpilotSlider */ "./src/js/components/_homeTrustpilotSlider.js");
/* harmony import */ var _components_homeTrustpilotSlider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_homeTrustpilotSlider__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_updateYear__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/_updateYear */ "./src/js/components/_updateYear.js");
/* harmony import */ var _components_updateYear__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_updateYear__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_faqTabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/_faqTabs */ "./src/js/components/_faqTabs.js");
/* harmony import */ var _components_faqTabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_faqTabs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_formInputFocus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/_formInputFocus */ "./src/js/components/_formInputFocus.js");
/* harmony import */ var _components_teachersSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/_teachersSlider */ "./src/js/components/_teachersSlider.js");
/* harmony import */ var _components_teachersSlider__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_teachersSlider__WEBPACK_IMPORTED_MODULE_6__);








/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_fix_fullheight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/fix-fullheight */ "./src/js/functions/fix-fullheight.js");
// Определение операционной системы на мобильных
// import { mobileCheck } from "./functions/mobile-check";
// console.log(mobileCheck())
// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
 // Реализация бургер-меню
// import { burger } from './functions/burger';
// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';
// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';
// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.form-1', rules1, afterForm);

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body,
  inputsFrom: document.querySelectorAll('.form__input')
});

/***/ }),

/***/ "./src/js/components/_faqTabs.js":
/*!***************************************!*\
  !*** ./src/js/components/_faqTabs.js ***!
  \***************************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var question = _toConsumableArray(document.querySelectorAll(".faq__item-title"));

question.forEach(function (question) {
  question.addEventListener("click", function (event) {
    var active = document.querySelector(".faq__item.faq__item--open");

    if (active && active !== question.parentNode) {
      active.classList.toggle("faq__item--open");
      active.querySelector('.faq__item-content').style.maxHeight = 0;
    }

    question.parentNode.classList.toggle("faq__item--open");
    var answer = question.nextElementSibling;

    if (question.parentNode.classList.contains("faq__item--open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

/***/ }),

/***/ "./src/js/components/_formInputFocus.js":
/*!**********************************************!*\
  !*** ./src/js/components/_formInputFocus.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }



var fieldArray = _toConsumableArray(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].inputsFrom);

if (fieldArray.length > 0) {
  fieldArray.forEach(function (element) {
    element.addEventListener('focus', function () {
      this.parentElement.classList.add('focused');
    });
    element.addEventListener('blur', function () {
      var inputValue = this.value;

      if (inputValue == "") {
        this.classList.remove('filled');
        this.parentElement.classList.remove('focused');
      } else {
        this.classList.add('filled');
      }
    });
  });
}

/***/ }),

/***/ "./src/js/components/_headerHeight.js":
/*!********************************************!*\
  !*** ./src/js/components/_headerHeight.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_header_height__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/header-height */ "./src/js/functions/header-height.js");

(0,_functions_header_height__WEBPACK_IMPORTED_MODULE_0__.getHeaderHeight)();

/***/ }),

/***/ "./src/js/components/_homeTrustpilotSlider.js":
/*!****************************************************!*\
  !*** ./src/js/components/_homeTrustpilotSlider.js ***!
  \****************************************************/
/***/ (() => {

// const swiper = new Swiper('.swiper', {
//   slidesPerView: 3,
//   loop: true,
//   spaceBetween: 130,
//   navigation: {
//     nextEl: '.feedbacks__button-next',
//     prevEl: '.feedbacks__button-prev',
//   },
// });
$('.feedbacks__slider').slick({
  slidesToShow: 3,
  infinite: true,
  rows: 0,
  centered: true,
  responsive: [{
    breakpoint: 1440,
    settings: {// slidesToShow: 4,
    }
  }, {
    breakpoint: 1180,
    settings: {// slidesToShow: 3,
    }
  }]
});

/***/ }),

/***/ "./src/js/components/_tabs.js":
/*!************************************!*\
  !*** ./src/js/components/_tabs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graph_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graph-tabs */ "./node_modules/graph-tabs/src/graph-tabs.js");


if (document.querySelector('[data-tabs=home-tabs]')) {
  var tabsHome = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('home-tabs');
}

if (document.querySelector('[data-tabs=trader-olaf]')) {
  var tabsOlaf = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('trader-olaf');
}

if (document.querySelector('[data-tabs=trader-nikki]')) {
  var tabsNikki = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('trader-nikki');
}

if (document.querySelector('[data-tabs=trader-jagdeep]')) {
  var tabsJagdeep = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('trader-jagdeep');
}

if (document.querySelector('[data-tabs=trader-pierce]')) {
  var tabsPierce = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('trader-pierce');
}

if (document.querySelector('[data-tabs=trader-mahad]')) {
  var tabsMahad = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('trader-mahad');
}

if (document.querySelector('[data-tabs=trader-wendy]')) {
  var tabsWendy = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('trader-wendy');
}

if (document.querySelector('[data-tabs=experience-tab]')) {
  var _tabsWendy = new graph_tabs__WEBPACK_IMPORTED_MODULE_0__["default"]('experience-tab');
}

/***/ }),

/***/ "./src/js/components/_teachersSlider.js":
/*!**********************************************!*\
  !*** ./src/js/components/_teachersSlider.js ***!
  \**********************************************/
/***/ (() => {

$('.teachers__slider').slick({
  arrows: false,
  slidesToShow: 5,
  infinite: true,
  rows: 0,
  centered: true,
  responsive: [{
    breakpoint: 1440,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 1180,
    settings: {
      slidesToShow: 3
    }
  }]
});

/***/ }),

/***/ "./src/js/components/_updateYear.js":
/*!******************************************!*\
  !*** ./src/js/components/_updateYear.js ***!
  \******************************************/
/***/ (() => {

var updateYear = new Date().getFullYear();
document.querySelector('.footer__year').innerText = updateYear;

/***/ }),

/***/ "./src/js/functions/fix-fullheight.js":
/*!********************************************!*\
  !*** ./src/js/functions/fix-fullheight.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./throttle */ "./src/js/functions/throttle.js");


var fixFullheight = function fixFullheight() {
  var vh = window.innerHeight;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
};

var fixHeight = (0,_throttle__WEBPACK_IMPORTED_MODULE_0__.throttle)(fixFullheight);
fixHeight();
window.addEventListener('resize', fixHeight);

/***/ }),

/***/ "./src/js/functions/header-height.js":
/*!*******************************************!*\
  !*** ./src/js/functions/header-height.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeaderHeight": () => (/* binding */ getHeaderHeight)
/* harmony export */ });
var getHeaderHeight = function getHeaderHeight() {
  var _document;

  var headerHeight = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', "".concat(headerHeight, "px"));
};

/***/ }),

/***/ "./src/js/functions/throttle.js":
/*!**************************************!*\
  !*** ./src/js/functions/throttle.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "throttle": () => (/* binding */ throttle)
/* harmony export */ });
var throttle = function throttle(func) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 250;
  var isThrottled = false;
  var savedArgs = null;
  var savedThis = null;
  return function wrap() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (isThrottled) {
      savedArgs = args, savedThis = this;
      return;
    }

    func.apply(this, args);
    isThrottled = true;
    setTimeout(function () {
      isThrottled = false;

      if (savedThis) {
        wrap.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, delay);
  };
};

/***/ }),

/***/ "./node_modules/graph-tabs/src/graph-tabs.js":
/*!***************************************************!*\
  !*** ./node_modules/graph-tabs/src/graph-tabs.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GraphTabs)
/* harmony export */ });
class GraphTabs {
  constructor(selector, options) {
    let defaultOptions = {
      isChanged: () => {}
    }
    this.options = Object.assign(defaultOptions, options);
    this.selector = selector;
    this.tabs = document.querySelector(`[data-tabs="${selector}"]`);
    if (this.tabs) {
      this.tabList = this.tabs.querySelector('.tabs__nav');
      this.tabsBtns = this.tabList.querySelectorAll('.tabs__nav-btn');
      this.tabsPanels = this.tabs.querySelectorAll('.tabs__panel');
    } else {
      console.error('Селектор data-tabs не существует!');
      return;
    }

    this.check();
    this.init();
    this.events();
  }

  check() {
    if (document.querySelectorAll(`[data-tabs="${this.selector}"]`).length > 1) {
      console.error('Количество элементов с одинаковым data-tabs больше одного!');
      return;
    }

    if (this.tabsBtns.length !== this.tabsPanels.length) {
      console.error('Количество кнопок и элементов табов не совпадает!');
      return;
    }
  }

  init() {
    this.tabList.setAttribute('role', 'tablist');

    this.tabsBtns.forEach((el, i) => {
      el.setAttribute('role', 'tab');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('id', `${this.selector}${i + 1}`);
      el.classList.remove('tabs__nav-btn--active');
    });

    this.tabsPanels.forEach((el, i) => {
      el.setAttribute('role', 'tabpanel');
      el.setAttribute('tabindex', '-1');
      el.setAttribute('aria-labelledby', this.tabsBtns[i].id);
      el.classList.remove('tabs__panel--active');
    });

    this.tabsBtns[0].classList.add('tabs__nav-btn--active');
    this.tabsBtns[0].removeAttribute('tabindex');
    this.tabsBtns[0].setAttribute('aria-selected', 'true');
    this.tabsPanels[0].classList.add('tabs__panel--active');
  }

  events() {
    this.tabsBtns.forEach((el, i) => {
      el.addEventListener('click', (e) => {
        let currentTab = this.tabList.querySelector('[aria-selected]');

        if (e.currentTarget !== currentTab) {
          this.switchTabs(e.currentTarget, currentTab);
        }
      });

      el.addEventListener('keydown', (e) => {
        let index = Array.prototype.indexOf.call(this.tabsBtns, e.currentTarget);

        let dir = null;

        if (e.which === 37) {
          dir = index - 1;
        } else if (e.which === 39) {
          dir = index + 1;
        } else if (e.which === 40) {
          dir = 'down';
        } else {
          dir = null;
        }

        if (dir !== null) {
          if (dir === 'down') {
            this.tabsPanels[i].focus();
          } else if (this.tabsBtns[dir]) {
            this.switchTabs(this.tabsBtns[dir], e.currentTarget);
          }
        }
      });
    });
  }

  switchTabs(newTab, oldTab = this.tabs.querySelector('[aria-selected]')) {
    newTab.focus();
    newTab.removeAttribute('tabindex');
    newTab.setAttribute('aria-selected', 'true');

    oldTab.removeAttribute('aria-selected');
    oldTab.setAttribute('tabindex', '-1');

    let index = Array.prototype.indexOf.call(this.tabsBtns, newTab);
    let oldIndex = Array.prototype.indexOf.call(this.tabsBtns, oldTab);

    this.tabsPanels[oldIndex].classList.remove('tabs__panel--active');
    this.tabsPanels[index].classList.add('tabs__panel--active');

    this.tabsBtns[oldIndex].classList.remove('tabs__nav-btn--active');
    this.tabsBtns[index].classList.add('tabs__nav-btn--active');

    this.options.isChanged(this);
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");



})();

/******/ })()
;
//# sourceMappingURL=main.js.map