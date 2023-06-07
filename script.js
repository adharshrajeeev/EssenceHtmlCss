const toggleBtn = document.querySelector('.toogle_btn');
const dropDownMenu = document.querySelector('.dropDownMenu');

toggleBtn.addEventListener("click", () => {
    console.log(dropDownMenu)
    if (dropDownMenu.style.display === "none") {
        dropDownMenu.style.display = "block";
        console.log(dropDownMenu)
    
    } else {
        dropDownMenu.style.display = "none";
    }
});

// SLIDE SECTION
var imageUrls = [
    "./assets/slides/image1.jpg",
    "./assets/slides/image2.jpg",
    "./assets/slides/image3.jpg"
  ];
  var currentIndex = 0;
  var banner = document.querySelector(".banner");

  function changeBackgroundImage(index) {
    banner.style.backgroundImage = "url('" + imageUrls[index] + "')";
  }

  function handleLeftIconClick() {
    currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
    changeBackgroundImage(currentIndex);
  }

  function handleRightIconClick() {
    currentIndex = (currentIndex + 1) % imageUrls.length;
    changeBackgroundImage(currentIndex);
  }

  var leftIcon = document.querySelector(".fa-chevron-left");
  var rightIcon = document.querySelector(".fa-chevron-right");

  leftIcon.addEventListener("click", handleLeftIconClick);
  rightIcon.addEventListener("click", handleRightIconClick);