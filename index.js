class Polygon{
    constructor(sidesArray){
        this.sidesArray = sidesArray
    }

    get countSides(){
        return this.sidesArray.length
    }

    get perimeter(){
        return this.sidesArray.reduce((accum, current) => accum + current, 0)
    }
}

class Triangle extends Polygon{
    get isValid(){
        if (this.countSides != 3){
            return false
        }

        if (this.sidesArray[0] + this.sidesArray[1] < this.sidesArray[2]){
            return false
        }
        else if (this.sidesArray[1] + this.sidesArray[2] < this.sidesArray[0]){
            return false
        }
        else if (this.sidesArray[0] + this.sidesArray[2] < this.sidesArray[1]){
            return false
        }
        else return true
    }
}

class Square extends Polygon{
    get isValid(){
        let flag = true
        if (this.countSides != 4){
            flag = false
        }
        this.sidesArray.forEach(element => {
            if (element != this.sidesArray[0]){
                flag = false
            }
        })

        return flag
    }

    get area(){
        return this.sidesArray[0] * this.sidesArray[1]
    }
}