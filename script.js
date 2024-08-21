const toggleButton = document.getElementsByClassName('js-toggle-button')[0];
const navBullets = document.getElementsByClassName('js-nav-bullets')[0];

toggleButton.addEventListener('click', () => {
    if (navBullets.style.display === "none") {
        navBullets.style.display = "block";
    } else {
        navBullets.style.display = "none";
    }
});

const data = [
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    ,
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://placehold.co/700x400",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
];

document.getElementsByClassName('grid-container')[0].innerHTML = data.map((item) => `
  <div class="grid-item">
    <div>
      <img src="${item.img}" alt="${item.name}">
    </div>
    <div class="js-card-details">
      <div>
        <h5 class="js-card-details-1">${item.name}</h5>
      </div>
      <div>
        <p class="js-description">${item.description}</p>
      </div>
    </div>
  </div>
`).join('');
