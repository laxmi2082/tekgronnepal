import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function OurCapabilities() {
  return (
    <section className="py-5 bg-white capabilities">
      <div className="container">
        <h5 className="fw-bolder text-blue text-center">Our Capabilities</h5>
        <h2 className="text-center">
          Bringing your ideas to life with our <br />
          technical expertise
        </h2>
        <div className="row mt-5 gap-4 ">
          <div className="col d-flex flex-column justify-content-center  shadow py-4 px-4">
            <img
              className=""
              src="https://tekgronepal.com.np/wp-content/uploads/2023/04/tekgro-graphics-digital-marketing-01.jpg"
              alt=""
            />
            <h4 className="fw-bold py-3 border-bottom ">Digital Marketing</h4>
            <ul>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Paid Marketing
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> CRO
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Content Marketing
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Email Marketing
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> SMO
              </li>
            </ul>
          </div>
          <div className="col d-flex flex-column justify-content-center  shadow py-4 px-4">
            <img
              className=""
              src="https://tekgronepal.com.np/wp-content/uploads/2023/04/tekgro-graphics-mobile-app-developemt.jpg"
              alt=""
            />
            <h4 className="fw-bold py-3 border-bottom ">Mobile Application</h4>
            <ul>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Unique UI Design
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Clean Development
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Providing Technical Support
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight />
                React Native
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight />
                Quality Assurance & Testing
              </li>
            </ul>
          </div>
          <div className="col d-flex flex-column justify-content-center  shadow py-4 px-4">
            <img
              className=""
              src="https://tekgronepal.com.np/wp-content/uploads/2023/04/tekgro-graphics-web-development.jpg"
              alt=""
            />
            <h4 className="fw-bold py-3 border-bottom ">Web Development</h4>
            <ul>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Development Consulting
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> UX/UI Cool Design
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Software Engineering
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Product Development
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Enhancement
              </li>
            </ul>
          </div>
          <div className="col d-flex flex-column justify-content-center  shadow py-4 px-4">
            <img
              className=""
              src="https://tekgronepal.com.np/wp-content/uploads/2023/04/tekgro-graphics-tech-support.jpg"
              alt=""
            />
            <h4 className="fw-bold py-3 border-bottom ">Technical Support</h4>
            <ul>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Security Management
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Automated Deployments
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Incident Management(SLA)
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> Compliance Monitoring
              </li>
              <li className="mb-2">
                <MdKeyboardDoubleArrowRight /> CI/CD and DevOps
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurCapabilities;
