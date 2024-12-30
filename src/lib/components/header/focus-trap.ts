type FocusTrapOptions = {
	returnFocus?: boolean;
};

/**
 * Svelte Action to trap focus heavily inspired by [SkeletonUI](https://github.com/skeletonlabs/skeleton/blob/master/packages/skeleton/src/lib/actions/FocusTrap/focusTrap.ts)
 * @param node HTMLElement to trap focus
 * @param options If returnFocus is true, focus will be returned to the element that had focus when the trap was activated.
 */
export function focusTrap(node: HTMLElement, options: FocusTrapOptions = {}) {
	const focusableElements =
		'a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';

	let firstFocusableElement: HTMLElement | null;
	let lastFocusableElement: HTMLElement | null;

	const onFirstFocusableKeyDown = (e: KeyboardEvent) => {
		if (e.shiftKey && e.key === 'Tab') {
			e.preventDefault();
			lastFocusableElement?.focus();
		}
	};

	const onLastFocusableKeyDown = (e: KeyboardEvent) => {
		if (!e.shiftKey && e.key === 'Tab') {
			e.preventDefault();
			firstFocusableElement?.focus();
		}
	};

	const trap = (fromObserver: boolean) => {
		if (options.returnFocus) return;

		const focusableElementsList = Array.from(node.querySelectorAll<HTMLElement>(focusableElements));

		if (!focusableElementsList.length) return;

		firstFocusableElement = focusableElementsList[0];
		lastFocusableElement = focusableElementsList[focusableElementsList.length - 1];

		if (!fromObserver) {
			firstFocusableElement?.focus();
		}

		firstFocusableElement?.addEventListener('keydown', onFirstFocusableKeyDown);
		lastFocusableElement?.addEventListener('keydown', onLastFocusableKeyDown);
	};

	// Start trapping focus
	trap(false);

	const unTrap = () => {
		firstFocusableElement?.removeEventListener('keydown', onFirstFocusableKeyDown);
		lastFocusableElement?.removeEventListener('keydown', onLastFocusableKeyDown);
	};

	// Reapply trap if the DOM changes
	const onObservationChange = (mutationRecords: MutationRecord[], observer: MutationObserver) => {
		if (mutationRecords.length) {
			unTrap();
			trap(true);
		}

		return observer;
	};

	const observer = new MutationObserver(onObservationChange);

	observer.observe(node, {
		childList: true,
		subtree: true
	});

	return {
		update(newArgs: FocusTrapOptions = {}) {
			options.returnFocus = newArgs.returnFocus;
			if (newArgs.returnFocus) {
				unTrap();
			} else {
				trap(false);
			}
		},
		destroy() {
			unTrap();
			observer.disconnect();
		}
	};
}
