
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: " Master Class MERN App🎉",
    description:
    "The Master Class MERN App is a robust course marketplace built with MongoDB, Express, React, and Node.js. It enables instructors to showcase and sell courses while offering students a seamless, user-friendly platform for quality learning.",
    url: "https://frontend-masterclass-naresh.onrender.com",
  },
  {
    title: "News Sphere React App🎉",
    description:
      "The News Sphere React App is a dynamic news aggregator built with React that delivers headlines across sports, business, and technology. Its intuitive, block-based layout enables easy navigation and access to the latest news.",
    url: "https://github.com/naresh-mishra/News-sphere-react-app",
  },
  {
    title: "Naresh Mishra's Portfolio(using html,css,js)🎉",
    description:
      "Naresh Mishra's Portfolio is a website built with HTML, CSS, and JavaScript that showcases projects demonstrating creativity and technical expertise. Its intuitive design and smooth navigation offer a seamless browsing experience. Discover my work today.",
    url: "https://naresh-mishra-portfolio.netlify.app/",
  },
  {
    title: "Landing Page🎉",
    description:
      "A sleek, modern landing page built with HTML, CSS, and JavaScript. It features a clean layout, engaging animations, and responsive design—providing visitors with an appealing introduction to the brand and its services.",
    url: "https://codsoft-naresh-landingpage.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 className="project-heading">Projects</h2>
      <div className="project-container">
        <div className="image-container">
          <img
            src={image}
            className="image-project"
            alt={imageAltText}
          />
        </div>
        <div className="inner-project-container">
          {projectList.map((project) => (
             <div className="box"  key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 className="project-title">{project.title}</h3>
              <p className="small">{project.description}</p>
              <p className="link">CHECK IT OUT</p>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
