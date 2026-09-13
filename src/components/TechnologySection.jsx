import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";


const TechnologySection = ({ technologies, addToStack, stack, removeFromStack, removeAll }) => {


    return (

        <section>


            <div>

                <h2>
                    Explore Technologies
                </h2>


                <div>

                    {
                        technologies.map((technology)=>(

                            <TechnologyCard key={technology.id} technology={technology} addToStack={addToStack} isAdded={stack.some(item => item.id === technology.id)}
                            />

                        ))
                    }


                </div>


            </div>


            <YourStack stack={stack} removeFromStack={removeFromStack} removeAll={removeAll} />


        </section>

    )

}


export default TechnologySection;