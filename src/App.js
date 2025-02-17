import Home from './components/Home'

const categoriesListDetails = [
  {
    id:1,
    name:"All Bags",
    icon:"/images-icons/Categories Icons/All Bags.png"
  },

  {
    id:2,
    name:"Duffle Bag",
    icon:"/images-icons/Categories Icons/Duffle Bag.png"
  },

  {
    id:3,
    name:"Hand Bags",
    icon:"/images-icons/Categories Icons/Hand Bags.png"
  },

  {
    id:4,
    name:"Laptop Sleeve",
    icon:"/images-icons/Categories Icons/Laptop Sleeve.png"
  },

  {
    id:5,
    name:"Messenger Bags",
    icon:"/images-icons/Categories Icons/Messenger Bags.png"
  },

  {
    id:6,
    name:"Slings Bags",
    icon:"/images-icons/Categories Icons/Slings Bags.png"
  },

  {
    id:7,
    name:"Tote Bag",
    icon:"/images-icons/Categories Icons/Tote Bag.png"
  },

  {
    id:6,
    name:"Vanity Pouch",
    icon:"/images-icons/Categories Icons/Vanity Pouch.png"
  },
]


const productsListDetails = [
  {
    id:1,
    name:"The Brown Metro Movers",
    FinalPrice:4899,
    Mrp:8999,
    image:"/images-icons/Product Images/brown-metro-movers.png"
  },

  {
    id:2,
    name:"The Metro Movers Black",
    FinalPrice:4899,
    Mrp:8999,
    image:"/images-icons/Product Images/black-metro-movers.png"
  },

  {
    id:3,
    name:"The Metro Movers Black",
    FinalPrice:4899,
    Mrp:8999,
    image:"/images-icons/Product Images/black-metro-movers-2.png"
  },

  {
    id:4,
    name:"The Metro Movers Green",
    FinalPrice:4899,
    Mrp:8999,
    image:"/images-icons/Product Images/green-metro-movers.png"
  }
]

const headericons = [
  {
    id:1,
    name:"search-icon",
    icon:"/images-icons/Header Icons/search-icon.png"
  },

  {
    id:2,
    name:"profile-icon",
    icon:"/images-icons/Header Icons/profile-icon.png"
  },

  {
    id:3,
    name:"bookmark-icon",
    icon:"/images-icons/Header Icons/bookmark-icon2.png"
  },

  {
    id:4,
    name:"cart-icon",
    icon:"/images-icons/Header Icons/cart-icon.png"
  },
]

const App = () => <Home headericons = {headericons} categoriesListDetails = {categoriesListDetails} productsListDetails = {productsListDetails}/>

export default App;