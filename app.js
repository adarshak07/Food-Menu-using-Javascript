const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Steak Dinner",//IMMMMMM
    category: "dinner",  //if  a new category is added in our data , then We also need a new category of button , and show that item when clicked . 
    price: 16.99, //to achieve this there are 3 steps, think about them or see the video 
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//when page loads , we have to display all the items of the arrry

//using add event on Window 
//and we have to show them on the scrren , so we will select the div which is holding all the items .so center-section 

const sectionCenter = document.querySelector(".section-center")
const container = this.document.querySelector('.btn-container')

window.addEventListener('DOMContentLoaded', function () {

  displayMenuItems(menu)
  
  displayMenuButtons()
});




function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {  //item is the single item of map ,we are using map because we can modify the array using return statement  

    // return `hi`;  //displayMenu is an array because each item of menu is going to it . 


    return `<article class="menu-item">
        <img src=${item.img} alt=${item.title} class="photo" />
        <div class="item-info">
          <header>
           <h4>${item.title}</h4>
            <h4 class="price">$${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
            </article> `
  });

  displayMenu = displayMenu.join(""); //we dont want anything between two elements so "" , so that we get a html thing as awhole
  //In JavaScript, the join() method is used to join all elements of an array into a string. It takes an optional argument that specifies the separator to be used between each element in the resulting string.
  sectionCenter.innerHTML = displayMenu
}

//now to filter 
//NOTE - if we log the value the filterBtns we get nothing 
//THIS IS HAPPENING WE HAVE ADDED THE BTN DYNAMICALLY 
//so even the btn has the filter-btn class ,it does not get selected .

//the solution is that when the btns are added using js , select all btns there only. 
//and then paste the same code there IMMMM. 

// filterBtns.forEach(function(btn) {
//     btn.addEventListener('click',function(e) {
//         const category = e.currentTarget.dataset.id; //dataset se data-_ is accessed of that element targted. 
//             //now we dont want all the array elements , 
//             //want only those which lie in their category .
//             //so we will create a new array since we have to pass a array only to our display function 
//             //new array will be created using filter method . 
//             const menuCategory = menu.filter(function(menuItems) {
//                 if(menuItems.category === category) {
//                     return menuItems; //feel
//                 }
//             })
//             if(category === 'all') {
//                 displayMenuItems(menu);
//             }
//             else {
//                 displayMenuItems(menuCategory);
//             }

//     })
// })

function displayMenuButtons() { 

  //when page loads along with displaying the items we also want to show the button of all unique categories 
  //we will evently make a fucntion for all the stuff but initally we should first achieve all goals without making function //IMMMMMM

  const categories = menu.reduce(function (btnArray, item) {  //unlike map and filter , reduce takes 2 paramter inside the function and a  2nd paramter after the fucntion which is inital value of accumaluator , first one is accumulator , second is obvious currentValue of array 
    // console.log(btnArray);
    if (!btnArray.includes(item.category)) {
      btnArray.push(item.category)
    }
    return btnArray  //alaways reduce etc ke case me return the first paramter of callback function which is accumal  feel IMMMM
  }, ['all']); //inital value of accumaltor here is an array having one element whose value is 'all' // map and filter return array yes know
  //this array of uper wala represents the buttons which we want , so initially all ka button to need hee , so all liye 



  const categoryBtns = categories.map(function (category) {
    return `<button type="button" class="filter-btn" data-id="${category}">
    ${category}
  </button>`
  }).join("");//now we have to make this as html string feel immm
  //  console.log(categoryBtns); 



  container.innerHTML = categoryBtns //all required btn added 
  //NOW FILTER 
  const filterBtns = document.querySelectorAll('.filter-btn')  
  //  console.log(filterBtns);
  filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const category = e.currentTarget.dataset.id; //dataset se data-_ is accessed of that element targted. 
      //now we dont want all the array elements , 
      //want only those which lie in their category .
      //so we will create a new array since we have to pass a array only to our display function 
      //new array will be created using filter method . 
      const menuCategory = menu.filter(function (menuItems) {
        if (menuItems.category === category) {
          return menuItems; //feel
        }
      })
      if (category === 'all') {
        displayMenuItems(menu);
      }
      else {
        displayMenuItems(menuCategory);
      }

    })
  })
}