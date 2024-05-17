import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

class BackgroundAnimation {
	static get defaultOptions() {
		return {
			selector: null,
			area: null,
			delay: 0,
			speed: 0.02,
			revert: false,
		};
	}

	static parallaxMouseBackground(options) {
		const config = Object.assign(
			{},
			BackgroundAnimation.defaultOptions,
			options
		);

		document
			.querySelector(config.area)
			.addEventListener('mousemove', (event) => {
				BackgroundAnimation.mouseParallax(config, event);
			});
	}

	static mouseParallax(config, event) {
		const wx = window.innerWidth / 2;
		const wy = window.innerHeight / 2;
		const bannerArea = document.querySelector(config.area);

		const x = event.pageX - bannerArea.offsetLeft;
		const y = event.pageY - bannerArea.offsetTop;

		const newX = (x - wx) / wx;
		const newY = (y - wy) / wy;

		document.querySelectorAll(config.selector).forEach((element) => {
			let speed = config.speed;
			if (config.revert) speed *= -1;
			gsap.to(element, {
				duration: 1,
				x: newX * speed * 100,
				y: newY * speed * 100,
			});
		});
	}

	static bgMovingAnimation(options) {
		const config = Object.assign(
			{},
			BackgroundAnimation.defaultOptions,
			options
		);
		const elements = document.querySelectorAll(config.selector);
		elements.forEach((element) => {
			gsap.timeline({ repeat: -1, yoyo: true, delay: config.delay })
				.to(element, {
					y: 200,
					x: 200,
					rotate: '30deg',
					duration: config.speed,
					ease: 'linear',
				})
				.to(element, {
					y: 0,
					x: 0,
					rotate: '0deg',
					duration: config.speed,
					ease: 'linear',
				});
		});
	}

	static bgMovingAnimationSVG(options) {
		const config = Object.assign(
			{},
			BackgroundAnimation.defaultOptions,
			options
		);
		const elements = document.querySelectorAll(config.selector);
		elements.forEach((element) => {
			const svgElement = element.querySelector('.svg-bg-animation');
			gsap.timeline({ repeat: -1, yoyo: true, delay: config.delay })
				.to(svgElement, {
					force3d: true,
					transformOrigin: '50% 50%',
					y: 200,
					x: 200,
					rotate: '20deg',
					duration: config.speed,
				})
				.to(svgElement, {
					force3d: true,
					transformOrigin: '50% 50%',
					y: 0,
					x: 0,
					rotate: '0deg',
					duration: config.speed,
				});
		});
	}

	static parallaxOnScroll(options) {
		const config = Object.assign(
			{},
			BackgroundAnimation.defaultOptions,
			options
		);
		const elements = document.querySelector(config.selector);
		const tl = gsap.timeline({ paused: true });

		tl.to(elements, {
			yPercent:-10,
            scrollTrigger: {
                trigger: config.trigger,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            },
		});
	
	}

	static destroy() {
		gsap.killTweensOf('*');
	}
}

export default BackgroundAnimation;
