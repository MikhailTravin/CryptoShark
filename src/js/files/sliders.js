/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Pagination } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

if (document.querySelector('.crypto-news__slider')) {
	// Создаем слайдер
	new Swiper('.crypto-news__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 4,
		spaceBetween: 0,
		//autoHeight: true,
		speed: 800,
		preloadImages: true,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//lazy: true,

		// Пагинация
		pagination: {
			el: '.crypto-news__dotts',
			clickable: true,
		},

		// Брейкпоинты
		breakpoints: {
			0: {
				slidesPerView: 1,
			},
			479.98: {
				slidesPerView: 1.5,
			},
			600: {
				slidesPerView: 1.8,
			},
			768: {
				slidesPerView: 2.3,
			},
			900: {
				slidesPerView: 2.8,
			},
			992: {
				slidesPerView: 3.2,
			},
			1200: {
				slidesPerView: 3.8,
			},
			1392: {
				slidesPerView: 4,
			},
		},
		// События
		on: {

		}
	});
}

if (document.querySelector('.brands-detailed-project__slider')) {
	// Создаем слайдер
	new Swiper('.brands-detailed-project__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: "auto",
		spaceBetween: 24,

		//autoHeight: true,
		speed: 800,
		preloadImages: true,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//lazy: true,

		// Пагинация
		pagination: {
			el: '.brands-detailed-project__dotts',
			clickable: true,
		},
		breakpoints: {
			0: {
				centeredSlides: true,
			},
			480: {
				centeredSlides: false,
			},
		},
	});
}

if (document.querySelector('.teams-detailed-project__slider')) {
	// Создаем слайдер
	new Swiper('.teams-detailed-project__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 35,

		//autoHeight: true,
		speed: 800,
		preloadImages: true,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//lazy: true,

		// Пагинация
		pagination: {
			el: '.teams-detailed-project__dotts',
			clickable: true,
		},
		breakpoints: {
			0: {
				centeredSlides: true,
				slidesPerView: "auto",
				spaceBetween: 12,
			},
			767: {
				spaceBetween: 35,
				centeredSlides: true,
				slidesPerView: "auto",
			},
			992: {
				slidesPerView: "auto",
				centeredSlides: false,
			},
			1392: {
				slidesPerView: 3,
				centeredSlides: false,
			},
		},
	});
}

if (document.querySelector('.participate-detailed-project__slider')) {
	// Создаем слайдер
	new Swiper('.participate-detailed-project__slider', {
		// Подключаем модули слайдера
		// для конкретного случая
		modules: [Pagination],
		observer: true,
		observeParents: true,
		slidesPerView: "auto",
		spaceBetween: 0,

		//autoHeight: true,
		speed: 800,
		preloadImages: true,
		//touchRatio: 0,
		//simulateTouch: false,
		//loop: true,
		//lazy: true,

		// Пагинация
		pagination: {
			el: '.participate-detailed-project__dotts',
			clickable: true,
		},
		breakpoints: {
			0: {
				centeredSlides: true,
				slidesPerView: "auto",
			},
			767: {
				centeredSlides: false,
				slidesPerView: "auto",
			},
			992: {
				slidesPerView: "auto",
				centeredSlides: false,
			},
			1392: {
				slidesPerView: "auto",
				centeredSlides: false,
			},
		},
	});
}