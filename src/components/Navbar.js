import CartWidget from "./CartWidget";

const Nav=(parametro) => {

if(parametro.isHeader) {
    
    return(
        <nav>
            <a className="header__link" href="">Catalogo</a>
            <a className="header__link" href="">¿Quienes Somos?</a>
            <CartWidget/>
        </nav>
    )
} else {

    return(
        <nav>
            <a className="footer__link" href="">Facebook</a>
        </nav>  
    )
} 
};

export default Nav;