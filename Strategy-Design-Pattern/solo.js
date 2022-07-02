class Solo {

    play() {
        throw new Error("Play metho Must Implemented");
    }

}

class Smash_the_Guitar extends Solo {

    play() {
        console.log('Smash the Guitar Sound');
    }
}

class Set_the_Guitar_on_Fire extends Solo {

    play() {
        console.log("Set the Guitar on Fire Sound");
    }
}

class Jump_off_the_Stage extends Solo {

    play() {
        console.log("Jump off the Stage Sound")
    }
}

exports.Solo = Solo;
exports.Smash_the_Guitar = Smash_the_Guitar;
exports.Set_the_Guitar_on_Fire = Set_the_Guitar_on_Fire;
exports.Jump_off_the_Stage = Jump_off_the_Stage;
