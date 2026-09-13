import { useState } from "react";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/Navbar";

import Hero from "./components/Hero";

import TechnologySection from "./components/TechnologySection";

import YourStack from "./components/YourStack";

import Footer from "./components/Footer";

import technologiesData from "./data/technologies.json";

const App = () => {
  const [stack, setStack] = useState([]);

  const addToStack = (technology) => {
    const exists = stack.find((item) => item.id === technology.id);

    if (exists) {
      toast.warning("Technology already added");

      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added`);
  };

  const removeStack = (id) => {
    const removed = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    toast.error(`${removed.name} removed`);
  };

  const removeAll = () => {
    setStack([]);

    toast.error("All technologies removed");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main className="main-content">
        <TechnologySection
          technologies={technologiesData}
          addToStack={addToStack}
          stack={stack}
        />

        <YourStack
          stack={stack}
          removeStack={removeStack}
          removeAll={removeAll}
        />
      </main>

      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </>
  );
};

export default App;
