import React from 'react'
import aboutImage from "../assets/ComboLogo01.png";
import Contact from "../components/Contact";  

function About() {
  return (
    <div id="about" className="container my-3 p-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12 py-5 mx-auto">
          <div className="photo-wrap mb-4 py-2">
            <img
              className="aboutimage"
              style={{ height: 250 }}
              src={aboutImage}
              alt="aboutimage"
            />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading mx-auto py-5">What We Do</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam est
            harum sequi enim facere quia cumque tempora velit molestiae dolore
            eos quod eius aut dolorum rerum suscipit ad, repudiandae, quibusdam
            assumenda corrupti at facilis reprehenderit minima! Reiciendis
            dolores cum esse animi, omnis natus laborum rem autem optio hic
            minus officia temporibus!
          </p>
        </div>
      </div>
      <div id="classes" className="myClasses">
        <div className="d-flex justify-content-center my-5 ">
          <h1 className="about-title">My Services</h1>
        </div>
        <div
          className="container myClasses-wrapper rounded"
          style={{ backgroundColor: "#2A2928" }}
        >
          {/*  */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h2 className="about-text py-2">Auto</h2>
              <p className="cardText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                quasi aliquam illum enim maiores praesentium ducimus asperiores,
                blanditiis nostrum, nemo delectus tempora accusantium harum,
                earum iste dicta vero ut a?
              </p>
            </div>
          </div>
          {/*  */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h2 className="about-text py-2">Seat Belts</h2>
              <p className="cardText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                quasi aliquam illum enim maiores praesentium ducimus asperiores,
                blanditiis nostrum, nemo delectus tempora accusantium harum,
                earum iste dicta vero ut a?
              </p>
            </div>
          </div>
          {/*  */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"> </div>
            <div className="timeline-content">
              <h2 className="about-text py-2">Steering Wheels</h2>
              <p className="cardText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                quasi aliquam illum enim maiores praesentium ducimus asperiores,
                blanditiis nostrum, nemo delectus tempora accusantium harum,
                earum iste dicta vero ut a?
              </p>
            </div>
          </div>
          {/*  */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"> </div>
            <div className="timeline-content">
              <h2 className="about-text py-2">Custom Work</h2>
              <p className="cardText">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                quasi aliquam illum enim maiores praesentium ducimus asperiores,
                blanditiis nostrum, nemo delectus tempora accusantium harum,
                earum iste dicta vero ut a?
              </p>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default About