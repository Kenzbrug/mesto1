const openPopupButton = document.querySelector('.profile__button-change');
const closePopupButton = document.querySelector('.popup__close-button');
const popup = document.querySelector('.popup');
const formElement = popup.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__form-input_type_name');
let jobInput = document.querySelector('.popup__form-input_type_occupation');
let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');

function closePopup () {
    popup.classList.remove('popup_open');
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileOccupation.textContent = jobInput.value;
    closePopup ();
}

openPopupButton.addEventListener('click', () => {
    popup.classList.add ('popup_open');
    nameInput.value = profileName.textContent;
    jobInput.value = profileOccupation.textContent;
})

closePopupButton.addEventListener('click', closePopup)
formElement.addEventListener('submit', formSubmitHandler);