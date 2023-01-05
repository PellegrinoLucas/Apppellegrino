import Navbar from "./Navbar";

const Header=() => {

    const isHeader = true
    return(
        <header className="header">
            <h1>Mercado</h1>
            <Navbar isHeader={isHeader}/>
        </header>
    ) 
};

export default Header;