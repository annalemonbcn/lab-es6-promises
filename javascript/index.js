// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  /* getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));*/



// Iteration 1 - using callbacks


getInstruction(
  "mashedPotatoes", 0,
  (step) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
    getInstruction(
      "mashedPotatoes", 1,
      (step) => {
        document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
        getInstruction(
          "mashedPotatoes", 2,
          (step) => {
            document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
            getInstruction(
              "mashedPotatoes", 3,
              (step) => {
                document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
                getInstruction(
                  "mashedPotatoes", 4,
                  (step) => {
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step}</li>`;
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`; // -> Poner este paso aquí?
                  },
                  (err) => console.log(err)
                );
              },
              (err) => console.log(err)
            );
          },
          (err) => console.log(err)
        );
      },
    );
  },
  (err) => console.log(err)
);


// Iteration 2 - using promises
obtainInstruction('steak', 0)
  .then((value0) => {
    document.querySelector("#steak").innerHTML += `<li>${value0}</li>`;
    return obtainInstruction('steak', 1)
  })
  .then((value1) => {
    document.querySelector("#steak").innerHTML += `<li>${value1}</li>`;
    return obtainInstruction('steak', 2)
  })
  .then((value2) => {
    document.querySelector("#steak").innerHTML += `<li>${value2}</li>`;
    return obtainInstruction('steak', 3)
  })
  .then((value3) => {
    document.querySelector("#steak").innerHTML += `<li>${value3}</li>`;
    return obtainInstruction('steak', 4)
  })
  .then((value4) => {
    document.querySelector("#steak").innerHTML += `<li>${value4}</li>`;
    return obtainInstruction('steak', 5)
  })
  .then((value5) => {
    document.querySelector("#steak").innerHTML += `<li>${value5}</li>`;
    return obtainInstruction('steak', 6)
  })
  .then((value6) => {
    document.querySelector("#steak").innerHTML += `<li>${value6}</li>`;
    return obtainInstruction('steak', 7)
  })
  .then((value7) => {
    document.querySelector("#steak").innerHTML += `<li>${value7}</li>`;
  })

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...