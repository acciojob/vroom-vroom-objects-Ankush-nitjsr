// Complete the js code
function Car(make, model) {
		this._make = make;
		this._model = model;
}
Object.prototype.getMakeModel = function() {
	return `${this._make} and ${this._model}`;
}

function SportsCar(make, model, topSpeed) {
	Car.call(this, make, model);
	this._topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);

SportsCar.prototype.getTopSpeed = function() {
	return this.topSpeed;
}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
