const TechnologyCard = ({ technology, addToStack, isAdded }) => {
  return (
    <div className="technology-card">
      <div className="card-top">
        <img src={technology.icon} alt={technology.name} />

        <span>{technology.badge}</span>
      </div>

      <h3>{technology.name}</h3>

      <p>{technology.description}</p>

      <div className="card-info">
        <span>{technology.category}</span>

        <span>{technology.difficulty}</span>
      </div>

      <div className="rating">⭐ {technology.rating}</div>

      <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
        className={isAdded ? "added-btn" : "stack-btn"}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
