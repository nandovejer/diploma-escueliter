function generateImg() {
  const element = document.getElementById("printContent");
  html2canvas(element).then((canvas) => {
    // Convert the canvas to a data URL and open it in a new window
    const dataURL = canvas.toDataURL("image/png");
    const newWindow = window.open();
    newWindow.document.write('<img src="' + dataURL + '" />');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const btnDownload = document.querySelector("#contentToPdf");
  btnDownload.addEventListener("click", generateImg);
});
