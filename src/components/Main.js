import {useEffect, useState} from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getInfo(), api.getCards()])
      .then(([userData, cardsData]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(cardsData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="main">
      <section className="profile">
          <div className="profile__image-container">
            <div
              style={{ backgroundImage: `url(${userAvatar})` }}
              className="profile__image"
            >
              {" "}
            </div>
            <button
              onClick={onEditAvatar}
              className="profile__edit-image"
            ></button>
          </div>
          <div className="profile__title">
            <div className="profile__info">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__description">{userDescription}</p>
            </div>
            <button
                onClick={onEditProfile}
                className="profile__edit-button"
              ></button>
          </div>
        <button onClick={onAddPlace} className="profile__add-button"></button>
      </section>

      <section className="card">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  );
}

export default Main;