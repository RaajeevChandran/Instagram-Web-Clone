import React from "react";
import "../home.css";
const infocontainer = () => {
  
  
    const personalProfile = () => {
    return (
      <div className="pro">
        <div className="pro-img">
          <div className="pro-img-cir">
            <img
              src={require("../../../Assets/pic.jpeg")}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                objectFit: "cover",
              }}
              alt=""
            />
          </div>
        </div>
        <div className="pro-det">
          <h4 style={{ fontSize: "14px", marginLeft: "5px" }}>
            the_prospective_nomadic
          </h4>
          <h6 style={{ fontSize: "12px", color: "#8e8e8e", marginLeft: "5px" }}>
            Raajeev Chandran
          </h6>
        </div>
      </div>
    );
  };

  
  const suggestions = () => {
    const suggs = [
      {
        name: "Hannah",
        foo: "New to Instagram",
        img:
          "https://expertphotography.com/wp-content/uploads/2020/05/photo-of-woman-wearing-yellow.jpg",
      },
      {
        name: "Charles",
        foo: "Followed by Steve and +3 more",
        img:
          "https://static01.nyt.com/images/2018/01/14/fashion/14MODELS-hooper-alt/merlin_131437524_655fb447-8686-4d72-b3f1-e1e4249e26a2-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
      },
      {
        name: "Olivia",
        foo: "Followed by Cooper and +17 more",
        img: "https://storge.pic2.me/cm/3840x2160/220/5adc4f8867d05.jpg",
      },
      {
        name: "Marcus",
        foo: "Followed by David and +11 more",
        img:
          "https://image.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-red-checkered-shirt-fashion-man-posing_158538-4914.jpg",
      },
      {
        name: "Patrick",
        foo: "Followed by Dan and +5 more",
        img:
          "https://64.media.tumblr.com/469fce1c525715375da12495ac1cb579/tumblr_nv87y1o2Qd1sojd53o5_500.jpg",
      },
    ];
    return (
      <div className="sugg">
        <div className="sugg-title">
          <h3
            style={{
              fontSize: "14px",
              color: "#8e8e8e",
              fontWeight: "600",
              margin: "4px",
            }}
          >
            Suggestions For You
          </h3>
          <h3 style={{ fontSize: "12px", fontColor: "#262626", margin: "4px" }}>
            See All
          </h3>
        </div>
        <div className="sugg-cards">
          {suggs.map((n, index) => {
            return (
              <div className="flr dummy-card" key={index}>
                <div className="grpli dummy-card-cir-con">
                  <div className="cir">
                    <img
                      src={n.img}
                      alt=""
                      style={{
                        objectFit: "cover",
                        width: "30px",
                        height: "30px",
                        borderRadius: "50%",
                        pointerEvents: "none",
                      }}
                    />
                  </div>
                </div>
                <div className="dummy-card-det">
                  <h4
                    style={{
                      fontSize: "14.5px",
                      margin: "2px",
                      textTransform: "lowercase",
                    }}
                  >
                    {n.name}
                  </h4>
                  <h4
                    style={{
                      fontSize: "12px",
                      fontWeight: "400",
                      color: "#8e8e8e",
                      marginLeft: "2px",
                    }}
                  >
                    {n.foo}
                  </h4>
                </div>
                <div className="grpli follow">
                  <h3
                    style={{
                      color: "#0095F6",
                      fontSize: "12px",
                      textAlign: "center",
                    }}
                  >
                    Follow
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const footerTags = () => {
    const footer = [
      "About",
      "Help",
      "Press",
      "API",
      "Jobs",
      "Privacy",
      "Terms",
      "Locations",
      "Top Accounts",
      "Hashtags",
      "Language",
    ];

    return (
      <div className="flr footer-tags">
        {footer.map((foo) => {
          return (
            <h1 style={{ fontSize: "11px" ,color:"#c7c7c7"}} className="footer-tags-content">
              {foo}{" "}
            </h1>
          );
        })}
      </div>
    );
  };

  const copyRight = () => {
    return (
      <div className="flc cpyr">
        <h2
          style={{
            fontSize: "12px",
            color: "#c7c7c7",
            textTransform: "uppercase",
          }}
        >
          &#169; 2020 Instagram Clone by RCN
        </h2>
      </div>
    );
  };

  return (
    <div className="info-container">
      {personalProfile()}
      {suggestions()}
      {footerTags()}
      {copyRight()}
    </div>
  );
};

export default infocontainer;
