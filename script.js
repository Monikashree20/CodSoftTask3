document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector('input');
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(button.innerText);
        });
    });

    function handleButtonClick(value) {
        switch (value) {
            case 'AC':
                inputField.value = '';
                break;
            case 'DEL':
                inputField.value = inputField.value.slice(0, -1);
                break;
            case '=':
                try {
                    inputField.value = eval(inputField.value.replace('x', '*'));
                } catch (error) {
                    inputField.value = 'Error';
                }
                break;
            default:
                inputField.value += value;
                break;
        }
    }
});
