const output = document.getElementById("output");

const result = fetch(
  "localhost:3000/api"
).then((response) => {
  return response.json()
}).then((data) => {
  return data;
}).catch((err) => {
  console.log(err);
});

// output.value = result;

console.log(result);