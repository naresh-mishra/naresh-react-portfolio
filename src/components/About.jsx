
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
 "I'm a web developer, currently pursuing an MCA at Uttarakhand Technical University. I enjoy creating unique and simplistic user interfaces in creative ways.";


const skillsList = [
  "Web design",
  "User experience",
  "Inclusive design",
  "Database-SQL",
  "Data Analytics",
  "Creative Design"
];

const detailOrQuote =
  "I am passionate about solving problems in new, creative ways to drive innovation. By leveraging my web development experience, I continually seek new and better ways to make technology accessible to all.";
const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        className="about-container"
      >
        <h2 style={{fontWeight:"bold"}}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          className="skills"
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="about-last-p">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
