import $ from 'jquery';
import './vendor/focus-visible.js';
import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
import 'slick-carousel';

Swiper.use([Navigation, Pagination]);


window.jQuery = $;
window.$ = $;
window.Swiper = Swiper;
