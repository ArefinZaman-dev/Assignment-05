import TechnologyCard from "./TechnologyCard";


const TechnologySection = ({ technologies, addToStack, stack }) => {


    return (

        <section>

            <h2>
                Explore Technologies
            </h2>


            <h3>
                {stack.length} Technology Selected
            </h3>


            <div>

                {
                    technologies.map((technology)=>(

                        <TechnologyCard key={technology.id} technology={technology} addToStack={addToStack} isAdded={stack.some(item => item.id === technology.id)}
                        />

                    ))
                }

            </div>

        </section>

    )

}


export default TechnologySection;