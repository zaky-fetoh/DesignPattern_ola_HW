class Guitar {
    play() {
        throw new Error("Play Method Must Be Implemented")
    }
}


class Gibson_SG extends Guitar {
    play() {
        console.log("Gibson SG Sound");
    }
}

class Fender_Stratocaster extends Guitar {
    
    play() {
        console.log("Fendear Stratocaster Sound");
    }
    
}


class Gibson_Les_Paul extends Guitar {
    
    play() {
        
        console.log("Gibson Les Paul Sound");
    }

}


exports.Guitar = Guitar ;
exports.Gibson_SG = Gibson_SG ;
exports.Fender_Stratocaster = Fender_Stratocaster; 
exports.Gibson_Les_Paul = Gibson_Les_Paul;