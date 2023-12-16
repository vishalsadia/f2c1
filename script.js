// Initial array of developers
let developers = [
    { name: 'John', age: 30, profession: 'developer' },
    { name: 'Alice', age: 25, profession: 'admin' },
    // ... other developers
  ];
  
  // Task 1: Print Developers
  function printDevelopers() {
    console.log("Developers:");
    developers.forEach(dev => console.log(dev.name));
  }
  
  // Task 2: Add Data
  function addData() {
    const name = prompt("Enter name:");
    const age = parseInt(prompt("Enter age:"));
    const profession = prompt("Enter profession:");
  
    const newDeveloper = { name, age, profession };
    developers.push(newDeveloper);
  }
  
  // Task 3: Remove Admins
  function removeAdmin() {
    developers = developers.filter(dev => dev.profession !== 'admin');
  }
  
  // Task 4: Concatenate Array
  function concatenateArray() {
    const dummyArray = [
      { name: 'Dummy1', age: 22, profession: 'developer' },
      { name: 'Dummy2', age: 28, profession: 'admin' },
    ];
  
    const result = developers.concat(dummyArray);
    console.log("Concatenated Array:", result);
  }
  
  // Task 5: Average Age
  function averageAge() {
    const totalAge = developers.reduce((sum, dev) => sum + dev.age, 0);
    const avg = totalAge / developers.length;
    console.log("Average Age:", avg);
  }
  
  // Task 6: Age Check
  function checkAgeAbove25() {
    const isAbove25 = developers.some(dev => dev.age > 25);
    console.log("Is there anyone above 25? ", isAbove25);
  }
  
  // Task 7: Unique Professions
  function uniqueProfessions() {
    const professionsSet = new Set(developers.map(dev => dev.profession));
    console.log("Unique Professions:", Array.from(professionsSet));
  }
  
  // Task 8: Sort by Age
  function sortByAge() {
    developers.sort((a, b) => a.age - b.age);
    console.log("Sorted by Age:", developers);
  }
  
  // Task 9: Update Profession
  function updateJohnsProfession() {
    const john = developers.find(dev => dev.name === 'John');
    if (john) {
      john.profession = 'manager';
      console.log("John's profession updated to manager.");
    } else {
      console.log("John not found.");
    }
  }
  
  // Task 10: Profession Count
  function getTotalProfessions() {
    const developerCount = developers.filter(dev => dev.profession === 'developer').length;
    const adminCount = developers.filter(dev => dev.profession === 'admin').length;
  
    console.log("Total Developers:", developerCount);
    console.log("Total Admins:", adminCount);
  }
  
//   // Test the functions
//   printDevelopers();
//   addData();
//   removeAdmin();
//   concatenateArray();
//   averageAge();
//   checkAgeAbove25();
//   uniqueProfessions();
//   sortByAge();
//   updateJohnsProfession();
//   getTotalProfessions();
  