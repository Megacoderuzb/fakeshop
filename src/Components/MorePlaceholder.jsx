import React from "react";

const PlaceholderCards = () => {
  return (
    <div className="row g-3">
      {Array(1)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="col-12 h-100 pt-5">
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
                <p aria-hidden="true">
                  <span class="placeholder col-12"></span>
                </p>
                <p aria-hidden="true">
                  <span class="placeholder col-6"></span>
                </p>
                <p aria-hidden="true">
                  <span class="placeholder col-6"></span>
                </p>

                <a
                  href="#"
                  tabindex="-1"
                  class="btn btn-primary disabled placeholder col-4"
                  aria-hidden="true"
                ></a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PlaceholderCards;
