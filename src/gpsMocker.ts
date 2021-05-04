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
export class gpsMocker {
	type: coordinateType = "DD";
	inputType: inputType = "KM";
	coordinate: coordinate;
	constructor(
		coordinate: number,
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
		const y = Math.sqrt(radius * 2 - x ** 2) * absolute;
		console.log(x, y, radius);
	}
	moveLongitudePositive(coordinate: number , direction :string,min:number,max:number) {
		const dir = direction.toUpperCase()
		if(["N","S"].includes(dir))
		{
			const sign = dir = "N" ? 1 : -1
			const 
		}
		if else(["N","n","S","s"].includes(direction))
		else throw new Error()
	}
	moveLongitudeNegative() {

	}
}
console.log(new gpsMocker().move(5, 25));
