const galleryActivate = (function (galleryList) {
    if (!galleryList) return;
  
    const maxSlideIndex = galleryList.length - 1;
    let activeSlideIndex = maxSlideIndex;
  
    const checkSlideIndexValue = (index) => {
      if (index > maxSlideIndex) return 0;
  
      if (index < 0) return maxSlideIndex;
  
      return index;
    };
  
    return function (event) {
      if (event.target.id === "next") {
        activeSlideIndex++;
      }
  
      if (event.target.id === "prev") {
        activeSlideIndex--;
      }
  
      activeSlideIndex = checkSlideIndexValue(activeSlideIndex);
  
      for (const item of galleryList) {
        item.style.zIndex = 0;
      }

      galleryList[activeSlideIndex].style.zIndex = 1;
    };
  })(document.getElementById("gallery")?.getElementsByTagName("li"));
  
  document
    .getElementById("gallery-controls")
    .addEventListener("click", galleryActivate);
  