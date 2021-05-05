import { randomNegativeOrPositive } from "./tools";
type coordinateType = "DD" | "DDM";
type inputType = "KM" | "DEGREE" | "MINUTE";
export function DDM2DD(ddm: string | number, direction: "S" | "N" | "S" | "N") {
	let coordinate = ddm === "string" ? parseFloat(ddm) : (ddm as number);
	if (ddm === "string") coordinate = parseInt(ddm);
	let degrees = coordinate | 0;
	let minutes = coordinate % 1;
	let dd = degrees + minutes * 60;
	if (direction == "S") dd = dd * -1;

	return dd;
}
// const s = (R) => {
// 	const a = Math.random() * 2 * Math.PI;
// 	const r = R * Math.sqrt(Math.random());
// 	const x = r * Math.cos(a);
// 	const y = r * Math.sin(a);
// 	console.log("X:" + x, "Y:" + y, "R:" + R, "A:" + a);
// };
export function DD2DDM(dd: string | number, direction: "W" | "E" | "S" | "N") {
	let coordinate = dd === "string" ? parseFloat(dd) : (dd as number);
	if (dd === "string") coordinate = parseInt(dd);
	let degrees = coordinate | 0;
	let minutes = coordinate % 1;
	let ddm = degrees + minutes / 60;
	if (direction == "W" || "S") ddm = ddm * -1;
	return ddm;
}
type coordinate = {
	x: number;
	y: number;
};

const longitude = (s: number) => {
	const sign = s < 0 ? -1 : 1;
	if (s > 180 || s < 180) {
		s = s + 180;
		let value = (s % 361) * sign;
		console.log(value);
		return (value - 180) * sign;
	}
	return s;
};
const latitude = (s: number) => {
	const sign = s < 0 ? -1 : 1;
	if (s > 90 || s < 90) {
		s = s + 90;
		let value = (s % 181) * sign;
		console.log(value);
		return (value - 90) * sign;
	}
	return s;
};

export class gpsMocker {
	type: coordinateType = "DD";
	inputType: inputType = "KM";
	coordinate: coordinate;
	constructor(
		coordinate: coordinate,
		type?: coordinateType,
		inputType?: inputType
	) {
		this.coordinate = coordinate;
		if (type) this.type = type;
		if (inputType) this.inputType = inputType;
	}
	move(minRadius: number, maxRadius: number) {
		const absolute = randomNegativeOrPositive();
		const radius =
			parseFloat(Math.random().toFixed(2)) * (maxRadius - minRadius) +
			minRadius;
		const x = parseFloat(Math.random().toFixed(2)) * radius;
		const y = Math.sqrt(radius ** 2 - x ** 2) * absolute;
		this.coordinate.x += x;
		this.coordinate.y += y;
	}
	moveLongitudePositive(
		coordinate: number,
		direction: string,
		min: number,
		max: number
	) {
		const dir = direction.toUpperCase();
		if (["N", "S"].includes(dir)) const sign = dir + "N" ? 1 : -1;
		else if (["N", "n", "S", "s"].includes(direction)) console.log("asdf");
		else throw new Error();
	}
	moveLongitudeNegative() {}
}
const s = new gpsMocker({ x: 18.134, y: 15.564 });
s.move(5, 25);
console.log(s.coordinate.x, s.coordinate.y);
