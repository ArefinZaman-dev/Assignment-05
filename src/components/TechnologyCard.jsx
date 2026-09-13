const TechnologyCard = ({ technology, addToStack, isAdded }) => {


    return (

        <div className="technology-card">


            <div className="card-header">


                <img

                    src={technology.icon}

                    alt={technology.name}

                    width="50"

                />


                <span>

                    {technology.badge}

                </span>


            </div>



            <h3>

                {technology.name}

            </h3>



            <p>

                {technology.description}

            </p>



            <div className="card-tags">


                <span>

                    {technology.category}

                </span>


                <span>

                    {technology.difficulty}

                </span>


            </div>



            <p>

                ⭐ {technology.rating}

            </p>



            <button

                className={
                    isAdded
                    ?
                    "added-btn"
                    :
                    "stack-btn"
                }

                onClick={() => addToStack(technology)}

                disabled={isAdded}

            >

                {
                    isAdded
                    ?
                    "✓ Added"
                    :
                    "Add to Stack"
                }


            </button>



        </div>

    )

}


export default TechnologyCard;