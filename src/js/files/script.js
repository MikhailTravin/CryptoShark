//Скролл портфолио
function scroll() {

	let bodyScrolls = document.querySelectorAll('.scroll-body');

	if (bodyScrolls) {

		let speed = 2; // Скорость скролла.
		let left = 0;
		let top = 0;
		let drag = false;
		let coorX = 0;
		let coorY = 0;

		bodyScrolls.forEach(bodyScroll => {
			bodyScroll.addEventListener('mousedown', function (e) {
				drag = true;
				coorX = e.pageX;
				coorY = e.pageY;
			});
			document.addEventListener('mouseup', function () {
				drag = false;
				left = bodyScroll.scrollLeft;
				top = bodyScroll.scrollTop;
			});
			bodyScroll.addEventListener('mousemove', function (e) {
				if (drag) {
					this.scrollLeft = left - (e.pageX - coorX) * speed;
					this.scrollTop = top - (e.pageY - coorY) * speed;
				}
			});
		});

	}

};

scroll()

//========================================================================================================================================================

//Видео
const myVideo = document.getElementById("video");
const playPause = document.getElementById("playpause");

if (myVideo) {
	myVideo.addEventListener('click', function () {
		if (myVideo.paused) {
			myVideo.play();
			playPause.classList.add('_active')
		} else {
			myVideo.pause();
			playPause.classList.remove('_active')
		}
	});
}

//========================================================================================================================================================


const arc = document.querySelector('.arc');
// 0.5 - значение дуги
if (arc) {
	arc.style.strokeDasharray = 25 * Math.PI * 0.5 + ' 100';
}

//========================================================================================================================================================

//TIMER//

function timer(id, deadLine) {
	const timeCount = document.querySelector('.time-count');

	if (timeCount) {
		function getTimeRemaining(endTime) {
			let DAYS, HOURS, MINUTES;

			const t = Date.parse(endTime) - Date.parse(new Date());

			if (t <= 0) {
				DAYS = 0;
				HOURS = 0;
				MINUTES = 0;
			} else {
				DAYS = getZero(Math.floor(t / 1000 / 60 / 60 / 24));
				HOURS = getZero(Math.floor(t / 1000 / 60 / 60) % 24);
				MINUTES = getZero(Math.floor(t / 1000 / 60) % 60);
			}

			return {
				t,
				DAYS,
				HOURS,
				MINUTES,
			};
		}

		function getZero(num) {
			if (num >= 0 && num <= 10) {
				return `0${num}`;
			}

			return num;
		}

		function setClock(selector, endTime) {
			const days = document.querySelectorAll('.time-count__days .time-count__val');
			const hours = document.querySelectorAll('.time-count__hours .time-count__val');
			const minutes = document.querySelectorAll('.time-count__minutes .time-count__val');

			updateClock();

			function updateClock() {

				const timeInterval = setInterval(updateClock, 1000);
				const t = getTimeRemaining(endTime);

				days.forEach(day => {
					day.innerHTML = t.DAYS.toString().padStart(2, '0');
				});
				hours.forEach(hour => {
					hour.innerHTML = t.HOURS.toString().padStart(2, '0');
				});
				minutes.forEach(minute => {
					minute.innerHTML = t.MINUTES.toString().padStart(2, '0');
				});

				if (t.t <= 0) {
					clearInterval(timeInterval);
				}
			}
		}
		setClock(id, deadLine);

	}
}

//Вызов функции.
timer('.timer', '2023-06-30');
