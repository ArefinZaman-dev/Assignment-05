import TechnologyCard from "./TechnologyCard";

const TechnologySection = ({ technologies }) => {

    return (
        <section>

            <h2>
                Explore Technologies
            </h2>

            <div>

                {
                    technologies.map((technology)=>(
                        
                        <TechnologyCard  key={technology.id} technology={technology} />

                    ))
                }

            </div>

        </section>

    )
}

export default TechnologySection;