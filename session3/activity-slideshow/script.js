import teamsData from "./data.js";
console.log(teamsData);

const teamPillsContainerId = "teams-container";
const teamContentContainerId = "team-content-container";

// TODO 1: Displaying team pills for each team
function displayTeamPills(teamsData) {
  const teamPillsContainer = document.getElementById(teamPillsContainerId);

  teamsData.forEach((team) => {
    const newElement = document.createElement("div");
    newElement.className = "card-body p-2 m-2";
    newElement.id = team.id;
    newElement.innerHTML = `${team.name}`;

    teamPillsContainer.append(newElement);
  });
}

displayTeamPills(teamsData);

const teamPillsContainer = document.getElementById(teamPillsContainerId);

// TODO 2: Event handler to show Carousel with images for selected team
teamPillsContainer.addEventListener("click", (e) => {
  //e.target -> element node where the "click" event is fired from
  //events fired in child, bubbles up to the parent

  console.dir(e.target);

  const teamContentContainer = document.getElementById(teamContentContainerId);

  const teamId = e.target.id;

  const selectedTeam = teamsData.find((team) => team.id === String(teamId));

  console.log("selectedTeam debug", selectedTeam);

  const images = selectedTeam.images;

  //    We are creating a blank Body of carousel.

  teamContentContainer.innerHTML = `
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner" id="carousel-image-container">
            
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

  
  `;

  //   Now Fill this blank carousel with images ....

  const carouselImageContainer = document.getElementById(
    "carousel-image-container"
  );

  images.forEach((item, index) => {
    const newElement = document.createElement("div");
    newElement.className = `carousel-item ${index === 0 ? "active" : ""}`;

    newElement.innerHTML = `<img src=${item} class="d-block w-100" alt="image..." />`;
    carouselImageContainer.append(newElement);
  });
});
