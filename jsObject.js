person={
  name: "John Doe",
  age: 30,
  height: 5.9,
  weight: 70,
  gender: "M",
  married: "True",
  salary: "Kes 70,000",
  children: [
    {name: "Jane", age: 10, gender: "F"},
    {name: "Jack", age: 8, gender: "M"},
  ]
}

// Get the output div
const outputDiv = document.getElementById("output");

// Format the object data as HTML
outputDiv.innerHTML = `
    <p><strong>Name:</strong> ${person.name}</p>
    <p><strong>Age:</strong> ${person.age}</p>
    <p><strong>Height:</strong> ${person.height} ft</p>
    <p><strong>Weight:</strong> ${person.weight} kg</p>
    <p><strong>Gender:</strong> ${person.gender}</p>
    <p><strong>Married:</strong> ${person.married ? "Yes" : "No"}</p>
    <p><strong>Salary:</strong> ${person.salary}</p>
    <h3>Children:</h3>
    <ul>
        ${person.children.map(child => `<li>${child.name} - ${child.age} years old (${child.gender})</li>`).join('')}
    </ul>
`;