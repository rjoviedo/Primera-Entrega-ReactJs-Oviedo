import ItemListContainer from "../ItemListContainer";
import CartWidget from "../CartWidget";

const NavBar = () => {
    return (
        <header>
            <div className="containerBrand">

            </div>

            <nav className="containerItemList">
                <ItemListContainer
                    itemUno = "Home"
                    itemDos = "Productos"
                    itemTres = "Servicios"
                    itemCuatro = "Contacto"
                />

            </nav>

            <div className="containerCart">
                <CartWidget />


            </div>
        </header>
    )
}

export default NavBar;