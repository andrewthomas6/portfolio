document.addEventListener("DOMContentLoaded", () => {
  const isSubfolder = window.location.pathname.includes('/projects/');
  const basePath = isSubfolder ? '../' : './';

  const headerHTML = `
    <header class="navbar">
      <div class="nav-brand">
        <a href="${basePath}index.html" class="brand-link">
          <img src="${basePath}assets/images/favicon32.ico" alt="Logo" class="nav-favicon">
          <span>Andrew Thomas</span>
        </a>
      </div>
      <nav class="nav-links">
        <a href="${basePath}index.html#about">About</a>
        <a href="${basePath}index.html#experience">Experience</a>
        <a href="${basePath}index.html#education">Education</a>
        
        <div class="dropdown">
          <a href="${basePath}index.html#projects" class="dropbtn">Projects &#9662;</a>
          <div class="dropdown-content">
            <a href="${basePath}projects/rover-swerve.html">Rover Swerve</a>
            <a href="${basePath}projects/quotable.html">Quotable</a>
            <a href="${basePath}projects/demining-flail.html">Remote Demining Flail</a>
            <a href="${basePath}projects/self-leveling.html">Electromagnetic Self-Leveling Rover</a>
          </div>
        </div>

        <a href="${basePath}index.html#contact">Contact</a>
      </nav>
    </header>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
});