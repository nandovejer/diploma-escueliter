function generateImg() {
  const element = document.getElementById("printContent");
  document.body.classList.add("saving");

  html2canvas(element).then((canvas) => {
    const dataURL = canvas.toDataURL("image/png");
    const downloadImage = document.createElement("a");
    document.body.appendChild(downloadImage);
    downloadImage.setAttribute("download", "image");
    downloadImage.href = dataURL;
    downloadImage.click();
    downloadImage.remove();
    document.body.classList.remove("saving");
  });

  setTimeout(() => {
    document.body.classList.remove("saving");
  }, 500);
}

document.addEventListener("DOMContentLoaded", () => {
  const btnDownload = document.querySelector("#contentToImg");
  btnDownload.addEventListener("click", generateImg);
});
