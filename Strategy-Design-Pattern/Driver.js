const players = require("./players"),
    guitar = require("./guitars"),
    solo =require("./solo");

class main{

    
    static main(){
        const edge = new players.Edge()
        edge.setGuitar( new guitar.Gibson_Les_Paul())
        edge.setSolo(new solo.Set_the_Guitar_on_Fire());

        edge.playGuitar( )
        edge.playSolo()

    }

}


main.main();