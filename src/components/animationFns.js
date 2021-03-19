export const pageVariantsR = {
	initial: {
		opacity: 0.5,
		x: '100vw',
	},
	in: {
		opacity: 1,
		x: 0,
	},
	out: {
		opacity: 0,
		x: '100vw',
	},
};
export const pageVariantsL = {
	initial: {
		opacity: 0.5,
		x: '-100vw',
	},
	in: {
		opacity: 1,
		x: 0,
	},
	out: {
		opacity: 0,
		x: '-100vw',
	},
};

export const pageTransition = {
	type: 'tween',
	ease: 'linear',
};

export const pageStyle = {
	position: 'sticky',
};
