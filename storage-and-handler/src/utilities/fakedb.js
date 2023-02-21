//use local storage to manage the data
const addToDatabase = (id) =>{
    let shoppingCart = {};

    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        shoppingCart = JSON.parse(storedCart);
    }

    //add quantity to shoppingCart
    const quantity = shoppingCart[id];
    if(quantity){
        const newQuantity =  quantity+1;
        shoppingCart[id] = newQuantity;
    }else{
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

const deleteFromDatabase = (id) => {
    //get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart = JSON.parse(storedCart);
        if(id in shoppingCart){
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
        }
    }
}

export {addToDatabase, deleteFromDatabase};