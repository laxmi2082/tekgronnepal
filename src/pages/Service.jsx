import React from "react";
import { RiUser3Line } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineProject } from "react-icons/ai";
import { SiCodecrafters } from "react-icons/si";
import { IoBriefcaseOutline } from "react-icons/io5";
import { BsRocket } from "react-icons/bs";

function Service() {
  return (
    <>
      <section className="py-5 bg-white">
        <div className="container border-bottom pb-5">
          <div className="row gap-3">
            <div className="col rounded-2 shadow py-5 text-center">
              <RiUser3Line className="icons text-blue" />
              <h5 className="fw-bold mt-3">IT Consulting</h5>
            </div>
            <div className="col rounded-2 shadow py-5 text-center">
              <IoSettingsOutline className="icons text-blue" />
              <h5 className="fw-bold mt-3">Tech Support</h5>
            </div>
            <div className="col rounded-2 shadow py-5 text-center">
              <AiOutlineProject className="icons text-blue" />
              <h5 className="fw-bold mt-3">Application</h5>
            </div>
            <div className="col rounded-2 shadow py-5 text-center">
              <SiCodecrafters className="icons text-blue" />
              <h5 className="fw-bold mt-3">Development</h5>
            </div>
            <div className="col rounded-2 shadow py-5 text-center">
              <IoBriefcaseOutline className="icons text-blue" />
              <h5 className="fw-bold mt-3">SEO Optimize</h5>
            </div>
            <div className="col rounded-2 shadow py-5 text-center">
              <BsRocket className="icons text-blue" />
              <h5 className="fw-bold mt-3">Business Dev</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Service;
