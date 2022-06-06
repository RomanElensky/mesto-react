import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
  const handleEditProfileClick = () => setEditProfilePopupOpen(true);
  const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
  const closeAllPopups = () => {
    setAddPlacePopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard(null);
  };

  return (
    <div className="page">
      <Header />
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={setSelectedCard}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditProfilePopupOpen}
        title="Редактировать профиль"
        name="profile"
        onClose={closeAllPopups}
        buttonText='Сохранить'
      >
        <input
          name="profile_name"
          id="input-name"
          type="text"
          className="popup__input popup__input_type_name"
          placeholder="Имя"
          defaultValue=""
          minLength="2"
          maxLength="40"
          required
        />
        <span className="popup__input popup__span input-name-error"></span>
        <input
          name="profile_info"
          id="input-info"
          type="text"
          className="popup__input popup__input_type_info"
          placeholder="Род деятельности"
          defaultValue=""
          minLength="2"
          maxLength="200"
          required
        />
        <span className="popup__input popup__span input-info-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isAddPlacePopupOpen}
        title="Новое место"
        name="card"
        onClose={closeAllPopups}
        buttonText='Создать'
      >
        <input
          name="card_name"
          id="card-name"
          type="text"
          className="popup__input popup__input_type_card"
          placeholder="Название"
          defaultValue=""
          minLength="2"
          maxLength="30"
          required
        />
        <span className="popup__input popup__span card-name-error"></span>
        <input
          name="card_link"
          type="url"
          id="card-link"
          className="popup__input popup__input_type_link"
          placeholder="Ссылка на картинку"
          defaultValue=""
          required
        />
        <span className="popup__input popup__span card-info-error"></span>
      </PopupWithForm>
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        title="Обновить аватар"
        name="avatar"
        onClose={closeAllPopups}
        buttonText='Сохранить'
      >
        <input
          name="avatar_link"
          type="url"
          id="avatar-input"
          className="popup__input popup__input_type_avatar"
          placeholder="Ссылка"
          defaultValue=""
          required
        />
        <span className="popup__input popup__span avatar-input-error"></span>
      </PopupWithForm>
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
