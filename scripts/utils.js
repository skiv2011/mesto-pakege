export const popupImage = document.querySelector('.popup_type_image');
export const popupPhoto = document.querySelector('.popup__photo');
export const popupImageTitle = document.querySelector('.popup__image-title');
export const initialCards = [
  {
    name: 'Пляж Мальдивы',
    link: 'images/item1.jpg',
  },
  {
    name: 'Индийский Океан',
    link: 'images/item2.jpg'
  },
  {
    name: 'Тропический лес',
    link: 'images/item3.jpg'
  },
  {
    name: 'Французская Полинезия',
    link: 'images/item4.jpg'
  },
  {
    name: 'Лазурный берег',
    link: 'images/item5.jpg'
  },
  {
    name: 'Доминиканская республика',
    link: 'images/item6.jpg'
  }
];

export const dataBlock = {
  cardsTemplate: '.cards',
  listContentData: '.element__card',
  sceneryData: '.element__image',
  placeData: '.element__subtitle',
  likeData: '.element__button-like',
  activeLikeData: '.element__button-like_active',
  deleteData: '.element__button-delete'
}

export const enableValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__decription',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__decription_error',
  errorClass: 'popup__error_active'
}

/* Закрытие попапа нажатием "esc" */
export function handleEscape(evt) {
  if (evt.key === 'Escape') {
    const popup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
};

/* Закрыть любой попап */
export function closePopup(popup) {
  document.removeEventListener('keydown', handleEscape);
  popup.classList.remove('popup_opened');
}

/* Открыть любой попап */
export function openPopup(popup) {
  document.addEventListener('keydown', handleEscape);
  popup.classList.add('popup_opened');
}