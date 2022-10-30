let buttonEl = document.querySelector(".btn");
let container = document.querySelector(".container");
const images = [
  "https://cdn.pixabay.com/photo/2013/06/29/21/18/wolf-142173__340.jpg",
  "https://cdn.pixabay.com/photo/2017/12/17/15/58/mouflon-3024471__340.jpg",
  "https://cdn.pixabay.com/photo/2013/05/17/07/12/elephant-111695__340.jpg",
  "https://cdn.pixabay.com/photo/2018/10/02/16/12/nature-3719233__340.jpg",
  "https://cdn.pixabay.com/photo/2012/03/04/00/09/lions-21787__340.jpg",
  "https://cdn.pixabay.com/photo/2017/07/18/18/01/little-girl-2516578__340.jpg",
  "https://cdn.pixabay.com/photo/2013/11/02/09/00/stream-204398__340.jpg",
  "https://cdn.pixabay.com/photo/2019/04/06/05/17/wallpaper-4106667__340.jpg",
  "https://cdn.pixabay.com/photo/2020/12/16/12/05/horse-5836459__340.jpg",
  "https://cdn.pixabay.com/photo/2017/08/24/22/37/gyrfalcon-2678684__340.jpg",
  "https://cdn.pixabay.com/photo/2020/05/04/16/05/mckenzie-river-5129717__340.jpg",
  "https://cdn.pixabay.com/photo/2017/02/25/18/18/trees-2098408__340.jpg",
  "https://cdn.pixabay.com/photo/2021/11/23/13/32/forest-6818683__340.jpg",
  "https://cdn.pixabay.com/photo/2019/07/16/20/48/dolomiti-4342572__340.jpg",
  "https://cdn.pixabay.com/photo/2020/10/18/11/01/deer-5664425__340.jpg",
  "https://cdn.pixabay.com/photo/2016/11/16/04/04/girl-1828112__340.jpg",
  "https://cdn.pixabay.com/photo/2019/04/22/01/51/nature-4145438__340.jpg",
];

const arr = [];
function randomNumber() {
  for (let j = 0; j < 6; j++) {
    arr[j] = Math.floor(Math.random() * images.length);
  }
  return arr;
}
randomNumber();
function imageGenerator() {
  return `<img src=${images[arr[0]]} alt=""><img src=${
    images[arr[1]]
  } alt=""><img src=${images[arr[2]]}  alt=""><img src=${
    images[arr[3]]
  }  alt=""><img src=${images[arr[4]]}  alt=""><img src=${
    images[arr[5]]
  }  alt="">`;
}
window.addEventListener("DOMContentLoaded", () => {
  container.innerHTML = imageGenerator();
});
let i=0;
let b = 6; //nombre d'images a generer a la fois
buttonEl.addEventListener("click", () => {
  if (i <= images.length) {
    for (i ; i < b; i++) {
      const img1 = document.createElement("img");
      img1.src = `${images[i]}`;
      container.appendChild(img1);
    }
    b += 6;
    b <= images.length ? (b = b) : (b = images.length);
  }
});
