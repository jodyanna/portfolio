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
    const token = "token dfdb26a22b2f148ab53a863f8dad185d792afdd2";
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

export const roundDecimal = (num, exp) => {
  const precision = 10**exp;

  return Math.round((num + Number.EPSILON) * precision) / precision;
}

export const lowerFirstChar = (string) => {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
