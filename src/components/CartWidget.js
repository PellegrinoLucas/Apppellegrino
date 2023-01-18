const CartWidget=() => {
    const cantidad = 1
    return(
        <div className="header__link">
        <p>{cantidad}</p>
        <span className="material-icons">shopping_cart</span>
        </div>
    )
};

export default CartWidget;