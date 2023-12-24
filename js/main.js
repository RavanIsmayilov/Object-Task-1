var container = document.querySelector(".container")

const arr = [
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    },
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    },
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    },
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    },
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    },
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    },
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    },
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    },
    {
        img: "./assets/indir.jpeg",
        title: "Irsad",
        text: "dasdasdasdsadas"
    }
];

arr.forEach(element => {

    var div = document.createElement('div');

    div.classList.add('div');

    container.appendChild(div);

    

    const img = document.createElement('img');

    img.classList.add('image');

    img.src = element.img;

    div.appendChild(img);



    

    const title = document.createElement('h4');

    title.classList.add('title');   

    title.textContent = element.title;

    div.appendChild(title);


    const text = document.createElement('p');

    text.classList.add('text');

    text.textContent = element.text;

    div.appendChild(text);
});