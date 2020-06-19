        //JavaScript Methods for Arrays
        //.forEach / .filter /


// .forEach array method
// Function that creates our html format using string interpolation 
// Lightning Exercise: Add another section sibling to the current one and 
// use object dot notation to display each company's city. 
// Use square bracket notation to display the state code.
// Use dynamic square bracket notation to add the zip code.... bracket notation is a dynamic 
const outEl = document.querySelector("#output")

outEl.innerHTML = "<h1>Active Businesses</h1>"
    businesses.forEach(business => {
    outEl.innerHTML += `
        <h2>${business.companyName}</h2>
        <section>
        ${business.addressFullStreet}
        </section>
        <section>
        ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
        </section>
  `
    outEl.innerHTML += "<hr/>"
});



//.filter array method
// Lightning Exercise: Use filter() to create another array named manufacturingBusinesses 
// that array will contain all businesses in the manufacturing industry. 
// Display those to the DOM.
// Array to contain all the New York businesses
const newYorkBusinesses = businesses.filter(business => {
    let inNewYork = false
  
    if (business.addressStateCode === "NY") {
        inNewYork = true
    }

    return inNewYork
  })
  console.log(newYorkBusinesses)
  
  
  const outNY = document.querySelector("#output2")

  outNY.innerHTML = "<h1>Active New York Businesses</h1>"
  newYorkBusinesses.forEach(business => {
      outNY.innerHTML += `
          <h2>${business.companyName}</h2>
          <section>
          ${business.addressFullStreet}
          </section>
          <section>
          ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
          </section>
          <section>
          ${business.orders}
          </section>
    `
      outNY.innerHTML += "<hr/>"
  });
  


  const manufacturingBusinesses = businesses.filter(business => {
    let manufacturing = false
  
    if (business.companyIndustry === "Manufacturing") {
        manufacturing = true
    }

    return manufacturing
  })
  console.log(newYorkBusinesses)
  
  
const outManufacturing = document.querySelector("#output3")

  outManufacturing.innerHTML = "<h1>Active Manufacturing Businesses</h1>"
  manufacturingBusinesses.forEach(business => {
    outManufacturing.innerHTML += `
          <h2>${business.companyName}</h2>
          <section>
          ${business.addressFullStreet}
          </section>
          <section>
          ${business.addressCity}, ${business["addressStateCode"]} ${business["addressZipCode"]}
          </section>
          <section>
          Company Industry: ${business.companyIndustry}
          </section>
          <section>
          Orders: ${business.orders}
          </section>
    `
    outManufacturing.innerHTML += "<hr/>"
  });



  //.MAP Array Method
  //
  outEl.innerHTML += "<h1>Purchasing Agents</h1>";

  /*
      Using map(), you extract the purchasing agent object
      from each business and store it in a new array
  */
  const agents = businesses.map(business => {
      return {
        "fullName": business.purchasingAgent.nameFirst,
        "company": business.companyName,
        "phoneNumber": business.phoneWork
    }
    //was able to build out an array of the data instead of an object... just a thought
    // [business.purchasingAgent.nameFirst, 
    //         business.purchasingAgent.nameLast, 
    //         business.companyName,
    //         business.phoneWork
    //     ]
      
  })
//   const companyName = businesses.map(business => {
//     return companyName;
    
// })
  console.table(agents)
  
  agents.forEach(agent => {
    outEl.innerHTML += 
        `<h2>Agent Name: ${agent.fullName}</h2>
        <h2>${agent.company}</h2>
        <h2>${agent.phoneNumber}</h2>`
    outEl.innerHTML += "<hr/>";
  });