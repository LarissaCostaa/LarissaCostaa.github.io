var auto = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
  nextImage();
}, 3500);

function nextImage() {
  auto++;
  if (auto > 3) {
    auto = 1;
  }

  document.getElementById("radio" + auto).checked = true;
}
