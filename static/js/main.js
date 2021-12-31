document.getElementById("downloadBtn").addEventListener("click", (e) => {
  // disabled button
  document.getElementById("downloadBtn").disabled = true;
  document.getElementById("my_iframe").src = "./static/files/steganography.exe";
  document.getElementById("downloadBtn").innerHTML = `
  Download Starting <i class="bi bi-cloud-download-fill ms-2"></i>
  `;
});
