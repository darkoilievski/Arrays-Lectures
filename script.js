'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Darko Ilievski',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Tanja Budjakovska Ilievska',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Kalina Gjurevska',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Matea Gjurevska',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Dispay the deposits and withdrawals using For Each Method
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';
  // Sort button
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    
    <div class="movements__value">${mov}</div>
  </div>
  `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Display the  balance use REDUCE Method
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(function (accumulator, current) {
    return accumulator + current;
  }, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

// Display Summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;
  const outcome = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)} EUR`;
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}EUR`;
};

// Create username for the owners above, frist name letter and first last name letter
// Using MAP method
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(function (name) {
        return name.at(0);
      })
      .join('');
  });
};

createUsernames(accounts);
// console.log(accounts);

// Function to update the UI (REUSABLE)
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
};

// CREATE - IMPLEMENT THE LOGIN
let currentAccount;
btnLogin.addEventListener('click', function (event) {
  // Stop the page from reloading when u click login
  event.preventDefault();
  // How to add the username to the login and check if it is correct
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);
  // Check if the pin (password) is correct
  // The ? (questionmark) is optiona chaining anc checks if the currentAccount
  // Is correct and the continues to check the pin (password)
  if (currentAccount?.pin === parseInt(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    // Display movements
    // Display balance
    // Display summary
    updateUI(currentAccount);
    // Remove the login credentials (clear input fields)
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
  }
});

// Transfer money from one user to another
btnTransfer.addEventListener('click', function (event) {
  // Stop the page from reloading when u click the button
  event.preventDefault();
  const amount = parseInt(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  // Check if i have the amount that i want to transfer and if the username is correct
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Remove the amount from the balance
    currentAccount.movements.push(-amount);
    // Add the amount to the receiver
    receiverAcc.movements.push(amount);
    // Display movements
    // Display balance
    // Display summary
    updateUI(currentAccount);
  }
  // Remove the login credentials (clear input fields)
  inputTransferTo.value = inputTransferAmount.value = '';
});

// Loan money
btnLoan.addEventListener('click', function (event) {
  // Stop the page from reloading when u click the button
  event.preventDefault();

  const amount = parseInt(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);
    // Update UI
    updateUI(currentAccount);
  }
  // Remove the login credentials (clear input fields)
  inputLoanAmount.value = '';
});

// Delete an account
btnClose.addEventListener('click', function (event) {
  // Stop the page from reloading when u click the button
  event.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    parseInt(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 0;
  }
  // Remove the login credentials (clear input fields)
  inputCloseUsername.value = inputClosePin.value = '';
});

// Sort button
let sorted = false;
btnSort.addEventListener('click', function (event) {
  // Stop the page from reloading when u click the button
  event.preventDefault();
  // Display the sorting
  displayMovements(currentAccount.movements, !sorted);
  // Rreversing the sort to it's original state
  sorted = !sorted;
});
