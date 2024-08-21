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
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    ,
    {
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
    {
        img: "https://media.istockphoto.com/id/1324356458/vector/picture-icon-photo-frame-symbol-landscape-sign-photograph-gallery-logo-web-interface-and.jpg?s=612x612&w=0&k=20&c=ZmXO4mSgNDPzDRX-F8OKCfmMqqHpqMV6jiNi00Ye7rE=",
        name: "Project Name",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum accusantium obcaecati magnam debitis soluta deserunt tempore quasi sit possimus ad rerum ducimus dicta nulla impedit fuga molestias deleniti. Eligendi fuga"
    },
];

document.getElementsByClassName('grid-container')[0].innerHTML = data.map((item) => `
    <div class="grid-item">
        <div>
            <img src="${item.img}" alt="" srcset="">
        </div>
        <div class="js-card-details">
            <div>
                <h5>${item.name}</h5>
            </div>
            <div>
                <p>${item.description}</p>
            </div>
        </div>
    </div>
`).join('');
