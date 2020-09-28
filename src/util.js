import React from "react";


export const setSectionHeight = () => {
  //https://stackoverflow.com/questions/1038727/
  document.getElementsByTagName("section")[0].style.height = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.documentElement.clientHeight
  ).toString() + "px";
}

export const ajaxRequest = (url) => {
  return new Promise((resolve) => {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) resolve(JSON.parse(this.responseText))
    };
    xhttp.open("GET", url, true);
    xhttp.send();
    setTimeout(() => {}, 1000)
  })
}

export const roundDecimal = (num, exp) => {
  const precision = Math.pow(10, exp);

  return Math.round((num + Number.EPSILON) * precision) / precision;
}

export const lowerFirstChar = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
}


/****************************** React Components ******************************/

export default function Anchor(props) {
  return <span id={props.name} className={"anchor"} />
}