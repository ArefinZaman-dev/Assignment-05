import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import technologies from "../data/technologies.json";
import { useState } from "react";


const TechnologySection = () => {


    const [stack,setStack] = useState([]);



    const addStack = (technology) => {


        const alreadyAdded = stack.find(

            item => item.id === technology.id

        );


        if(alreadyAdded){

            return;

        }


        setStack([

            ...stack,

            technology

        ]);

    }



    const removeStack = (id) => {


        const newStack = stack.filter(

            item => item.id !== id

        );


        setStack(newStack);


    }



    const removeAll = () => {


        setStack([]);


    }



    return(


        <section className="technology-section">


            <div className="section-heading">


                <h2>

                    Explore the 

                    <span>
                        Technologies
                    </span>

                </h2>


                <p>

                    Pick the right tools and technologies to build your next project.

                </p>


            </div>




            <div className="technology-grid">


                {

                    technologies.map(

                        technology => (


                            <TechnologyCard

                                key={technology.id}

                                technology={technology}

                                addStack={addStack}

                                selected={

                                    stack.some(

                                        item => item.id === technology.id

                                    )

                                }

                            />


                        )

                    )

                }


            </div>




            <YourStack

                stack={stack}

                removeStack={removeStack}

                removeAll={removeAll}

            />


        </section>


    )


}


export default TechnologySection;