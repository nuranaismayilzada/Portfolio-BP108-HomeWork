import React from "react";
import "./thirdsection.css";

const ThirdSection = () => {
  return (
    <section>
      <div className="container">
        <div className="blogs">
          <h1>Latest Blogs</h1>
          <div className="line"></div>
          <div className="blogsWrapper">
            <div className="firstImg"></div>
            <div className="secondImg"></div>
            <div className="thirdImg"></div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;