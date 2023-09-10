function removeClassFromElements(classNameToRemove, targetClassName) {
    const elements = document.querySelectorAll(`.${targetClassName}`);
    elements.forEach((element) => {
      element.classList.remove(classNameToRemove);
    });
  }

export default removeClassFromElements;