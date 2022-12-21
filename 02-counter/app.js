// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// shows that btns selects all buttons
/* console.log(btns); */

//
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // shows that e stores the button clicked
        /* console.log(e.currentTarget); */

        const styles = e.currentTarget.classList
        // checks for selected buttons class name and sets count to
        // expected output
        if(styles.contains('decrease')){
            count--;
        } else if(styles.contains('reset')){
            count = 0;
        } else if(styles.contains('increase')){
            count++;
        }
        // checks for counts value and assigns green if positive,
        // red if negative, black if 0
        if(count > 0) {
            value.style.color = 'green'
        } else if (count < 0) {
            value.style.color = 'red'
        } else if (count === 0) {
            value.style.color = 'black'
        }
        value.textContent = count;
    })
});
