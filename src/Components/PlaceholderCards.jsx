import React from "react";

const PlaceholderCards = () => {
  return (
    <div className="row g-3">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="col-md-6 col-lg-3">
            <div className="card overflow-hidden" aria-hidden="true">
              <div className="placeholder-card-image d-flex align-items-center justify-content-center card-image-top bg-light">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title placeholder-glow">
                  <span className="placeholder col-6"></span>
                </h5>
                <p className="card-text placeholder-glow">
                  <span className="placeholder col-7"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-4"></span>
                  <span className="placeholder col-6"></span>
                  <span className="placeholder col-8"></span>
                </p>
                <div className="d-flex gap-2">
                  <a
                    href="#"
                    tabIndex="-1"
                    className="btn btn-primary disabled placeholder col-6"
                  ></a>
                  <a
                    href="#"
                    tabIndex="-1"
                    className="btn btn-success disabled placeholder col-6"
                  ></a>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlaceholderCards;
