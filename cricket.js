const ballstemp = ".......111....3.4..6...1..11....2....3...W...11...1..2...33...44...W..W..1..2..1.22....1..1......1....11...111.....1.111..222.333...W...211..22.11....1...1...1...1...1..1..3...4....2...1....3...1....646421.3.222..111...333...444......1111...22..333.444............1...1...1.....11.22.WWW11.....1....11....1....1.W...W..1666..W";
const numberOfBatsman = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let batsman1TotalRuns = 0;
let batsman2TotalRuns = 0;
let batsman1;
let batsman2;
let batting = 0;
let nextBatsMan = 0;
let totalruns = 0;
let totalOut = 0;
let oversCount = 0
let numberOfBallsBatsman1 = 0;
let numberOfBallsBatsman2 = 0;

const score = (ballstemp) => {

    batsman1 = numberOfBatsman[nextBatsMan];
    nextBatsMan += 1;
    batsman2 = numberOfBatsman[nextBatsMan];
    batting = batsman1;

    for (let s of ballstemp) {

        // oversCount += 1
        // if (oversCount == 6)
        // {
        //     if(batting == batsman1)
        //     {
        //         batting = batsman2;
        //         oversCount = 0;
        //     }
        //     else 
        //     {
        //         batting = batsman1;
        //         oversCount = 0;
        //     }
        // }
        // switch(s) {
        //     case "." : break;
        //     case "1" :   if (batting == batsman1) {
        //         addRuns(1,1);
        //         numberOfBallsBatsman1 += 1;
        //        // batsman1TotalRuns += 1
        //         batting = batsman2;
        //     }
        //     else {
        //         addRuns(1,2);
        //         numberOfBallsBatsman2 += 1;
        //         //batsman2TotalRuns += 1
        //         batting = batsman1;
        //     }
        //     break;
        // }
        if (s == ".") {

        }
        else if (s == "1") {

            if (batting == batsman1) {
                addRuns(1,1);
                batting = batsman2;
            }
            else {
                addRuns(1,2);
                batting = batsman1;
            }

        }
        else if (s == "2") {
            if (batting == batsman1) {
                addRuns(2,1);
            }
            else {
                addRuns(2,2);
            }
        }
        else if (s == "3") {
            if (batting == batsman1) {
                addRuns(3,1);
                batting = batsman2;
            }
            else {
                addRuns(3,2);
                batting = batsman1;
            }

        }
        else if (s == "4") {
            if (batting == batsman1) {
                addRuns(4,1);
            }
            else {
                addRuns(4,2);
            }

        }
        else if (s == "6") {
            if (batting == batsman1) {
                addRuns(6,1);
            }
            else {
                addRuns(6,2);
            }

        }
        else if (s == "W") {
            if (batting == batsman1) {
                if (totalOut == 9) {
                    console.log(`Batsman ${batsman1} total runs is ${batsman1TotalRuns} total number of balls ${numberOfBallsBatsman1}`)
                    console.log(`Batsman ${batsman2} total runs is ${batsman2TotalRuns} total number of balls ${numberOfBallsBatsman1}`)
                    totalruns += batsman1TotalRuns;
                    totalruns += batsman2TotalRuns;
                }
                else {
                    console.log(`Batsman ${batsman1} total runs is ${batsman1TotalRuns} total number of balls ${numberOfBallsBatsman1}`)
                    nextBatsMan += 1
                    batsman1 = numberOfBatsman[nextBatsMan];
                    totalruns += batsman1TotalRuns;
                    batsman1TotalRuns = 0;
                    numberOfBallsBatsman1 = 0;
                    totalOut += 1
                    batting = batsman1;
                }
            }
            else if (batting == batsman2) {
                if (totalOut == 9) {
                    console.log(`Batsman ${batsman1} total runs is ${batsman1TotalRuns} total number of balls ${numberOfBallsBatsman2}`)
                    console.log(`Batsman ${batsman2} total runs is ${batsman2TotalRuns} total number of balls ${numberOfBallsBatsman2}`)
                    totalruns += batsman1TotalRuns;
                    totalruns += batsman2TotalRuns;
                }
                else {
                    console.log(`Batsman ${batsman2} total runs is ${batsman2TotalRuns} total number of balls ${numberOfBallsBatsman2}`)
                    nextBatsMan += 1
                    batsman2 = numberOfBatsman[nextBatsMan];
                    totalruns += batsman2TotalRuns;
                    numberOfBallsBatsman2 = 0;
                    batsman2TotalRuns = 0;
                    totalOut += 1
                    batting = batsman2;
                }
            }
        }
    }

    console.log (`Total runs is ${totalruns}`);
}

const addRuns = (numberOfRuns,batsman) => {
    if (batsman == 1) {
        batsman1TotalRuns += numberOfRuns;
        numberOfBallsBatsman1 += 1;
    }
    else {
        batsman2TotalRuns += numberOfRuns;
        numberOfBallsBatsman2 += 1;
    }
}

score(ballstemp);