import data from "./data.js";

const btn = document.querySelector('.btn')



let cart = []
const {products} = data

const addTocartHandler = (product) => {
  const productExist = cart.find((item) => item._id === product._id);
  if (!productExist) {
    const newCartItems = [...cart, { ...product, qty: 1 }];
    cart.push(newCartItems);
  
  } else {
    const newCartItems = cart.map((item) =>
      item._id === product._id
        ? { ...productExist, qty: productExist.qty + 1 }
        : item
    );
   cart.push(newCartItems);
  
  }
};

const prueba = (string) => {
 console.log(string)
}

products.map(product => {
  btn.addEventListener('click', () => addTocartHandler(product)
  )
  
})

console.log(cart)