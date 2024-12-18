function customRender(element, container) {
  //   const domElement = document.createElement(element.type);
  //   domElement.innerHTML = element.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props);
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "click me ",
};
const mainContainer = document.querySelector("#root");
// js 与 dom 组合
customRender(reactElement, mainContainer);
