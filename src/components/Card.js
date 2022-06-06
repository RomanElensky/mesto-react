function Card({ card, onCardClick }) {

  function handleCardClick() {
    onCardClick(card)
  }

  return (
    <article key={card._id} className="card__element" onClick={handleCardClick}>
      <img src={card.link} alt={card.name} className="card__image" />
      <button className="card__trash-button"></button>
      <div className="card__description">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__likes">
          <button className="card__like"></button>
          <p className="card__like-amount">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card