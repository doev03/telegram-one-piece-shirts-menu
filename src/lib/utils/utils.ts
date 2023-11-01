import { cubicOut } from "svelte/easing";

export const primaryFly = (node : Element, { delay = 0, duration = 400, easing = cubicOut, x = 0, y = 0, opacity = 0 } = {}) => {
  const style = getComputedStyle(node);
	const target_opacity = +style.opacity;
	const transform = style.transform === 'none' ? '' : style.transform;
	const od = target_opacity * (1 - opacity);
	const [xValue, xUnit] = split_css_unit(x);
	const [yValue, yUnit] = split_css_unit(y);
	return {
		delay,
		duration,
		easing,
		css: (t : number, u: number) => `
			transform: ${transform} translate(${(1 - t) * (xValue as number)}${xUnit}, ${(1 - t) * (yValue as number)}${yUnit});
			opacity: ${target_opacity - od * u}`
	};
};

function split_css_unit(value : number | string) {
	const split = typeof value === 'string' && value.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
	return split ? [parseFloat(split[1]), split[2] || 'px'] : [/** @type {number} */ (value), 'px'];
}