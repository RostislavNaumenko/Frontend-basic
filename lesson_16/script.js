const changeImgButton = document.getElementById("button-change");

const getImg = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      let img = document.createElement("img");
      img.classList.add("dog-img");
      img.id = "dog";
      img.src = data.message;
      document.body.appendChild(img);
    });
};
getImg();

const deleteImg = () => {
  let dogImg = document.getElementById("dog");
  dogImg.remove();
};

changeImgButton.addEventListener("click", () => {
  deleteImg();
  getImg();
});
