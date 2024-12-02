import './Landing.css';
import { useNavigate } from 'react-router-dom';
import Sin from '../components/landing_graph.js';

function Landing() {
  const links = [
    "https://openstax.org/details/books/calculus-volume-3/",
    "https://tutorial.math.lamar.edu/",
    "https://www.khanacademy.org/math/multivariable-calculus/multivariable-derivatives/partial-derivatives/e/basic-partial-derivatives",
    "https://www.ucl.ac.uk/~zcahge7/files/partial.pdf",
    "https://byjus.com/maths/stokes-theorem/#:~:text=The%20Stoke's%20theorem%20states%20that,vector%20function%20around%20that%20surface.%E2%80%9D&text=Where%2C,Any%20surface%20bounded%20by%20C.",
    "https://byjus.com/maths/surface-integral/",
    "The Math 19 Exam Study Guides",
  ];

  const navigate = useNavigate();

  const NavigateToTopics = () => {
    navigate('/topics'); // Use navigate directly here
  };

  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <br></br>
        <br></br>
        <p className="title">
          Math 19 HW Omega
        </p>
        <button className="button" onClick={NavigateToTopics}>Let's get started</button>
        <br />
        <br />
        <br></br>
        <Sin></Sin>
        <br></br>
        <br></br>
        <br></br>

        <h1 className="sub">Sources</h1>
        <ul className="links">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {link}
              </a>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default Landing;
