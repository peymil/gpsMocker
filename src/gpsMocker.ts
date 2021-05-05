import {
	randomNegativeOrPositive,
	DD2DDM,
	DDM2DD,
	latitude,
	longitude,
} from "./tools";
type coordinate = {
	longitude: number;
	latitude: number;
};
type coordinateType = "DD" | "DDM";
type inputType = "KM" | "DEGREE" | "MINUTE";
export class gpsMocker {
	type: coordinateType = "DD";
	inputType: inputType = "KM";
	constructor(type?: coordinateType, inputType?: inputType) {
		if (type) this.type = type;
		if (inputType) this.inputType = inputType;
	}

	static move = (coordinate: coordinate, minRadius = 5, maxRadius: 15) => {
		const absolute = randomNegativeOrPositive();
		const radius = Math.random() * (maxRadius - minRadius) + minRadius;
		const x = coordinate.x + parseFloat(Math.random().toFixed(2)) * radius;
		const y = coordinate.x + Math.sqrt(radius ** 2 - x ** 2) * absolute;
		return { x, y };
	};
	static movePositive = (
		coordinate: number,
		direction: string,
		min: number,
		max: number
	) => {
		const dir = direction.toUpperCase();
		const distance = Math.random() * (max - min) + min;
		if (["N", "S"].includes(dir)) return longitude(coordinate + distance);
		else if (["W", "E"].includes(direction))
			return latitude(coordinate + distance);
		else throw new Error();
	};
	static moveNegative = (
		coordinate: number,
		direction: string,
		min: number,
		max: number
	) => gpsMocker.movePositive(coordinate, direction, -min, -max);
}
