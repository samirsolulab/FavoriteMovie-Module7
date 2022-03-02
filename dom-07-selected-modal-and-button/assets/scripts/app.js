const addMovieModal = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backDrop = document.getElementById('backdrop');
// const backDrop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
// const userInput = addMovieModal.getElementsByTagName('input');

const toggleBackdrop = () =>{
    backDrop.classList.toggle('visible');
}

const toggleMovieModal = () => { //function(){}
    addMovieModal.classList.toggle('visible');
    toggleBackdrop();
};

const cancelAddMovie = () =>{
    toggleMovieModal();
}

const addMovieHandler = () =>{
    const titleValue = userInputs[0].value;
    const imageUrlValue =  userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
    titleValue.trim() === '' ||
    imageUrlValue.trim() === '' ||
    ratingValue.trim() === '' ||
    +ratingValue < 1 ||
    +ratingValue > 5
    ) {
        aleart('Please enter valid values (rating between 1 and 5).');
        return;
    }
};

const backdropClickHandler = () =>{
    toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backDrop.addEventListener('click',backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);
confirmAddMovieButton.addEventListener('click', addMovieHandler);