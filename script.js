/**
 * Reveal-on-scroll
 * ----------------
 * This script finds the main content nodes (project cards, tech items, sections, hero) and
 * adds a base 'reveal' class so CSS handles the showing animation. When an element
 * enters the viewport the script adds the 'revealed' class which triggers CSS transitions.
 *
 * Tweak points:
 * - data-delay (ms) on elements controls stagger. If absent, small defaults are applied.
 * - The `selectors` array can be extended to include other elements to animate.
 * - honors prefers-reduced-motion and will skip animations when set.
 */
(function () {
	const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (prefersReduced) return; // don't animate for users who prefer reduced motion

	const observerOptions = {
		root: null,
		rootMargin: '0px 0px -10% 0px',
		threshold: 0.12,
	};

	const io = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			const el = entry.target;
			if (entry.isIntersecting) {
				const delay = parseInt(el.getAttribute('data-delay') || '0', 10);
				// store CSS variable so we can use a CSS transition-delay via data attribute
				el.style.setProperty('--delay', delay + 'ms');
				// use setTimeout to trigger staggered reveal for better sequencing
				setTimeout(() => el.classList.add('revealed'), delay);
				io.unobserve(el);
			}
		});
	}, observerOptions);

	// collect elements to reveal - common selectors in the page
	const selectors = [
		'.tech-item',
		'.project-card',
		'#about',
		'#tech-stack',
		'#projects',
		'#upcoming',
		'#contact',
		'#hero h1',
		'#hero .subtitle',
		'footer',
	];

	const elements = new Set();
	selectors.forEach(sel => document.querySelectorAll(sel).forEach(el => elements.add(el)));

	// Ensure elements have the base 'reveal' class unless explicitly excluded
	elements.forEach((el, idx) => {
		if (!el.classList.contains('reveal') && !el.hasAttribute('data-no-reveal')) {
			el.classList.add('reveal');
		}
		// if element doesn't have an explicit delay, set a small stagger for lists like project cards
		if (!el.hasAttribute('data-delay')) {
			// add slightly increasing delays for children of grids
			if (el.closest('.project-grid')) el.setAttribute('data-delay', String((Array.from(el.parentNode.children).indexOf(el) % 6) * 80));
			if (el.closest('.tech-grid')) el.setAttribute('data-delay', String((Array.from(el.parentNode.children).indexOf(el) % 6) * 60));
			if (el.matches('#hero h1')) el.setAttribute('data-delay', '80');
			if (el.matches('#hero .subtitle')) el.setAttribute('data-delay', '200');
		}
		observerOptions && io.observe(el);
	});

})();
