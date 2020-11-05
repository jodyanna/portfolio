import React from "react";


/****************************** React Components ******************************/

export default function Anchor(props) {
  return <span id={props.name} className={"anchor"} />
}


/****************************** Utility Functions ******************************/

export const ajaxRequest = (url) => {
  return new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) resolve(JSON.parse(this.responseText))
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("authorization", process.env.REACT_APP_GITHUB_API_TOKEN);
    xhttp.send();
    setTimeout(() => {}, 1000)
  })
}
