function animateCounter(i, endNbr, elt, duration = 1000, decimals = 0) {
    // get the difference between the 2 numbers
    let diff = endNbr - i;
    // get the step size for each iteration
    let step = diff / duration * 10;

    // if the step is too small, just set the end number
    if (Math.abs(step) < 1) {
        elt.innerHTML = endNbr.toLocaleString();
        return;
    } else {
        // increment the counter
        i += step;
        // round to the decimals
        i = Math.round(i * Math.pow(10, decimals)) / Math.pow(10, decimals);
        // update the counter
        elt.innerHTML = i.toLocaleString();
        // call the function again after 10ms
        setTimeout(function() {
            animateCounter(i, endNbr, elt, duration);
        }, 10);
    }
}

var trees = {
    "netloss": 12400000000,
    "snetloss": 50000,
    "totalloss": 0
}

let treesPerYear = trees.netloss;
let speciesPerYear = trees.snetloss;
// get start of year as a unix timestamp
let startOfYear = new Date(new Date().getFullYear(), 0, 1).getTime();
// get end of year as a unix timestamp
let endOfYear = new Date(new Date().getFullYear() + 1, 0, 1).getTime();

let treesLost = 0;
let updatetrees = function() {
    // get today as a unix timestamp
    let now = new Date().getTime();
    // get the amount of time that has passed since the start of the year
    let timePassed = now - startOfYear;

    // get the amount of trees that have been lost since the start of the year
    treesLost = treesPerYear * (timePassed / (endOfYear - startOfYear));
    // round
    treesLost = Math.round(treesLost);

    telt = document.querySelectorAll("#trees-lost");
    telt.forEach(function(elt) {
        // update the trees lost counter
        currentVal = parseInt(elt.innerHTML.replace(/,/g, ""));
        if (currentVal == 0) {
            elt.innerHTML = treesLost;
            currentVal = treesLost;
        }
        animateCounter(currentVal, treesLost, elt, 500);
    });
};

let speciesLost = 0;
let updatespecies = function() {
    // get today as a unix timestamp
    let now = new Date().getTime();
    // get the amount of time that has passed since the start of the year
    let timePassed = now - startOfYear;

    // get the amount of species that have been lost since the start of the year
    speciesLost = speciesPerYear * (timePassed / (endOfYear - startOfYear));
    // round
    speciesLost = Math.round(speciesLost);

    telt = document.querySelectorAll("#species-lost");
    telt.forEach(function(elt) {
        // update the species lost counter
        currentVal = parseInt(elt.innerHTML.replace(/,/g, ""));
        if (currentVal == 0) {
            elt.innerHTML = speciesLost;
            currentVal = speciesLost;
        }
        animateCounter(currentVal, speciesLost, elt, 500);
    });
};


updatetrees();
updatespecies();

// every second
let interval = setInterval(function() {
    updatetrees();
    updatespecies();
}, 1000);

