const fill = document.querySelector('.progress_bar_fill');
const arrow_next = document.querySelector('.right_arrow');
const arrow_prev = document.querySelector('.left_arrow');
const ball = document.querySelectorAll('.ball');
const banners_img = document.querySelectorAll('.banners_img');
const titles = document.querySelectorAll('.titles');
const desc = document.querySelectorAll('.desc');
const year = document.querySelectorAll('.year');
const logo = document.querySelectorAll('.logo');
const loader = document.querySelector('.loader');

let step = 0;
let progress_amount = 100 / 4;

window.addEventListener('load', (_) => {
	loader.style.display = 'none';
});

titles.forEach((element) => {
	element.style.display = 'none';
});
titles[step].style.display = 'block';

desc.forEach((element) => {
	element.style.display = 'none';
});
desc[step].style.display = 'block';

logo.forEach((element) => {
	element.style.display = 'none';
});
logo[step].style.display = 'block';

year.forEach((element) => {
	element.style.display = 'none';
});
year[step].style.display = 'block';

arrow_next.addEventListener('click', (_) => {
	if (step === ball.length - 1) {
		return;
	}
	step++;
	fill.style.width = `${progress_amount * step}` + '%';
	ball[step - 1].style.backgroundColor = '#fff38a';

	banners_img.forEach((e) => {
		e.style.transform = `translateX(${-step * 100 + '%'})`;
	});

	refreshTitle('next');
});

arrow_prev.addEventListener('click', (_) => {
	if (step === 0) {
		return;
	}
	step--;
	fill.style.width = `${progress_amount * step}` + '%';
	ball[step].style.backgroundColor = 'gray';

	banners_img.forEach((e) => {
		e.style.transform = `translateX(${-step * 100 + '%'})`;
	});

	refreshTitle('prev');
});

function refreshTitle(choix) {
	year.forEach((year) => {
		for (let i = 0; i < 4; i++) {
			year.children[i].style.animation = 'none';
		}
	});
	resetAnimations();
	if (choix === 'prev') {
		titles[step + 1].style.animation = 'fade-out 0.4s ease';
		desc[step + 1].style.animation = 'fade-out 0.4s ease';
		logo[step + 1].style.animation = 'fade-out 0.4s ease';

		if (step === 0) {
			year[step + 1].children[3].style.animation = 'fade-out 0.4s ease';
			year[step + 1].children[2].style.animation = 'fade-out 0.4s ease';
		}
		if (step === 1) {
			year[step + 1].children[3].style.animation = 'fade-out 0.4s ease';
		}
		if (step === 2) {
			year[step + 1].children[2].style.animation = 'fade-out 0.4s ease';
			year[step + 1].children[3].style.animation = 'fade-out 0.4s ease';
		}
		if (step === 3) {
			year[step + 1].style.animation = 'fade-out 0.4s ease';
		}

		setTimeout(() => {
			titles.forEach((element) => {
				element.style.display = 'none';
			});
			desc.forEach((element) => {
				element.style.display = 'none';
			});
			logo.forEach((element) => {
				element.style.display = 'none';
			});
			year.forEach((element) => {
				element.style.display = 'none';
			});
			titles[step].style.display = 'block';
			desc[step].style.display = 'block';
			logo[step].style.display = 'block';
			year[step].style.display = 'block';
		}, 380);
	} else if (choix === 'next') {
		titles[step - 1].style.animation = 'fade-in 0.4s ease';
		desc[step - 1].style.animation = 'fade-in 0.4s ease';
		logo[step - 1].style.animation = 'fade-in 0.4s ease';

		if (step === 1) {
			year[step - 1].children[3].style.animation = 'fade-out 0.4s ease';
			year[step - 1].children[2].style.animation = 'fade-out 0.4s ease';
		}

		if (step === 2) year[1].children[3].style.animation = 'fade-out 0.4s ease';

		if (step === 3) {
			year[step - 1].children[3].style.animation = 'fade-out 0.4s ease';
			year[step - 1].children[2].style.animation = 'fade-out 0.4s ease';
		}

		if (step === 4) {
			year[step - 1].style.animation = 'fade-out 0.4s ease';
		}

		setTimeout(() => {
			titles.forEach((element) => {
				element.style.display = 'none';
			});
			titles[step].style.display = 'block';
			desc.forEach((element) => {
				element.style.display = 'none';
			});
			desc[step].style.display = 'block';
			logo.forEach((element) => {
				element.style.display = 'none';
			});
			logo[step].style.display = 'block';
			year.forEach((element) => {
				element.style.display = 'none';
			});
			year[step].style.display = 'block';
		}, 380);
	}
}

function resetAnimations() {
	titles.forEach((element) => {
		element.style.animation = 'none';
	});
	desc.forEach((element) => {
		element.style.animation = 'none';
	});
	logo.forEach((element) => {
		element.style.animation = 'none';
	});
	year.forEach((element) => {
		element.style.animation = 'none';
	});
}
