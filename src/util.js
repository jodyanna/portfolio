

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