
// the array
const menu = [
    {
        id:1,
        title: "Butter Pancakes",
        price: "$10",
        img: "2.jpg",
        category: "breakfast",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:2,
        title: "Macaroni",
        price: "$15",
        img: "3.jpg",
        category: "lunch",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:3,
        title: "Pancakes",
        price: "$20",
        img: "4.jpg",
        category: "dinner",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
        id:4,
        title: "Pizza",
        price: "$25",
        img: "5.jpg",
        category: "dinner",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    }
    ,  {
        id:5,
        title: "Chips",
        price: "$35",
        img: "6.jpg",
        category: "breakfast",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    }
    ,  {
        id:6,
        title: "Shawarma",
        price: "$10",
        img: "7.jpg",
        category: "lunch",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    }
]


// grabbing the elements from the html
const menuContainer = document.querySelector(".menu-container");
const filterBtns = document.querySelectorAll(".filter-btn")

// load items
window.addEventListener("DOMContentLoaded", function(){
    displayMenuItems(menu)
});


// filter items
filterBtns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const category = (e.currentTarget.dataset.id);
        const menuCategory = menu.filter(function(menuItem){
            // console.log(e.currentTarget.dataset.id)
          if(category === menuItem.category){
            return menuItem
          };
        });
        if(category == "all"){
            displayMenuItems(menu)
        }else{
            displayMenuItems(menuCategory)
        }
    });
});

function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<div class="box">
        <div class="img-container">
            <img src=${item.img} alt="">
        </div>
        <div class="description">
            <div class="text">
                <h4 class="title">${item.title}</h4>
                <h4 class="price">${item.price}</h4>
            </div>
            <div class="desc">
                ${item.desc}
            </div>
        </div>
    </div>`
    });
    // join() is used to join the array items in a single 
    displayMenu = displayMenu.join('');
    menuContainer.innerHTML = displayMenu
}