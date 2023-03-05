export const popupImage = document.querySelector('.popup_type_image');
export const popupPhoto = document.querySelector('.popup__photo');
export const popupImageTitle = document.querySelector('.popup__image-title');
const maldivesbBeach = new URL ('../images/item1.jpg',import.meta.url);
const indianOcean = new URL('../images/item2.jpg',import.meta.url);
const RainForest = new URL('../images/item3.jpg',import.meta.url);
const FrenchPolynesia = new URL('../images/item4.jpg',import.meta.url);
const CoteAzur = new URL('../images/item5.jpg',import.meta.url);
const DominicanRepublic = new URL('../images/item6.jpg',import.meta.url);

export const initialCards = [
  {
    name: 'Пляж Мальдивы',
    link: maldivesbBeach
  },
  {
    name: 'Индийский Океан',
    link: indianOcean
  },
  {
    name: 'Тропический лес',
    link:  RainForest

  },
  {
    name: 'Французская Полинезия',
    link: FrenchPolynesia
  },
  {
    name: 'Лазурный берег',
    link: CoteAzur
  },
  {
    name: 'Доминиканская республика',
    link: DominicanRepublic
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