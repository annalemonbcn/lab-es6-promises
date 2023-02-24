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
                    document.querySelector("#mashedPotatoes").innerHTML += `<li>Mashed potatoes are ready!</li>`;
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
/**
 * PROMISE ALL
 */
// -> Works but not codepending
const p1 = obtainInstruction('steak', 0);
const p2 = obtainInstruction('steak', 1);
const p3 = obtainInstruction('steak', 2);
const p4 = obtainInstruction('steak', 3);
const p5 = obtainInstruction('steak', 4);
const p6 = obtainInstruction('steak', 5);
const p7 = obtainInstruction('steak', 6);
const p8 = obtainInstruction('steak', 7);

Promise.all([p1, p2, p3, p4, p5, p6, p7, p8]).then((steps) => {
  // document.querySelector("#steak").innerHTML += `<li>${p1[0]}</li>`;
  steps.forEach(step => document.querySelector("#steak").innerHTML += `<li>${step}</li>`);
  console.log("Values", steps);
  console.log(steps[0]);
});

/**
 * CHAINED PROMISES
 */
// -> NOT WORKING but i don't know why
// obtainInstruction('steak', 0)
//   .then((step0) => {
//     //step0 -> PromiseResult
//     document.querySelector("#steak").innerHTML += `<li>${step0}</li>`;
//     obtainInstruction('steak', 1)
//   })
//   .then((step1) => {
//     document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
//     obtainInstruction('steak', 2)
//   })
//   .then((step2) => {
//     document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
//     obtainInstruction('steak', 3)
//   })
//   .then((step3) => {
//     document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
//     obtainInstruction('steak', 4)
//   })
//   .then((step4) => {
//     document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
//     obtainInstruction('steak', 5)
//   })
//   .then((step5) => {
//     document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
//     obtainInstruction('steak', 6)
//   })
//   .then((step6) => {
//     document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
//     obtainInstruction('steak', 7)
//   })

// Iteration 3 using async/await
// ...

// Bonus 2 - Promise all
// ...