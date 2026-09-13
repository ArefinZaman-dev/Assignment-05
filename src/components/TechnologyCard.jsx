const TechnologyCard = ({
    technology,
    addStack,
    selected
}) => {


    return(

        <div className="technology-card">



            <div className="card-header">


                <img
                    src={technology.image}
                    alt={technology.name}
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

                    {technology.level}

                </span>


            </div>




            <div className="rating">

                ⭐ {technology.rating}

            </div>




            <button

                onClick={() => addStack(technology)}

                className={
                    selected
                    ?
                    "added-btn"
                    :
                    "stack-btn"
                }

            >

                {
                    selected
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