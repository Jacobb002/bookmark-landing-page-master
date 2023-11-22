// Features section

const simpleBookmarking = {
  title: "Bookmark in one click",
  description: `Organize your bookmarks however you like. Our simple drag-and-drop
  interface gives you complete control over how you manage your
  favourite sites.`,
  imagePath: `./images/illustration-features-tab-1.svg`,
};

const speedySearching = {
  title: "Intelligent search",
  description: `Our powerful search feature will help you find saved sites in no time at all. 
  No need to trawl through all of your bookmarks.`,
  imagePath: `./images/illustration-features-tab-2.svg`,
};

const easySharing = {
  title: "Share your bookmarks",
  description: `Easily share your bookmarks and collections with others. Create a shareable 
  link that you can send at the click of a button.`,
  imagePath: `./images/illustration-features-tab-3.svg`,
};

const featuresSectionChangeText = (element, featureName) => {
  const image = document.querySelector(".features-img");
  const title = document.querySelector(".features-title");
  const description = document.querySelector(".features-description");
  image.src = element.imagePath;
  title.innerHTML = element.title;
  description.innerHTML = element.description;

  const featuresChooseSection = document
    .querySelector(".features-choose")
    .querySelectorAll("div");
  featuresChooseSection.forEach((element) => {
    if (element.classList.contains("active")) {
      element.classList.remove("active");
    }
  });
  document.querySelector(`.${featureName}`).classList.add("active");
};

const simpleBookmarkingBtn = document.querySelector(".simple-bookmarking");
simpleBookmarkingBtn.addEventListener("click", () => {
  featuresSectionChangeText(simpleBookmarking, "simple-bookmarking");
});

const speedySearchingBtn = document.querySelector(".speedy-searching");
speedySearchingBtn.addEventListener("click", () => {
  featuresSectionChangeText(speedySearching, "speedy-searching");
});

const easySharingBtn = document.querySelector(".easy-sharing");
easySharingBtn.addEventListener("click", () => {
  featuresSectionChangeText(easySharing, "easy-sharing");
});

// FAQ section

const questionBtn = document.querySelectorAll(".question-header");
questionBtn.forEach((element) => {
  element.addEventListener("click", () => {
    if (element.parentElement.classList.contains("active")) {
      element.parentElement.classList.remove("active");
    } else {
      element.parentElement.classList.add("active");
    }
  });
});
