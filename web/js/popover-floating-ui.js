import { computePosition } from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.13/+esm';

import { autoUpdate } from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.13/+esm';

const popover = document.querySelector('[popover]');

popover.addEventListener('toggle', positionPopover);

function positionPopover(event) {
	const invoker = document.querySelector(`[popovertarget="${popover.getAttribute('id')}"`);
	if (event.newState === 'open') {
		computePosition(invoker, popover, { placement: 'bottom-start' }).then(({ x, y }) => {
			Object.assign(popover.style, {
				left: `${x}px`,
				top: `${y}px`,
			});
		});
	}
}



// I don't understand any of this:
// https://floating-ui.com/docs/autoUpdate
// whileElementsMounted: autoUpdate,


