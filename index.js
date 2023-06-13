const $imgs = document.querySelectorAll(".img-content > img");

$imgs.forEach($img => {
  $img.addEventListener('load', (ev) => {
    const target = ev.target;
    target.style.display = "block";
    target.parentNode.style.animation = "none";
  });
});