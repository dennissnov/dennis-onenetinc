// NPM packages if they support it…
import gsap from 'gsap';
import ScrollTrigger from './gsap/ScrollTrigger.min';
import SplitText from './gsap/SplitText.min';
import DrawSVG from './gsap/DrawSVGPlugin.min';
import Lenis from './lenis/lenis.min.js';

gsap.registerPlugin(SplitText, ScrollTrigger, DrawSVG);

class Animation {
	static instance = null;

	static create() {
		if (this.instance === null) {
			this.instance = new Animation();
		}

		return this.instance;
	}

	constructor() {
		this.initRegisterPlugins();
		this.init();
	}

	initRegisterPlugins() {
		gsap.registerEffect({
			name: 'counter',
			extendTimeline: true,
			defaults: {
				end: 0,
				duration: 0.5,
				ease: 'power1',
				increment: 1,
			},
			effect: (targets, config) => {
				let tl = gsap.timeline();
				let num = targets[0].innerText.replace(/\,/g, '');
				targets[0].innerText = num;

				tl.to(
					targets,
					{
						duration: config.duration,
						innerText: config.end,
						//snap:{innerText:config.increment},
						modifiers: {
							innerText: function (innerText) {
								return gsap.utils
									.snap(config.increment, innerText)
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
							},
						},
						ease: config.ease,
					},
					0
				);

				return tl;
			},
		});
	}

	init() {
		this.initLenis();
		this.initLogoAnimation();
		this.initSplitText();
		this.initResizeSplitText();
		this.initRevealAnimation();
		this.initDrawSVGLine1();
		// this.initDrawSVGLine2();
		this.legoAnimation();
	}

	initLenis() {
		const lenis = new Lenis({
			duration: 1.2,
			easing: function (t) {
				return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
			},
			direction: 'vertical',
			gestureDirection: 'vertical',
			smooth: true,
			smoothTouch: false,
			touchMultiplier: 2,
		});

		lenis.on('scroll', (e) => {
			// console.log(e);
		});

		lenis.on('scroll', ScrollTrigger.update);

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000);
		});

		gsap.ticker.lagSmoothing(0);
	}

	initLogoAnimation() {
		const tl = gsap.timeline();
		gsap.fromTo(
			'.logo path',
			{ opacity: 0, y: 0 },
			{
				opacity: 1,
				y: 0,
				duration: 0.5,
				ease: 'power1.out',
				// ease: 'elastic.out(2,0.8)',
				stagger: 0.05,
			}
		);
	}

	initSplitText() {
		this.splitTextEls = gsap.utils.toArray('[data-split-text-animate]');
		this.splitTextArray = [];
		this.splitTextEls.forEach((el) => {
			const splitText = new SplitText(el, {
				type: 'words',
				reduceWhiteSpace: true,
			});
			const lines = splitText.words;
			this.splitTextArray.push(splitText);
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: 'top 90%',
					end: 'bottom 10%',
					markers: false,
					toggleActions: 'play none none reverse',
				},
			});
			tl.from(lines, {
				opacity: 0,
				y: 40,
				duration: 0.8,
				rotateX: 90,
				skewX: 10,
				ease: 'power1.out',
				stagger: 0.02,
			});

			// check if we have siblings with data-split-text-animate
			const siblings = el.parentNode.querySelectorAll(
				`[data-split-text-animate-next]`
			);
			if (siblings.length > 0) {
				tl.from(
					siblings,
					{
						y: 40,
						opacity: 0,
						duration: 0.8,
						stagger: 0.5,

						ease: 'power1.out',
					},
					lines.length * 0.02
				);
			}
		});
	}

	initResizeSplitText() {
		let initTime;
		let delta = 200;
		let resizing = false;
		let prevWidth = window.innerWidth;
		window.addEventListener('resize', (e) => {
			if (window.innerWidth !== prevWidth) {
				prevWidth = window.innerWidth;
				initTime = new Date();
				if (resizing === false) {
					resizing = true;
					this.splitTextArray.forEach((st) => {
						st.revert(); // revert all split text
					});
					setTimeout(this.checkResizeFinish, delta);
				}
			}
		});

		this.checkResizeFinish = () => {
			if (new Date() - initTime < delta) {
				setTimeout(this.checkResizeFinish, delta);
			} else {
				resizing = false;
				this.initSplitText();
			}
		};
	}

	initRevealAnimation() {
		const revealEls = gsap.utils.toArray('[data-animate-reveal]');
		revealEls.forEach((el) => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: 'top 90%',
					end: 'bottom 10%',
					markers: false,
				},
			});
			tl.from(
				el,
				{
					opacity: 0,
					y: 40,
					duration: 0.8,
					ease: 'power1.out',
				},
				0
			);
		});
	}

	initDrawSVGLine1() {
		const target = document.querySelector('.line-bg-left svg');
		const allPaths = target.querySelectorAll('path');
		const allCircle = target.querySelectorAll('circle');

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.banner',
				start: 'top top',
				end: '20% top',
				markers: false,
				scrub: 1,
			},
		});

		tl.fromTo(
			[allCircle, target.querySelector('#triangle')],
			{
				opacity: 0,
				scale: 0,
				transformOrigin: 'center',
			},
			{
				opacity: 1,
				scale: 1,
				duration: 1,
				stagger: 0.1,
				ease: 'power1.out',
			}
		).fromTo(
			allPaths,
			{
				drawSVG: '0%',
			},
			{
				drawSVG: '100%',
				duration: 1,
				stagger: 0.1,
				ease: 'power1.out',
			}
		);
	}

	initDrawSVGLine2() {
		const target = document.querySelector('.line-bg-right svg');
		const allPaths = target.querySelectorAll('path');
		const allCircle = target.querySelectorAll('circle');
		const allRect = target.querySelectorAll('rect');

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '.banner',
				start: 'top top',
				end: '20% top',
				markers: true,
				scrub: 1,
			},
		});

		tl.fromTo(
			[allCircle, allRect],
			{
				opacity: 0,
				scale: 0,
				transformOrigin: 'center',
			},
			{
				opacity: 1,
				scale: 1,
				duration: 1,
				stagger: 0.1,
				ease: 'power1.out',
			}
		).fromTo(
			allPaths,
			{
				drawSVG: '0%',
			},
			{
				drawSVG: '100%',
				duration: 1,
				stagger: 0.1,
				ease: 'power1.out',
			}
		);
	}

	legoAnimation() {
		const lego = document.querySelector('.lego');
		const l = lego.querySelector('.l');
		const bc = lego.querySelector('.bc');
		const br = lego.querySelector('.br');
		const tc = lego.querySelector('.tc');
		const tr = lego.querySelector('.tr');
		const cr = lego.querySelector('.cr');
		const tl = gsap.timeline();

		ScrollTrigger.create({
			trigger: lego,
			start: 'top 70%',
			end: 'bottom 70%',
			markers: false,
			animation: tl,
			toggleActions: 'play none none reverse',
		});

		gsap.fromTo(cr.querySelector('path:last-of-type'), {
			scale: 0.8,
			transformOrigin: 'left bottom',
		}, {
			scale: 1,
			duration: 1,
			ease: 'power1.out',
			yoyo: true,
			repeat: -1
		});
		//
		console.log(
			l.querySelector('[data-counter]').getAttribute('data-counter')
		);
		gsap.set([bc, tr], {
			opacity: 0,
		});
		tl.fromTo(
			l,
			{
				clipPath: 'inset(0% 0% 100% 0%)',
				y: -50,
			},
			{
				clipPath: 'inset(0% 0% 0% 0%)',
				duration: 0.5,
				ease: 'power1.out',
				y: 0,
			}
		)
			.add('counter-l', '-=0.5')
			.counter(
				l.querySelector('[data-counter]'),
				{
					end: l
						.querySelector('[data-counter]')
						.getAttribute('data-counter'),
					ease: 'linear',
					duration: 0.5,
				},
				'counter-l'
			)
			.from(
				l.querySelector('.counter'),
				{ color: 'white', duration: 1 },
				'counter-l'
			)
			.set(
				bc,
				{
					opacity: 1,
				},
				'-=0.5'
			)
			.fromTo(
				bc,
				{
					clipPath: 'inset(-10% 100% 0% -10%)',
				},
				{
					clipPath: 'inset(-10% 0% 0% -10%)',
					duration: 0.5,
					ease: 'power1.out',
				},
				'-=0.5'
			)
			.fromTo(
				br,
				{
					clipPath: 'inset(-10% 100% 0% -10%)',
				},
				{
					clipPath: 'inset(-10% 0% 0% -10%)',
					duration: 0.5,
					ease: 'power1.out',
				}
			)
			.add('counter-br', '-=0.5')
			.counter(
				br.querySelector('[data-counter]'),
				{
					end: br
						.querySelector('[data-counter]')
						.getAttribute('data-counter'),
					ease: 'linear',
					duration: 0.5,
				},
				'counter-br'
			)
			.from(
				br.querySelector('.counter'),
				{ color: '#2B3559', duration: 1 },
				'counter-br'
			)
			.fromTo(
				cr,
				{
					clipPath: 'inset(100% 0% 0% 0%)',
				},
				{
					clipPath: 'inset(0% 0% 0% 0%)',
					duration: 0.5,
					ease: 'power1.out',
				},
				'-=0.5'
			)
			.fromTo(
				tc,
				{
					clipPath: 'inset(0% 0% 100% 0%)',
					y: -50,
				},
				{
					clipPath: 'inset(0% 0% 0% 0%)',
					duration: 0.5,
					ease: 'elastic.out(2,0.8)',
					y: 0,
				}
			)
			.add('counter-tc', '-=0.4')
			.counter(
				tc.querySelector('[data-counter]'),
				{
					end: tc
						.querySelector('[data-counter]')
						.getAttribute('data-counter'),
					ease: 'linear',
					duration: 0.5,
				},
				'counter-tc'
			)
			.from(
				tc.querySelector('.counter'),
				{ color: '#2B3559', duration: 1 },
				'counter-tc'
			)
			.set(
				tr,
				{
					opacity: 1,
				},
				'-=0.5'
			)
			.fromTo(
				tr,
				{
					xPercent: -100,
				},
				{
					xPercent: 0,
					duration: 1,
					ease: 'elastic.out(1,0.8)',
				},
				'-=0.5'
			)
			.fromTo(
				tr.querySelector('#star'),
				{
					opacity: 0,
					scale: 0,
					transformOrigin: 'center',
				},
				{
					opacity: 1,
					scale: 1,
					duration: 0.5,
					ease: 'expo.out',
				},
				'-=0.5'
			)
			.fromTo(
				tr.querySelector('#dash'),
				{
					scale: 0,
					transformOrigin: 'center top',
				},
				{
					scale: 1,
					duration: 0.5,
					ease: 'expo.out',
				},
			)
			.fromTo(
				tr.querySelector('#check'),
				{
					opacity: 0,
					scale: 0,
					transformOrigin: 'center',
				},
				{
					opacity: 1,
					scale: 1,
					duration: 0.5,
					ease: 'expo.out',
				},
			);
	}
}

export default Animation;
