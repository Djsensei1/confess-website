document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const popup = document.getElementById("popup");

  yesButton.addEventListener("click", function () {
    sendEmail();
    popup.style.display = "block";
  });

  noButton.addEventListener("mouseover", function () {
    const x = Math.random() * 350;
    const y = Math.random() * 350;
    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
  });

  function sendEmail() {
    const subject = "Yes Button Clicked";
    const body = 'Someone clicked the "Yes" button!';
    const mailtoLink = `mailto:habimanahirwa@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Create a temporary anchor element to trigger the mailto link
    const tempLink = document.createElement("a");
    tempLink.href = mailtoLink;
    tempLink.click();
  }
});
