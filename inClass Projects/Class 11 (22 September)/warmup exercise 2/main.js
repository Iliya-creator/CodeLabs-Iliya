// Exercise 2:
// Given the array

  let list = [
    {
      id: 1, 
      completed: true,
      action: "Study"
    },
    {
      id: 2,
      completed: false, 
      action: "Dishes"
    }
  ]

// Print each object's id, status of completion and action onto the page.

for (let i = 0; i ,list.length; i++){
    let fullTodo = `ID: ${list[i].id}`;

    document.body.innerHTML += `
    <p>$[fullTodo]`
}
