/**
 * Generic function for building elements within a component
 * @param input (object) {
 *    tagName: "",
 *    content: any,
 *    classList: [],
 *    parent: Element,
 *    attributes: [ [name, value] ]
 * }
 */
function buildElement ({tagName, content, classList, parent, attributes}) {
   // create element
   const newElement = document.createElement(tagName);

   //add properties
   if (content) newElement.textContent = content;
   if (classList) classList.forEach(className => {
      newElement.classList.add(className);
   });
   if (attributes) attributes.forEach(([name, value]) => {
      newElement.setAttribute(name, value);
   });

   //append to parent
   parent.appendChild(newElement);

   //return element
   return newElement;
}