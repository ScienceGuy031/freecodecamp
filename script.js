const ghPagesPrefix = "https://scienceguy031.github.io/";
const root = document.getElementById("root");

const certifications = [
  {
    name: "Front End Development Libraries",
    projects: [
      {
        name: "Random Quote Machine",
        url: ghPagesPrefix + "random-quote-machine",
      },
      {
        name: "Markdown Previewer",
        url: ghPagesPrefix + "markdown-previewer",
      },
      {
        name: "Drum Machine",
        url: ghPagesPrefix + "drum-machine",
      },
      {
        name: "JavaScript Calculator",
        url: ghPagesPrefix + "javascript-calculator",
      },
      {
        name: "25 + 5 Clock",
        url: ghPagesPrefix + "25-5-clock",
      },
    ],
  },
  {
    name: "Data Visualization",
    projects: [
      {
        name: "Bar Chart",
        url: ghPagesPrefix + "fcc-bar-chart",
      },
      {
        name: "Scatterplot Graph",
        url: ghPagesPrefix + "fcc-scatterplot",
      },
      {
        name: "Heat Map",
        url: ghPagesPrefix + "fcc-heatmap",
      },
      {
        name: "Choropleth Map",
        url: ghPagesPrefix + "fcc-choropleth",
      },
      {
        name: "Treemap Diagram",
        url: ghPagesPrefix + "fcc-treemap",
      },
    ],
  },
];

// NAVBAR
const navLeft = document.getElementById("nav-list");

certifications.forEach((cert) => {
  const dropdownItem = document.createElement('li');
  dropdownItem.className = 'nav-item dropdown';
  const dropdownList = document.createElement("ul");
  dropdownList.classList.add("dropdown-menu");
  const dropdownToggle = document.createElement("a");
  dropdownToggle.className = "nav-link dropdown-toggle";
  dropdownToggle.href = "#";
  dropdownToggle.role = "button";
  dropdownToggle.ariaExpanded = false;
  dropdownToggle.innerText = cert.name;
  const dataBsToggle = document.createAttribute("data-bs-toggle");
  dataBsToggle.value = "dropdown";
  dropdownToggle.setAttributeNode(dataBsToggle);
  dropdownItem.appendChild(dropdownToggle);
  dropdownItem.appendChild(dropdownList);
  navLeft.appendChild(dropdownItem);

  cert.projects.forEach((project) => {
    const navLi = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.href = `#${project.name.replace(/ /g, "-")}`;
    navLink.innerText = project.name;
    navLink.classList.add("dropdown-item");
    navLi.appendChild(navLink);
    dropdownList.appendChild(navLi);
  });
});

// SECTIONS

certifications.forEach((cert) => {
  const section = document.createElement("section");
  root.appendChild(section);
  section.id = cert.name.replace(/ /g, "-");
  const sectionHeadline = document.createElement("h2");
  section.appendChild(sectionHeadline);
  section.appendChild(document.createElement("hr"));
  sectionHeadline.innerText = cert.name;
  section.classList.add("text-center");

  cert.projects.forEach((project) => {
    const projectHeadline = document.createElement("h3");
    projectHeadline.id = project.name.replace(/ /g, "-");
    const projectLink = document.createElement("a");
    projectHeadline.appendChild(projectLink);
    projectLink.href = project.url;
    projectLink.target = "_blank";
    projectLink.innerText = project.name;
    section.appendChild(projectHeadline);

    const frameContainer = document.createElement("div");
    const iframe = document.createElement("iframe");
    frameContainer.appendChild(iframe);
    section.appendChild(frameContainer);
    iframe.src = project.url;
    frameContainer.className = "container";
  });
});
