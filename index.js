// Your code here
class Polygon {
    constructor (array) {
        this.array = array
    }

    get countSides() {
        return this.array.length
    }

    get perimeter() {
        return this.array.reduce((acc, val) => acc + val)
    }
}

class Triangle extends Polygon {
    get isValid() {
        if((this.array[0] + this.array[1]) < this.array[2]) { 
            return false
        } if((this.array[0] + this.array[2]) < this.array[1]) {
            return false
        } if((this.array[1] + this.array[2]) < this.array[0]) {
            return false
        } else {
            return true
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if((this.perimeter / 4) === this.array[0]) {
            return true
        } else {
            return false
        }
    }

    get area() {
        return this.array[0] * this.array[0] 
    }
}
