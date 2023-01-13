const menu = [
    {
        id:1,
        title: "Butter Pancakes",
        price: "$10",
        img: "2.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:2,
        title: "Macaroni",
        price: "$15",
        img: "3.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:3,
        title: "Pancakes",
        price: "$20",
        img: "4.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:4,
        title: "Pizza",
        price: "$25",
        img: "5.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    }
    ,  {
        id:5,
        title: "Chips",
        price: "$35",
        img: "6.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    }
    ,  {
        id:6,
        title: "Shawarma",
        price: "$10",
        img: "7.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    }
]

const menuContainer = document.querySelector(".menu-container");

window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
        console.log(item);
    })
    // console.log(window);
})