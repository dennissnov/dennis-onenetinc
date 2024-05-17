import { selector } from 'gsap';
import Animation from './animation';
import BackgroundAnimation from './animations/parallaxBackground';

document.addEventListener('DOMContentLoaded', function () {
	Animation.create();

	// init parallax

	const parallaxEl = [
		{
			selector: '.line-bg-right',
			speed: 0.1,
			revert: true,
		},
		{
			selector: '.line-bg-left',
			speed: 0.1,
			revert: false,
		},
		{
			selector: '.pattern',
			speed: 0.15,
			revert: true,
		},
		{
			selector: '[data-parallax]',
			speed: 0.05,
			revert: false,
		},
	
	];

	parallaxEl.forEach((el) => {
		BackgroundAnimation.parallaxMouseBackground({
			area: '.banner',
			selector: el.selector,
			speed: el.speed,
			revert: el.revert,
		});
	});

	BackgroundAnimation.parallaxOnScroll({
		selector:'.pattern',
		trigger: '.banner',
	});
});
