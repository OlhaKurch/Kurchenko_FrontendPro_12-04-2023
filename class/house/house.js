export class House{
    flats = [];
    constructor (maxLength) {        
        this.maxLength = maxLength;
    }
    findNewFlat(flatNumber) {
        if (this.flats.length >= this.maxLength) {
            return console.log('The house is full')
        } else {
            this.flats.push(flatNumber);
            return console.log(`add new flat in house`)
        }
    }
}


