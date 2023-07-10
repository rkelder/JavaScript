/*

This code creates a named simulation of a single-celled organism consisting of 15 DNA bases. 

The code is able to compare the organism's DNA to that of another named, single-celled organism. 

The code is also able to indicate whether an organism contains specific DNA bases that increase its odds of survivability.

Finally, the code is able to create a list of organisms that are all guaranteed to only possess the specific DNA type that increases its odds of survivability. 

*/

// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ["A", "T", "C", "G"];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  function pAequorFactory(number, array) {
    let organism = {};
  
    organism.specimenNum = number;
    organism.dna = array;
  
    organism.mutate = function () {
      let randomBase = Math.floor(Math.random() * this.dna.length);
      let replacedBase = this.dna[randomBase];
      let newBase = returnRandBase();
  
      while (newBase === replacedBase) {
        newBase = returnRandBase();
      }
  
      this.dna[randomBase] = newBase;
      return this.dna;
    };
  
    /* 
  I want to compare with another pAequor object.
  I want to compare these two objects .dna. This means that I am comparing this.dna with pAequorname.dna 
  I want to see how many DNA bases are identical AND in the same location. This means that in a for loop, [i] needs to be identical. 
  I want to print a message that states the percentage of DNA the two objects have in common.
  I want to compare based on pAequor's .specimenNum.
  */
  
    organism.compareDNA = function (pAequorname) {
      let comparedDNABase = 0;
  
      for (let i = 0; i <= this.dna.length; i++) {
        if (this.dna[i] === pAequorname.dna[i]) {
          comparedDNABase += 1;
        }
      }
      let comparedDNAPercentage = (
        (comparedDNABase / this.dna.length) *
        100
      ).toFixed();
      return console.log(
        `Specimen ${this.specimenNum} and specimen ${pAequorname.specimenNum} have ${comparedDNAPercentage}% of their DNA in common`
      );
    };
  
    organism.willLikelySurvive = function () {
      let comparedDNABase = 0;
  
      for (let i = 0; i <= this.dna.length; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          comparedDNABase += 1;
        }
      }
      let comparedDNAPercentage = (
        (comparedDNABase / this.dna.length) *
        100
      ).toFixed();
  
      if (comparedDNAPercentage >= 60) {
        return true;
      } else {
        return false;
      }
    };
  
    return organism;
  }
  
  /*
  const james = pAequorFactory(1, mockUpStrand());
  const phil = pAequorFactory(2, mockUpStrand());
  
  
  
  console.log(james);
  
  
  
  console.log("Before mutation:", james.dna);
  james.mutate()
  console.log("After mutation:", james.dna);
  
  
  console.log(phil);
  
  james.compareDNA(phil);
  
  
  console.log(james.willLikelySurvive())
  console.log(phil.willLikelySurvive())
  
  */
  const survivablePAequorArray = [];
  let count = 0;
  
  while (count < 30) {
    const organism = pAequorFactory(count + 1, mockUpStrand());
    if (organism.willLikelySurvive()) {
      survivablePAequorArray.push(organism);
      count++;
    }
  }
  
  console.log(survivablePAequorArray);
  
