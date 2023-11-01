class fare{
    constructor(distance,time){
        this.distance = distance
        this.time = time
        console.log()
        console.log(`Given Kilometer: ${this.distance}km , Waiting Charge: ${this.time}min `)
        console.log("Total Price:",((this.distance))*(time))
        
    } 
}


const pricedetails = new fare(25,5)
console.log(pricedetails);