export function getCSSVar(cssVar: string, element?: HTMLElement) {
	if (typeof window === 'undefined') return;
	const value = getComputedStyle(
		element ?? document.documentElement
	).getPropertyValue(cssVar);
	if (!value) {
		throw new Error(`Variable ${value} isn't defined`);
	}
	return value;
}

export function getCSSVarNumber(cssVar: string, element?: HTMLElement) {
	if (typeof window === 'undefined') return;
	return parseInt(getCSSVar(cssVar, element)!);
}

export function setCSSVar(
	cssVar: string,
	value: string,
	element?: HTMLElement
) {
	(element ?? document.documentElement).style.setProperty(cssVar, value);
}
