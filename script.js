document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = null;
    let result = null;

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const value = button.getAttribute('data-value');

            if (value === 'C') {
               
                currentInput = '';
                operator = null;
                result = null;
                display.textContent = '';
                display.classList.remove('highlight');
            } else if (value === '=') {
            
                try {
                    result = eval(currentInput);
                    display.textContent = result;
                    currentInput = result;
                    display.classList.add('highlight');
                } catch (error) {
                    display.textContent = 'Error';
                    display.classList.add('highlight');
                }
            } else {
               
                currentInput += value;
                display.textContent = currentInput;
                display.classList.remove('highlight');
            }
        });
    });
});