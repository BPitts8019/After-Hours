function buildElement (tagName, content = null, className = null, url = null) {
   // create element
   const tag = document.createElement(tagName);

   //add properties
   if (content) tag.textContent = content;
   if (className) tag.classList.add(className);
   if (url && tag.src !== undefined) tag.src = url;
   if (url && tag.href !== undefined) tag.href = url;

   //append to parent

   //return element
   return tag;
}