import React from "react";

function openWebsite(platform) {
    if (platform === "Github") {
      console.log("Opening github")
      window.open("https://github.com/euMts/", "_blank");
    }
    else if (platform === "Linkedin") {
      console.log("Opening linkedin")
      window.open("https://www.linkedin.com/in/matheusetp/", "_blank");
    }
    else if (platform === "Instagram") {
      console.log("Opening instagram")
      window.open("https://www.instagram.com/mts.e/", "_blank");
    }
    else if (platform === "Youtube") {
      console.log("Opening youtube")
      window.open("https://www.youtube.com/channel/UCv3PAuyFwW4BMp-8e34GhpA", "_blank");
    }
    else {
      console.log("Unset platform")
    }
  }

function Container({title, username, logo, data}) { // data = retorno da api
    return (
        <div onClick={() => openWebsite(title)}>
            <img draggable="false" src={ data.profilePic } alt="" />
            <div>
              <h2>{ title }</h2>
              <h1>{ username }</h1>
              <h2>{ data.followers }</h2>
            </div>
            <img draggable="false" src={ logo } alt="" className="socialMedia" />
        </div>
    );
  }

export default Container;