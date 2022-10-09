import React from "react";
import "../App.css";
export default function About(props) {

  return (
      <div className="container">
      <h1 className="my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>{props.name}</h1>
          <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>Who is the Developer.</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'? 'white' : 'black', color: props.mode === "dark" ? "black" : "white" }}>
        <p>Hi My Name is <strong>Aman Raj Yadav. 😎</strong><br />
          I Am a Full Stack Web Developer 👩🏻‍💻, And i have developed lots of project for self learning <br />
          And even this React Web App developed by me<br/>
          I Have Completed my Master's in Computer Science.<br/>
          </p>
      </div>
    </div>
  </div>
</div>  

  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button  className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <strong>About This Web App</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{backgroundColor: props.mode === 'dark'? 'white' : 'black', color: props.mode === "dark" ? "black" : "white" }}>
        <p>
          This is a text Utility React JS Web App.<br/>
            This web App help you to convert text in UpperCase,LowerCase, More are coming........
            <br/>
            And Even You can use it has word Counter and even character Counter.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
