import { useEffect, useState } from "react";

import { toast } from "react-toastify";


import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import TechnologySection from "./components/TechnologySection";

import YourStack from "./components/YourStack";

import Footer from "./components/Footer";



const App = () => {


    const [technologies, setTechnologies] = useState([]);


    const [loading, setLoading] = useState(true);


    const [stack, setStack] = useState([]);



    useEffect(() => {


        fetch("/src/data/technologies.json")


        .then(res => res.json())


        .then(data => {


            setTechnologies(data);


            setLoading(false);


        })


    }, [])



    const addToStack = (technology) => {


        const alreadyAdded = stack.find(

            item => item.id === technology.id

        );



        if(alreadyAdded){


            toast.error("Already Added");


            return;


        }



        setStack([...stack, technology]);



        toast.success(

            `${technology.name} Added`

        );


    }




    const removeFromStack = (id) => {


        const removedTechnology = stack.find(

            item => item.id === id

        );



        const remainingStack = stack.filter(

            item => item.id !== id

        );



        setStack(remainingStack);



        toast.info(

            `${removedTechnology.name} Removed`

        );


    }




    const removeAll = () => {


        setStack([]);



        toast.success(

            "Stack Cleared"

        );


    }




    return (


        <>


            <Navbar />


            <Hero />


            {


                loading

                ?

                <h2>
                    Loading...
                </h2>


                :


                <>


                    <TechnologySection

                        technologies={technologies}

                        addToStack={addToStack}

                        stack={stack}

                    />



                    <YourStack

                        stack={stack}

                        removeFromStack={removeFromStack}

                        removeAll={removeAll}

                    />


                </>


            }



            <Footer />


        </>

    )

}


export default App;