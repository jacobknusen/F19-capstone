let btn = document.getElementById('randombtn');
let output = document.getElementById('output');


// let Goals = [
    
//     "read one chapter a day in a book(knowledge is power)!!",
//     "go to the gym for a hour a day! (stay hard)",
//     "healthy diet, no sugar, no soda, no bs!! (health is wealth)",
//     "make your bed every morning! (atomic habits)",
    
// ];

// btn.addEventListener('click', function(){
//     const randomGoals = Goals[Math.floor(Math.random() * Goals.length)]
//     output.innerHTML = randomGoals;
// })
function goal() {
    axios.get("http://localhost:4040/api/goals/")
    .then((res) => {
      console.log(res.data)
      output.innerHTML = (res.data)
    });
};
btn.addEventListener('click', goal)
