document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("toggle-courses-btn");
  const coursesList = document.getElementById("courses-list");

  if (toggleBtn && coursesList) {
    toggleBtn.addEventListener("click", () => {
      coursesList.classList.toggle("hidden");
      const isHidden = coursesList.classList.contains("hidden");
      toggleBtn.innerHTML = isHidden 
        ? "Show Relevant Courses &#9660;" 
        : "Hide Relevant Courses &#9650;";
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('app_video');
  if (video) {
    video.playbackRate = 3.0;
  }
});