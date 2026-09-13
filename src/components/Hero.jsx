import bannerStack from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Build Your Ideal
          <br />
          <span>Development Stack</span>
        </h1>

        <p>
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="hero-buttons">
          <a href="#technologies" className="primary-btn">
            Explore Technologies
          </a>

          <button className="secondary-btn">Learn More</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={bannerStack} alt="Development Stack" />
      </div>
    </section>
  );
};

export default Hero;
