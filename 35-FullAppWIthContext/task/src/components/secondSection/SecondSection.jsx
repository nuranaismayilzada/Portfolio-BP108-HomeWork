import React from "react";
import "./secondsection.css";

const SecondSection = () => {
  return (
    <section className="secondSEC">
      <div className="container">
        <div className="secondSection">
          <div className="boxWrapper">
            <h1>Deal Of The Week</h1>
            <div className="line"></div>
            <div className="circles">
              <div>
                <h3>2</h3>
                <p>Day</p>
              </div>
              <div>
                <h3>22</h3>
                <p>Hours</p>
              </div>
              <div>
                <h3>46</h3>
                <p>Mins</p>
              </div>
              <div>
                <h3>32</h3>
                <p>Sec</p>
              </div>
            </div>
            <button>SHOP NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;