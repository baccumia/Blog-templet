document.addEventListener('DOMContentLoaded', function () {
    const screen = document.getElementById('screen');
    const keys = document.querySelector('.calculator-keys');

    keys.addEventListener('click', function (event) {
        const { target } = event;
        const { value } = target;

        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case 'all-clear':
                screen.value = '';
                break;
            case '=':
                try {
                    screen.value = eval(screen.value);
                } catch {
                    screen.value = 'Error';
                }
                break;
            default:
                screen.value += value;
                break;
        }
    });
});