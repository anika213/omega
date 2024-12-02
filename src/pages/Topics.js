import './Topics.css';
import { useNavigate } from 'react-router-dom';
import TopicCard from '../components/TopicCard.js';
const topics = [
    {
      name: "Level Curves",
      colorCode: "#39FF14",
      description: "A visual representation of a two-variable function, f(x,y) in the xy-plane.",
      tip: "Find a set of values that satisfy f(x, y) = c, and set your equation f(x,y) equal to each of these values to represent your equation in the xy-plane.",
      question: "/images/questions/level_curves.png",
      formulaImage: "/images/formulas/level_curves.png",
    },
    {
      name: "Vectors",
      colorCode: "#00FFFF",
      description: "Includes vector algebra such as the dot and cross products, the different versions of equations of lines and planes",
      tip: "Wrap your head around the interpretations of the dot and cross product;Learn to convert between vector, parametric and symmetric versions of equations of lines; There are numerous pieces of information that can help you obtain the equation of a plane - a normal vector and a point, 3 points, the equation of a line and a point",
      question: "../images/questions/vectors.png",
      formulaImage: "../images/formulas/vectors.png",
    },
    {
      name: "Multivariable Limits",
      colorCode: "#FF1493",
      description: "An extension of the concept of limits from single-variable calculus, but with multiple paths of approach",
      tip: "Make sure you approach the limits from more than 2 paths before concluding that a limit exits",
      question: "../images/questions/limits.png",
      formulaImage: "../images/formulas/limits.png",
    },
    {
        name: "Partial derivatives",
        colorCode: "#FFBF00",
        description: "Measuring the rate of change of a function with respect to one of its variables, while keeping the other variables constant. Includes mixed partials and second-order partial derivatives.",
        tip: "The concept of derivatives is not novel to multivariate calculus, but is prone to algebra errors quite often, so be mindful; Remember that if the function has continuous second-order partial derivatives, then the mixed partials are equal; Geometrically, partial derivatives are the slope of the tangent plane to a surface at a given point (in the direction of the respective axis)",
        question: "../images/questions/partial_derivatives.png",
        formulaImage: "../images/formulas/partial_derivatives.png",
      },
      {
        name: "Tangent Planes",
        colorCode: "#8A2BE2",
        description: "A tangent plane is a flat plane that touches a curved surface at a specific point",
        tip: "Remember that a tangent plane can help you find a linear approximation; Be careful when you’re working with implicit surfaces (when you are not given a surface in the form of f(x,y) = z)",
        question: "../images/questions/tangent_planes.png",
        formulaImage: "../images/formulas/tangent_planes.png",
      },
      {
        name: "The Jacobian and chain rule",
        colorCode: "#FF4500",
        description: "The Jacobian is a matrix of first-order partial derivatives, and the chain rule helps in finding the derivative of composite functions using the Jacobian.",
        tip: "Use a tree diagram to keep track of your variables; Judge the dimensions of your matrix before multiplying them to ensure it can be carried out",
        question: "../images/questions/jacobian.png",
        formulaImage: "../images/formulas/jacobian.png",
      },
      {
        name: "Directional derivatives",
        colorCode: "#CCFF00",
        description: " Measures how a function changes as you move in a specific direction (as opposed to a coordinate axis)",
        tip: "If you are given the direction of a vector to find a directional derivative in, remember to normalize it and obtain a unit vector; also remember the interpretation of moving in the direction of, opposite and perpendicular to the gradient.",
        question: "../images/questions/directionals.png",
        formulaImage: "../images/formulas/directionals.png",
      },
      {
        name: "DEL operations",
        colorCode: "#00BFFF",
        description: " The del operator (∇) helps us find the gradient, divergence and curl in multivariable calculus",
        tip: "Understand how div and curl link to the Gauss’s divergence theorem and Stokes’ Theorem; and the interpretation of flux, rotation, source and sink; try to visualise this using vector field simulations.",
        question: "../images/questions/DEL.png",
        formulaImage: "../images/formulas/DEL.png",
      },
        {
        name: "Critical points, The Hessian, Lagrange Multipliers",
        colorCode: "#FF69B4",
        description: " These are used to find and classify the critical points of a function, and in constrained optimization problems.",
        tip: "Make sure you evaluate the Hessian correctly, use systems of equations for Lagrange multipliers.",
        question: "../images/questions/hessian.png",
        formulaImage: "../images/formulas/hessian.png",
      },
      {
        name: "Surface integrals & Green’s, Stokes’, Gauss’s Theorems",
        colorCode: "#32CD32",
        description: "Surface integrals extend integration to surfaces; Green, Stokes, and Gauss connect these to line+volume integrals.",
        tip: "Understanding the concepts of surface integrals, Green’s Theorem, Stokes’ Theorem, and Gauss’s Theorem (Divergence Theorem) is crucial for advanced calculus and physics applications. Surface integrals extend the idea of line integrals to two-dimensional surfaces, calculating flux across a surface in 3D space. Green’s Theorem connects the circulation around a simple closed curve to the double integral of the curl inside the curve, simplifying work or flux calculations in the plane. Stokes’ Theorem generalizes this to 3D, equating the flux of the curl of a vector field through a surface to the circulation along its boundary. Gauss’s Theorem relates the divergence of a vector field over a volume to the flux through its enclosing surface, providing a powerful tool in fluid dynamics and electromagnetism. To master these, visualize the physical significance, understand boundary conditions, and practice transitioning between integral forms using parameterizations or transformations.",
        question: "../images/questions/greens.png",
        formulaImage: "../images/formulas/greens.png",
      },
      {
        name: "Double and triple integrals",
        colorCode: "#FF8C00",
        description: "These enable us to integrate over 2D and 3D regions to find area and volume, often using parametrizations.",
        tip: "Switch to polar/cylindircal/spherical coordinates if necessary; You may have to switch the order of integration, so ensure you draw a region that helps you do so; Double-check your bounds.",
        question: "../images/questions/double.png",
        formulaImage: "../images/formulas/double.png",
      },
      {
        name: "Line Integrals",
        colorCode: "#40E0D0",
        description: "Line integrals integrate multivariable functions and vector fields over arbitrary curves.",
        tip: "Always paramatrize your curve first, make sure you remember that if a vector field is conservative, then the line integral is independent of the path taken, the orientation of your curve is very important to note, ensure you make use of Green’s, Stokes’ and Gauss’s Theorem based on context.",
        question: "../images/questions/line.png",
        formulaImage: "../images/formulas/line.png",
      },


    // Add more topics as needed
  ];
function Topics() {
   

  const navigate = useNavigate();

  return (
    <div className="App">
      <h1>Topics</h1>
      <div className="topic-cards-container">
        {topics.map((topic, index) => (
          <TopicCard
            key={index}
            topic={topic}
            onClick={() => navigate(`/topic/${index}`)} // Pass index for dynamic routing
          />
        ))}
      </div>
    </div>
  );
}

export {Topics, topics};
