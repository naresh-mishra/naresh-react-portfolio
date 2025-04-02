
import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";


function App() {

  const siteProps = {
    name: "Naresh Mishra",
    title: "Web Designer & Software Developer & Analyst",
    email: "nareshmishra8535@gmail.com",
    gitHub: "https://github.com/naresh-mishra",
    instagram: "https://www.instagram.com/mishra_7_7/",
    linkedIn: "https://www.linkedin.com/in/naresh-ch-mishra/",
    medium: "",
    twitter: "",
    youTube: "",
  };
  
  const primaryColor = "#4E567E";
  const secondaryColor = "#D2F1E4";

  return (
    <>
      <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
      </div>
    </>
  )
}

export default App
