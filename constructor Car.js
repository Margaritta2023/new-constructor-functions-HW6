    function Car(model, milesPerGallon) {
        
        this.model = model;
        this.milesPerGallon = milesPerGallon;

        this.tank = 0;
        this.odometr = 0;
    }

    Car.prototype.fill = function (gallons) {
        this.tank += gallons
    }

    Car.prototype.drive = function (distance) {
        let canRideKm = this.tank * this.milesPerGallon;

        if(distance > canRideKm) {
            this.tank = 0;
            this.odometr = this.odometr + Math.ceil(canRideKm);
            return `I ran out of fuel at ${Math.ceil(distance - canRideKm)} miles!`
        }
        else {
            this.odometr += distance;
            this.tank = this.tank - Math.ceil(distance / this.milesPerGallon);
    }
    }

    let car1 = new Car("Aston Martin", 20.7)
    console.log(car1)
    car1.fill(3)
    console.log(car1)
    car1.drive(90)
    console.log(car1)
    car1.fill(3)
    console.log(car1)
    console.log(car1.drive(40));
    console.log(car1)

