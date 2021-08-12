import React from "react";
import GlowText from "../../partials/GlowText";

const Carousel = () => {
  const Images = [
    {
      caption: "Sunset",
      image:
        "https://ik.imagekit.io/pvsizywre9b/sunset_JMB1MSYDN1e.jpg?updatedAt=1628227446027"
    },
    {
      caption: "EarthLine",
      image:
        "https://ik.imagekit.io/pvsizywre9b/earthLine_DzubtYy0A.jpg?updatedAt=1628227661351&tr=w-1200,h-628,fo-auto"
    },
    {
      caption: "Signature of Bangladesh",
      image:
        "https://ik.imagekit.io/pvsizywre9b/signatureOfBangladesh_phpYc_q2W.jpg?updatedAt=1628228739370"
    }
  ];
  return (
    <React.Fragment>
      <GlowText first="P" second="hoto" third="g" fourth="raphy" />
      <div
        id="photography"
        className="carousel slide mt-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#photography"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#photography" data-slide-to="1"></li>
          <li data-target="#photography" data-slide-to="2"></li>
         
        </ol>
        <div
          className="carousel-inner"
          //   style={{ height: "400px", objectFit: "contain" }}
        >
          {Images.map((img, index) => (
            <div
              className={index === 0 ? "carousel-item active" : "carousel-item"}
              key={index}
            >
              <img
                src={img.image}
                className="d-block w-100"
                alt="..."
                height="400px"
                style={{ objectFit: "contain" }}
              />
              <div className="carousel-caption d-none d-md-block">
                <p>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
        <a
          className="carousel-control-prev"
          href="#photography"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#photography"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Carousel;
