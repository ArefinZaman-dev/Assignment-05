const StackCard = ({ technology, removeFromStack }) => {


    return (

        <div className="stack-card">


            <img
                src={technology.icon}
                alt={technology.name}
            />


            <div>

                <h3>
                    {technology.name}
                </h3>


                <p>
                    {technology.category}
                </p>

            </div>


            <button
                onClick={() => removeFromStack(technology.id)}
            >

                ✕

            </button>


        </div>

    )

}


export default StackCard;