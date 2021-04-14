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