import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechnologySection from "./components/TechnologySection";
import Footer from "./components/Footer";


const App = () => {

    const [technologies, setTechnologies] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetch("/src/data/technologies.json")

        .then(res => res.json())

        .then(data => {

            setTechnologies(data);

            setLoading(false);

        })

    }, [])

    return (

        <>

            <Navbar />

            <Hero />

            {
                loading ?  <h2> Loading... </h2> :  <TechnologySection technologies={technologies} />

            }

            <Footer />
        </>

    )
}

export default App;