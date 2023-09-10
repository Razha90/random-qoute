function addClassToElements(classNameToAdd, targetClassName) {
    const elements = document.querySelectorAll(`.${targetClassName}`);
    elements.forEach((element) => {
      element.classList.add(classNameToAdd);
    });
  }

  export default addClassToElements;