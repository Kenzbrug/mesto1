const openPopupButton = document.querySelector('.profile__button');
const closePopupButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.form');
let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_occupation');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

function togglePopup () {
    popup.classList.toggle('popup__open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
}

openPopupButton.addEventListener('click', togglePopup);
closePopupButton.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    togglePopup ();
}

formElement.addEventListener('submit', formSubmitHandler);
