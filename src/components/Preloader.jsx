import React from "react";
import "./preloader.css";

const Preloader = () => {

  return (

    <div className="preloader-wrapper">

      <div className="container-fluid h-100">

        <div className="row h-100 justify-content-center align-items-center">

          <div className="col-12 text-center">

            {/* TITLE */}

            <h1 className="loader-title">
              DEVK
            </h1>

            {/* SUBTITLE */}

            <p className="loader-subtitle">
              Cinematic Photography Experience
            </p>

            {/* LOADING LINE */}

            <div className="loader-line-wrapper">

              <div className="loader-line">

                <div className="camera-move">
                  📷
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

};

export default Preloader;