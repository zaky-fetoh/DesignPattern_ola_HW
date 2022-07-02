const guitar = require('./guitars'),
    solo = require('./solo');



class Player {
    constructor() {
        this.guitar = new guitar.Guitar();
        this.solo = new solo.Solo()
    }
    playGuitar() {
        this.guitar.play();
    }
    playSolo() {
        this.solo.play();
    }

    setGuitar(guitar) {
        this.guitar = guitar;
    }
    getGuitar() {
        return this.guitar;
    }

    setSolo(solo) {
        this.solo = solo;
    }
    getSolo() {
        return this.solo;
    }

}


class Edge extends Player{
    constructor(){
        super();
    }
}

class Jimi extends Player{
    constructor(){
        super();
    }
}

 class david extends Player{
    constructor(){
        super();
    }
}

exports.Player =  Player; 
exports.Edge =  Edge;
exports.Jimi = Jimi; 
exports.david = david;