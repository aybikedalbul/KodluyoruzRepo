const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://thewoksoflife.com/wp-content/uploads/2014/11/dan-dan-noodles-12.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

getCategoryButtons(menu) 
displayMenuItems(menu, "All")

function findCategories(menu) {
  let categories = [];
  categories.push("All")

  let otherCategories = new Set(menu.map((menuCat) => menuCat.category))
  categories.push(...otherCategories)
  return categories;
}

function getCategoryButtons(menu) {
  const buttonContainer = document.querySelector('.btn-container')
  const categories = findCategories(menu)

  categories.forEach((category) => {
    const button = document.createElement("button")
    button.className = "btn btn-outline-dark btn-item"
    button.textContent = category;

    var att = document.createAttribute("data-id")
    att.value = category;
    button.setAttributeNode(att)
    buttonContainer.appendChild(button)
  })
}
function displayMenuItems(menu, filterId) {
  const menuContainer = document.querySelector(".section-center")

  if (filterId == "All") {
    menuContainer.innerHTML = "";
    const menuItems = createMenuItems(menu);
    menuItems.forEach((menuItem) => {
      menuContainer.appendChild(menuItem)
    })
  }
  else {
    menuContainer.innerHTML = "";
    const filteredMenu = menu.filter(item => item.category == filterId)
    const filteredMenuItems = createMenuItems(filteredMenu)
    filteredMenuItems.forEach((filteredItem) => {
      menuContainer.appendChild(filteredItem)
    })
  }
}


function createMenuItems(menu) {
  const menuItem = menu.map((item) => {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const menuInfo = document.createElement('div')
    const menuTitle = document.createElement('div')
    const menuText = document.createElement('div')
    const menuName = document.createElement('h4')
    const menuPrice = document.createElement('h4')
    
    div.className = "menu-items col-lg-6 col-sm-12"
    
    img.src = item.img
    img.className = 'photo'
    img.alt = item.title

    menuInfo.className = "menu-info"


    menuTitle.className = "menu-title"
    menuName.textContent = item.title
    menuPrice.className = "price"
    menuPrice.textContent = item.price
    menuText.className = "menu-text"
    menuText.textContent = item.desc

    div.appendChild(img)
    div.appendChild(menuInfo)
    menuInfo.appendChild(menuTitle)
    menuInfo.appendChild(menuText)
    menuTitle.appendChild(menuName)
    menuTitle.appendChild(menuPrice)

    return div;
    return menuInfo;
    return img;
    return menuName;
    return menuPrice;
    return menuText;
    return menuTitle;
  })
  return menuItem;
}

const menuButton = document.querySelectorAll('button')

menuButton.forEach((buttonItem) => {
  buttonItem.addEventListener("click", function() {
    const buttonId = buttonItem.getAttribute("data-id")
    displayMenuItems(menu, buttonId)
  })
})


