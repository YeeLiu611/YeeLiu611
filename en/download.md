---
layout: page
title: "Download Certificate"
---

<h1>Download Your Certificate</h1>
<p>Click the button below to download your certificate.</p>

<a id="downloadLink" href="#" download>
  <button>Download Certificate</button>
</a>

<script>
document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const certificateNumber = urlParams.get("certificate");

  if (certificateNumber) {
    document.getElementById("downloadLink").href = `/certificates/${certificateNumber}.png`;
  } else {
    document.body.innerHTML = "<h1>Error: No certificate found.</h1>";
  }
});
</script>