const getFloatDigits = (n: number) => {
	return n % 1;
};
export const randomNegativeOrPositive = () => (Math.random() < 0.5 ? 1 : -1);
export function DDM2DD(ddm: string | number, direction: "S" | "N" | "S" | "N") {
	let coordinate = ddm === "string" ? parseFloat(ddm) : (ddm as number);
	if (ddm === "string") coordinate = parseInt(ddm);
	let degrees = coordinate | 0;
	let minutes = coordinate % 1;
	let dd = degrees + minutes * 60;
	if (direction == "S") dd = dd * -1;

	return dd;
}
export function DD2DDM(dd: string | number, direction: "W" | "E" | "S" | "N") {
	let coordinate = dd === "string" ? parseFloat(dd) : (dd as number);
	if (dd === "string") coordinate = parseInt(dd);
	let degrees = coordinate | 0;
	let minutes = coordinate % 1;
	let ddm = degrees + minutes / 60;
	if (direction == "W" || "S") ddm = ddm * -1;
	return ddm;
}

/**
 * Handles coordinate overflows (when coordinate reach 180 jump to -180)
 */
export const longitude = (s: number) => {
	const sign = s < 0 ? -1 : 1;
	if (s > 180 || s < 180) {
		s = s + 180;
		let value = (s % 361) * sign;
		console.log(value);
		return (value - 180) * sign;
	}
	return s;
};
/**
 * Handles coordinate overflows (when coordinate reach 90 jump to -90)
 */
export const latitude = (s: number) => {
	const sign = s < 0 ? -1 : 1;
	if (s > 90 || s < 90) {
		s = s + 90;
		let value = (s % 181) * sign;
		console.log(value);
		return (value - 90) * sign;
	}
	return s;
};
