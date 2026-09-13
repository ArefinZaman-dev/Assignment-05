import TechnologyCard from "./TechnologyCard";

const TechnologySection = ({ technologies, addToStack, stack }) => {
  return (
    <section className="technology-section">
      <div className="section-heading">
        <h2>
          Explore the
          <span>Technologies</span>
        </h2>

        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className="technology-grid">
        {technologies.map((item) => (
          <TechnologyCard
            key={item.id}
            technology={item}
            addToStack={addToStack}
            isAdded={stack.some((tech) => tech.id === item.id)}
          />
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
