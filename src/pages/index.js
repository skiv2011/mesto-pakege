import './index.css';
import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { openPopup, closePopup, dataBlock, initialCards, enableValidation } from '../Utils/utils.js';

const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
/* попапы */
const popups = document.querySelectorAll('.popup')
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
/* добавление профиля */
const nameAvtor = document.querySelector('.profile__title');
const postAvtor = document.querySelector('.profile__subtitle');
const nameInput = popupEdit.querySelector('.popup__decription_type_name');
const jobInput = popupEdit.querySelector('.popup__decription_type_job');
const inputTitle = popupAdd.querySelector('.popup__decription_type_title'); /* имя карточки */
const inputLink = popupAdd.querySelector('.popup__decription_type_link'); /* ссылка на картинку */
/* отправка форм */
const formElementEdit = popupEdit.querySelector('.popup__form-edit');
const formElementAdd = popupAdd.querySelector('.popup__form-add');
const elementContainer = document.querySelector('.element') /* сюда закидываем контент */

/* Функция открытия попапа добавления профиля */
function openEditPopup() {
  nameInput.value = nameAvtor.textContent;
  jobInput.value = postAvtor.textContent;
  openPopup(popupEdit);
};

/* Функция обработчик "отправки" формы */
function handleProfileFormSubmit(evt) {
  evt.preventDefault();                    /* строка отменяет стандартную отправку формы */
  nameAvtor.textContent = nameInput.value;
  postAvtor.textContent = jobInput.value;
  closePopup(popupEdit);
};

/* функция добавления карточки */
function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const cardData = { name: inputTitle.value, link: inputLink.value };
  const newCard = createCard(cardData);
  evt.target.reset();
  renderCard(newCard);
  closePopup(popupAdd);
  validationCard.disableButton();
};

function createCard(cardTemplate) {
  const cardTemplates = new Card(cardTemplate, dataBlock).generateCard();

  return cardTemplates;
}

/* Обработка массива с карточками */
initialCards.forEach((cardTemplate) => {
  renderCard(createCard(cardTemplate));
});

/* Рендер добавленных карточек */
function renderCard(cardTemplate, isPrepend = true) {
  if (isPrepend) {
    elementContainer.prepend(cardTemplate);
  } else {
    elementContainer.append(cardTemplate);
  }
}

buttonEdit.addEventListener('click', openEditPopup);
formElementEdit.addEventListener('submit', handleProfileFormSubmit);
buttonAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});
formElementAdd.addEventListener('submit', handleCardFormSubmit);
popups.forEach((popup) => {
  popup.addEventListener('click', (evn) => {
    if (evn.target.classList.contains('popup__close-button') || evn.target === evn.currentTarget) {
      closePopup(popup)
    }
  });
});

/* Валидация форм */
const validationProfile = new FormValidator(enableValidation, formElementEdit);
const validationCard = new FormValidator(enableValidation, formElementAdd);
validationProfile.enableValidation();
validationCard.enableValidation();