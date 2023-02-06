const userName = document.querySelector(".userName")
const likeInfo = document.querySelector(".like-info")
const noLikeInfo = document.querySelector(".not-like")
const blockImg = document.querySelector(".blick-img")
const btnImg = document.querySelector(".btn-img")
const btnLikePlus = document.querySelector(".like-plus")
const btnNoLikePlus = document.querySelector(".no-like")
let i = 0
let laikePlus = 0

let userCar = [
  [
    {
      name: "Eva",
      foto: "https://i.pinimg.com/236x/f3/fe/1d/f3fe1dd69bf54aa4822e9aab096afc62.jpg",
      like: 0,
      noLike: 0,
    },
  ],
  [
    {
      name: "Liza",
      foto: "https://oir.mobi/uploads/posts/2021-03/1616365407_28-p-krasivie-kartinki-anime-devushek-36.jpg",
      like: 0,
      noLike: 0,
    },
  ],
  [
    {
      name: "Emma",
      foto: "https://cs12.pikabu.ru/post_img/2021/05/10/6/1620638476131796340.webp",
      like: 0,
      noLike: 0,
    },
  ],
]
console.log(userCar.length - 1)
plus = () => {
  userName.innerHTML = `<p>${userCar[i][0].name}</p>  <img src="${userCar[i][0]["foto"]}" /><br>`

  ++i

  let r = i - 1

  if (r < 0) {
    r = userCar.length - 1
  }

  plusLick = () => {
    userCar[r][0]["like"] += 1

    likeInfo.innerHTML = `<p>количество like: ${userCar[r][0]["like"]}</p>`
  }

  likeInfo.innerHTML = `<p>количество like: ${userCar[r][0]["like"]}</p>`

  btnLikePlus.onclick = plusLick

  noLikePlus = () => {
    userCar[r][0]["noLike"] += 1

    noLikeInfo.innerHTML = `<p>количество noLike: ${userCar[r][0]["noLike"]}</p>`
  }

  noLikeInfo.innerHTML = `<p>количество noLike: ${userCar[r][0]["noLike"]}</p>`

  btnNoLikePlus.onclick = noLikePlus

  if (i == userCar.length) {
    i = 0
  }
}

setInterval(() => {
  plus()
}, 3500)

plus()

btnImg.ontouchstart = plus
btnImg.onclick = plus
