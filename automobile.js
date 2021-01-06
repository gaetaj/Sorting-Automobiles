/* 
Author- Jacob Gaeta
Course: Web Development
This program creates a function object called "Automobile"
and stores these objects in an array. Different comparators 
are used as a reference for sorting the arrays.
*/

// Function object that stores info about vehicle (i.e. make, year, etc.)
function Automobile(year, make, model, type) {
    this.year = year; //integer (ex. 2001, 1995)
    this.make = make; //string (ex. Honda, Ford)
    this.model = model; //string (ex. Accord, Focus)
    this.type = type; //string (ex. Pickup, SUV)
}

// Create prototype with log me function to create desired outputs
Automobile.prototype.logMe = function(extendedStyle) {
    // Print type in addition to other properties if using type comparison
    if (extendedStyle === true) {
        console.log(this.year + " " + this.make + " " + this.model + " " + this.type);
    }

    else {
        console.log(this.year + " " + this.make + " " + this.model);
    }
}

// Intiliaze automobile objects
let automobiles = [ 
    new Automobile(1995, "Honda", "Accord", "Sedan"),
    new Automobile(1990, "Ford", "F-150", "Pickup"),
    new Automobile(2000, "GMC", "Tahoe", "SUV"),
    new Automobile(2010, "Toyota", "Tacoma", "Pickup"),
    new Automobile(2005, "Lotus", "Elise", "Roadster"),
    new Automobile(2008, "Subaru", "Outback", "Wagon")
    ];

/*
Sorts arrays using a specified comparator. Comparator is passed 
as well as an array of automobile objects. Returns sorted array 
arranged in greatest to least value. Uses insertion method.
*/
function sortArr(comparator, array) {
    for (let i = 1; i < array.length; i++) {
        let arrayKey = array[i];
        let j = i - 1;

        while (j >= 0 && comparator(arrayKey, array[j])) {
            array[j + 1] = array[j];
            j = j - 1;
        }
        array[j + 1] = arrayKey;
    }

    return array;
}


// Compares two automobiles based on their year. Newer cars are "greater" than older cars.
function yearComparator(auto1, auto2) {
    if (auto1.year > auto2.year) {
        return true;
    }

    else {
        return false;
    }
}

// Compares two automobiles based on their make. Makes which are earlier in the alphabet are "greater".
function makeComparator(auto1, auto2) {
    // Comvert to lower case
    let make1 = auto1.make.toLowerCase();
    let make2 = auto2.make.toLowerCase();

    // Compare characters of each respective auto's make
    for (let i = 0; i < make1.length; i++) {
        if (make1[i] < make2[i]) {
            return true;
        }

    return false;
    }
}


// Compares automobiles based on their type. Ordering from "greatest" to "least" is: roadster, pickup, suv, wagon, sedan.


function typeComparator(auto1, auto2) {
    let type1 = auto1.type.toLowerCase();
    let type2 = auto2.type.toLowerCase();

    if (typeValue(type1) > typeValue(type2)) {
        return true;
    }

    else if (typeValue(type1) === typeValue(type2)) {
        return yearComparator (auto1, auto2);
    }

    else {
        return false;
    }
}

// Function that returns value based on type input, returns greater integers for types that are considered to be "greater"

    function typeValue(carType) {
        if (carType === "roadster") {
            return 5;
        }

        else if (carType === "pickup") {
            return 4;
        }

        else if (carType === "suv") {
            return 3;
        }

        else if (carType === "wagon") {
            return 2;
        }

        else {
            return 1;
        }
    }


// Show sorted lists of automobiles to user
console.log("The cars sorted by year are:");

for (let i = 0; i < automobiles.length; i++) {
    sortArr(yearComparator, automobiles)[i].logMe("false");
}

console.log("\nThe cars sorted by make are:");

for (let i = 0; i < automobiles.length; i++) {
    sortArr(makeComparator, automobiles)[i].logMe("false");
}

console.log("\nThe cars sorted by type are:");

for (let i = 0; i < automobiles.length; i++) {
    sortArr(typeComparator, automobiles)[i].logMe("true");
}
