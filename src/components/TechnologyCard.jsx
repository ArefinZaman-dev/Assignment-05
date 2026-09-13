const TechnologyCard = ({ technology }) => {

    return (

        <div>

            <img 
                src={technology.icon}
                alt={technology.name}
                width="60"
            />
            <span>
                {technology.badge}
            </span>
            <h3>
                {technology.name}
            </h3>
            <p>
                {technology.description}
            </p>
            <p>
                Category: {technology.category}
            </p>
            <p>
                Difficulty: {technology.difficulty}
            </p>
            <p>
                ⭐ {technology.rating}
            </p>
            <button>
                Add to Stack
            </button>
        </div>

    )
}
export default TechnologyCard;