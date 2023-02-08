// Make The List
let listButton = document.querySelector("header .container i ");
let list = document.querySelector("header .list");
listButton.onclick = function (e) {
  list.classList.toggle("show");
};

// Making The About Us Transition
let aboutSection = document.querySelector(".about-us");
let aboutHeading = document.querySelector(".about-us .main-heading");
let aboutBoxes = document.querySelectorAll(".about-us .box");

window.onscroll = function () {
  if (elementAppearInView(aboutSection)) {
    aboutHeading.style.opacity = "1";
  }

  // For Larg Screens
  if (window.innerWidth >= 991) {
    if (elementAppearInView(aboutBoxes[0])) {
      let i = 0;
      let counter = setInterval(function () {
        if (i < aboutBoxes.length) {
          aboutBoxes[i].style.animation = "show-boxes 1s .4s forwards";
          i++;
        } else {
          clearInterval(counter);
        }
      }, 200);
    }
    // For Small Screens
  } else {
    aboutBoxes.forEach((ele) => {
      if (elementAppearInView(ele)) {
        ele.style.animation = "show-boxes 1s  forwards";
      }
    });
  }
};

function elementAppearInView(element) {
  let pageHeight = document.documentElement.clientHeight;
  let rect = element.getBoundingClientRect();
  let theTopOfElement = rect.y;
  let heightOfElement = rect.height;
  if (pageHeight > theTopOfElement + (heightOfElement * 1) / 4) {
    return true;
  } else return false;
}

// Make The Element Appear
function opacityOne(element) {
  element.style.opacity = "1";
}

//Making The Services Animation
let servicesSection = document.querySelector(".services");
let servicesHeading = document.querySelector(".services .main-heading");
let servicesBox = document.querySelectorAll(".services .boxes .box");
let servicesBoxes = document.querySelector(".services .container .boxes");

window.addEventListener("scroll", function () {
  if (elementAppearInView(servicesSection)) {
    opacityOne(servicesHeading);
  }
  let pageHeight = document.documentElement.clientHeight;

  if (window.innerWidth > 776) {
    if (elementAppearInView(servicesBoxes)) {
      showBox(servicesBox);
    }
  } else {
    servicesBox.forEach((ele) => {
      if (elementAppearInView(ele)) {
        ele.style.animation = "show-boxes 1s  forwards";
      }
    });
  }
});

//Making the progress Transition

let skillsSection = document.querySelector(".skills");
let skillsHeading = document.querySelector(".skills .main-heading ");
let doneProgress = document.querySelectorAll(".skills .skill .done");
let skillsContainer = document.querySelectorAll(".skills .container");
doneProgress.forEach((ele) => {});
window.addEventListener("scroll", function () {
  if (elementAppearInView(skillsSection)) {
    opacityOne(skillsHeading);
    doneProgress.forEach((ele) => {
      ele.style.width = `${ele.dataset.prog}`;
    });
  }
});

// Making The popup pics
let iconButton = document.querySelectorAll(
  ".portfolio .container .image .info i"
);
let portfolioSection = document.querySelector(".portfolio");
iconButton.forEach((button) => {
  button.addEventListener("click", function () {
    let involvedImage =
      button.parentElement.parentElement.previousElementSibling;
    let layout = document.createElement("div");
    layout.classList.add("layout");
    document.body.prepend(layout);
    // Creat The Image Div
    let imagePop = document.createElement("div");
    portfolioSection.prepend(imagePop);
    imagePop.classList.add("popup");

    //Creat The X Button
    let xButton = document.createElement("i");
    imagePop.appendChild(xButton);
    xButton.classList.add("fa-solid");
    xButton.classList.add("fa-xmark");
    xButton.classList.add("x-button");

    // Creat The Image
    let theImage = document.createElement("img");
    theImage.src = involvedImage.src;

    // Creat ImageContainer
    let imageContaienr = document.createElement("div");
    imageContaienr.appendChild(theImage);
    imagePop.appendChild(imageContaienr);
    imageContaienr.classList.add("image-container");
    // Make The Exit Action To Button
    xButton.onclick = function () {
      layout.style.animation = "close-image .8s forwards";
      imagePop.style.animation = "close-image .8s forwards";
      setTimeout(() => {
        layout.remove();
        imagePop.remove();
      }, 200);
    };

    // Make The Action to Layout Exit
    layout.onclick = function () {
      layout.style.animation = "close-image .5s forwards";
      imagePop.style.animation = "close-image .5s forwards";
      setTimeout(() => {
        layout.remove();
        imagePop.remove();
      }, 500);
    };
  });
});

// Making The Filter Action
let catigo = document.querySelectorAll(".portfolio ul li");
let imagesBoxes = document.querySelectorAll(".portfolio .container .image");

catigo.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    // Making The Active Class ON Clicked
    makeTheClickedActive(catigo, e.target);

    // Display The Involved Pics
    let clickedCatigory = e.target.dataset.cat;
    imagesBoxes.forEach((imageBox) => {
      if (imageBox.classList.contains(clickedCatigory)) {
        imageBox.style.animation = "scale-in-appear 1s forwards";
        setTimeout(() => {
          imageBox.style.display = "inline-block";
        }, 500);
      } else {
        imageBox.style.animation = "scale-out-disappear 1s forwards";
        setTimeout(() => {
          imageBox.style.display = "none";
          // imageBox.remove();
        }, 500);
      }
    });
  });
});

// Animation fro Stats Boxes
let statSection = document.querySelector(".stats");
let statBoxes = document.querySelectorAll(".stats .stat");
appearElemetnLikeStairsTwo(statBoxes);

window.addEventListener("scroll", function () {
  if (elementAppearInView(statSection)) {
    let i = 0;
    statBoxes.forEach((box) => {
      box.style.animation = `show-box-from-top .5s forwards`;
      box.style.animationDelay = `${i}s`;
      i += 0.2;
    });
  }
});

// appear ELement Animation form Top According on Section
function appearElemetnLikeStairs(section, arrBoxes) {
  window.addEventListener("scroll", function () {
    if (elementAppearInView(section)) {
      let i = 0;
      arrBoxes.forEach((box) => {
        box.style.animation = `show-box-from-top .5s forwards`;
        box.style.animationDelay = `${i}s`;
        i += 0.2;
      });
    }
  });
}

// appear ELement Animation form Top According on Boxes
function appearElemetnLikeStairsTwo(arrBoxes) {
  let i = 0;
  window.addEventListener("scroll", function () {
    arrBoxes.forEach((box) => {
      if (elementAppearInView(box)) {
        box.style.animation = `show-box-from-top .5s forwards`;
        box.style.animationDelay = `${i}s`;
        i += 0.2;
      }
    });
  });
}

let teamSection = document.querySelector(".team");
let teamHeading = document.querySelector(".team .main-heading");
let teamBoxes = document.querySelectorAll(".team .boxes .box");
let teamContainer = document.querySelector(".team .container");
// Making The Team Heading Animation
window.addEventListener("scroll", function () {
  if (elementAppearInView(teamSection)) {
    teamHeading.style.animation = "show-boxes .5s forwards";
  }
});

// Making The Boxes Appearence
appearElemetnLikeStairs(teamContainer, teamBoxes);

let plansSection = document.querySelector(".plans");
let plansHeading = document.querySelector(".plans .main-heading");
let plansBoxes = document.querySelectorAll(".plans .boxes .box");
let plansBoxesCont = document.querySelector(".plans .boxes ");
window.addEventListener("scroll", function () {
  if (elementAppearInView(plansSection)) {
    plansHeading.style.animation = "show-box-from-top 1s forwards";
  }
  if (elementAppearInView(plansBoxesCont)) {
    showBox(plansBoxes);
  }
});

// MAking The SLide Show
let next = document.querySelector(".opinion .container .next i");
let prev = document.querySelector(".opinion .container .prev");
let clients = document.querySelectorAll(".opinion .container .client");
let clientsCont = document.querySelector(".opinion .container .clients");
let slideCont = document.querySelector(".opinion .container");
let counter = 1;
let width = clients[0].clientWidth;

let widthTra = width * counter;
clientsCont.style.transform = `translateX(-${widthTra}px)`;

window.onresize = function () {
  width = clients[0].clientWidth;
  widthTra = width * counter;
  clientsCont.style.transform = `translateX(-${widthTra}px)`;
};

next.addEventListener("click", function () {
  setTimeout(() => {
    clientsCont.style.transition = `0.4s`;
    counter++;
    widthTra = width * counter;
    clientsCont.style.transform = `translateX(-${widthTra}px)`;
  }, 100);
});

prev.addEventListener("click", function () {
  setTimeout(() => {
    clientsCont.style.transition = `0.4s`;
    counter--;
    widthTra = width * counter;
    clientsCont.style.transform = `translateX(-${widthTra}px)`;
  }, 100);
});

clientsCont.addEventListener("transitionend", function () {
  if (clients[counter].id == "last") {
    clientsCont.style.transition = "none";
    counter = 1;
    widthTra = width * counter;
    clientsCont.style.transform = `translateX(-${widthTra}px)`;
  }
  if (clients[counter].id == "first") {
    clientsCont.style.transition = "none";
    counter = clients.length - 2;
    widthTra = width * counter;
    clientsCont.style.transform = `translateX(-${widthTra}px)`;
  }
});

// Switch The SLide Every 5 Sec
setInterval(() => {
  next.click();
}, 5000);

// End THe Slide Show

//MAking The Appearance Of the Blog Section Heading
let blogSection = document.querySelector(".blog");
let blogHeading = document.querySelector(".blog .main-heading");
window.addEventListener("scroll", function () {
  if (elementAppearInView(blogSection)) {
    blogHeading.style.animation = "show-box-from-top 1s forwards";
  }
});

// Making The Boses Showing to the Blog Section
let blogBoxes = document.querySelectorAll(".blog .container .boxes .box");
let blogBoxesCont = document.querySelector(".blog .container .boxes");
window.addEventListener("scroll", function () {
  if (elementAppearInView(blogBoxesCont)) {
    showBox(blogBoxes);
  }
});

function showBox(servicesBoxes) {
  let i = 0;
  let counter = setInterval(function () {
    if (i < servicesBoxes.length) {
      servicesBoxes[i].style.animation = "show-boxes .7s  forwards";
      i++;
    } else clearInterval(counter);
  }, 200);
}

// MAking The Contact Us Appearace
let contactSection = document.querySelector(".contact");
let contactHeading = document.querySelector(".contact .main-heading");
let contactBoxes = document.querySelectorAll(".contact .box");
let contactBoxesCon = document.querySelector(".contact .container");

window.addEventListener("scroll", function () {
  if (elementAppearInView(contactSection)) {
    opacityOne(contactHeading);
  }
  if (elementAppearInView(contactBoxesCon)) {
    showBox(contactBoxes);
  }
});

// Active CLass Function
function makeTheClickedActive(arrOfElement, tar) {
  arrOfElement.forEach((ele) => {
    ele.classList.remove("active");
  });
  tar.classList.add("active");
}

let sections = document.querySelectorAll("header .container .links li>a");
let homeLink = document.querySelector("header .links li:nth-child(1)>a");
let aboutLink = document.querySelector("header .links li:nth-child(2)>a");
let serLink = document.querySelector("header .links li:nth-child(3)>a");
let porLink = document.querySelector("header .links li:nth-child(4)>a");
let teamLink = document.querySelector("header .links li:nth-child(5)>a");
let priceLink = document.querySelector("header .links li:nth-child(6)>a");
let blogLink = document.querySelector("header .links li:nth-child(7)>a");
let contLink = document.querySelector("header .links li:nth-child(8)>a");

window.addEventListener("scroll", function () {
  if (elementAppearInView(home)) {
    makeTheClickedActive(sections, homeLink);
  }
  if (elementAppearInView(about)) {
    makeTheClickedActive(sections, aboutLink);
  }
  if (elementAppearInView(services)) {
    makeTheClickedActive(sections, serLink);
  }
  if (elementAppearInView(portfolio)) {
    makeTheClickedActive(sections, porLink);
  }
  if (elementAppearInView(team)) {
    makeTheClickedActive(sections, teamLink);
  }
  if (elementAppearInView(price)) {
    makeTheClickedActive(sections, priceLink);
  }
  if (elementAppearInView(blog)) {
    makeTheClickedActive(sections, blogLink);
  }
  if (elementAppearInView(contact)) {
    makeTheClickedActive(sections, contLink);
  }
});
