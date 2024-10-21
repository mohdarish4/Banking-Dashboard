document.addEventListener('DOMContentLoaded', function () {
    let balance = 1000;
    let lastDeposit = 0;
    let lastWithdrawal = 0;

    const balanceDisplay = document.getElementById('balance');
    const depositInput = document.getElementById('deposit-amount');
    const withdrawInput = document.getElementById('withdraw-amount');
    const depositBtn = document.getElementById('deposit-btn');
    const withdrawBtn = document.getElementById('withdraw-btn');

    const lastDepositDisplay = document.getElementById('last-deposit');
    const lastWithdrawalDisplay = document.getElementById('last-withdrawal');

    function updateBalanceDisplay() {
        balanceDisplay.textContent = balance;
        lastDepositDisplay.textContent = lastDeposit;
        lastWithdrawalDisplay.textContent = lastWithdrawal;
    }

    depositBtn.addEventListener('click', () => {
        const depositAmount = parseFloat(depositInput.value);


        if (depositAmount < 0) {
            alert('Invalid amount. You cannot deposit a negative amount.');
            depositInput.value = '';
            return;
        }

        if (!isNaN(depositAmount) && depositAmount > 0) {
            balance += depositAmount;
            lastDeposit = depositAmount;              //Store the last deposit
            updateBalanceDisplay();
            depositInput.value = '';
        } else {
            alert('Please enter a valid deposit amount.');
        }
    });

    withdrawBtn.addEventListener('click', () => {
        const withdrawAmount = parseFloat(withdrawInput.value);

        /*===== Check for negative or invalid withdrawal amounts =====*/
        if (withdrawAmount < 0) {
            alert('Invalid amount. You cannot withdraw a negative amount.');
            withdrawInput.value = '';
            return;
        }

        if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
            if (withdrawAmount <= balance) {
                balance -= withdrawAmount;
                lastWithdrawal = withdrawAmount;         // Store the last withdrawal
                updateBalanceDisplay();
            } else {
                alert('Insufficient balance. You cannot withdraw more than the available balance.');
            }
        } else {
            alert('Please enter a valid withdrawal amount.');
        }

        withdrawInput.value = '';
    });
});
