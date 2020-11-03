import React from "react";


/****************************** React Components ******************************/

export default function Anchor(props) {
  return <span id={props.name} className={"anchor"} />
}


/****************************** Utility Functions ******************************/

export const getBrowserHeight = () => {
  //https://stackoverflow.com/questions/1038727/
  return  Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  );
}

export const ajaxRequest = (url) => {
  return new Promise((resolve) => {
    const token = "token  e4377107a5f5c4071797ff3e3d9d3d7f0fd86dec";
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) resolve(JSON.parse(this.responseText))
    };
    xhttp.open("GET", url, true);
    xhttp.setRequestHeader("authorization", token);
    xhttp.send();
    setTimeout(() => {}, 1000)
  })
}
