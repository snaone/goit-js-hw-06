const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector('.gallery');
gallery.style.display = "flex";
gallery.style.marginLeft = "auto";
gallery.style.marginRight = "auto";
gallery.style.gap = "20px";
gallery.style.flexDirection = "column";
const makeGalleryItem = images.map(({ url, alt }) => `<li class = "gallery__item" style = "list-style:none">
<img class = "gallery__img" style = "object-fit:contain; width:800px" src="${url}, alt = "${alt}"></li>`).join("");
gallery.insertAdjacentHTML('afterbegin', makeGalleryItem);