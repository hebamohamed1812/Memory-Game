const cardArray = [
    {
        name: 'fries',
        img: 'Images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png'
    },
    {
        name: 'fries',
        img: 'Images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'Images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'Images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'Images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'Images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'Images/pizza.png'
    }
]

cardArray.sort(() => 0.5 - Math.random()) //sort array randomly (short function)

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
let cardsWon = [];

function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img'); //create img 12 times
        card.setAttribute('src', 'Images/blank.png'); //add attr src and it takes the path of blank img
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];
    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'Images/blank.png');
        cards[optionTwoId].setAttribute('src', 'Images/blank.png');
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'Images/white.png');
        cards[optionTwoId].setAttribute('src', 'Images/white.png');
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute('src', 'Images/blank.png');
        cards[optionTwoId].setAttribute('src', 'Images/blank.png');
    }
    cardsChosen = [];
    cardsChosenIds = [];
    resultDisplay.innerHTML = cardsWon.length;

    if (cardsWon.length === cardArray.length / 2) {
        resultDisplay.innerHTML = 'Congratulations you found them all';
    }
}

function flipCard() {
    let cardId = this.getAttribute('data-id'); //each card has id
    cardsChosen.push(cardArray[cardId].name); //every time you click the name of the card will added to cardsChosen array
    cardsChosenIds.push(cardId); //every time you click the id of the card will added to cardsChosenIds array
    this.setAttribute('src', cardArray[cardId].img); //if you clicked any card the img will change
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

createBoard();
