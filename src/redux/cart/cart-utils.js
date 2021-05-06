export const addItemToCart = (allCartItems, cartItemToAdd) =>
{
    const existingCartItem = allCartItems.find(ci=>ci.id===cartItemToAdd.id);
    if(existingCartItem){
        return allCartItems.map(ci=>
            (ci.id===cartItemToAdd.id)
            ? { ...ci, quantity: ci.quantity+1}
            : ci
        );
    }

    return [...allCartItems, {...cartItemToAdd, quantity:1}]
}

export const removeItemFromCart = (allCartItems, cartItemToRemove) =>
{
    const existingCartItem = allCartItems.find(ci=>ci.id===cartItemToRemove.id);
    if(existingCartItem && existingCartItem.quantity && existingCartItem.quantity>1){
        return allCartItems.map(ci=>
            (ci.id===cartItemToRemove.id)
            ? { ...ci, quantity: ci.quantity-1}
            : ci
        );
    } else return allCartItems.filter(ci=>ci.id!==cartItemToRemove.id);
}