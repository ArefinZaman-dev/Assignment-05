import TechnologyCard from "./TechnologyCard";


const TechnologySection = ({ technologies, addToStack, stack }) => {


    return (

        <section className="technology-section">


            <h2>
                Explore the <span>Technologies</span>
            </h2>


            <p>
                Pick one technology per category to build your ideal stack.
            </p>


            <div className="technology-grid">


                {
                    technologies.map((technology)=>(

                        <TechnologyCard

                            key={technology.id}

                            technology={technology}

                            addToStack={addToStack}

                            isAdded={
                                stack.some(
                                    item => item.id === technology.id
                                )
                            }

                        />

                    ))
                }


            </div>


        </section>

    )

}


export default TechnologySection;