const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025 <---- hex color
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // sets hastag for hex code
    let hexColor = '#';
    // loops 6 times and adds a random value from hex array
    // using getRandomNumber function
    for(let i=0; i<6; i++) {
        hexColor += hex[getRandomNumber()];
        // shows hexColor being built
        console.log(hexColor)
    }
    color.textContent = hexColor;
    color.style.color = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}