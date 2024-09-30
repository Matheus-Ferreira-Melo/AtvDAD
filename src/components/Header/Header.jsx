import styles from "./Header.module.css";
import carrinho from "../../assets/Cart1.png"
import favorito from "../../assets/Wishlist.png"
import busca from "../../assets/search.png"

function Header() {
    return (
        <header className={styles.cabecalho}>
            <h1>Excluse</h1>
                <nav className={styles.nav}>
                    <ul className={styles.lista}>
                        <li>Home</li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>Sign up</li>
                    </ul>
                </nav>
                <div className={styles.shop}>
                    <div className={styles.busca}>
                        <input type="text" 
                        name="" 
                        id="" 
                        placeholder="What are you looking for?"
                        className={styles.campo}/>    
                        <img src={busca} alt="" />
                        
                    </div>
                    <img src={favorito} alt="" className={styles.icon}/>
                    <img src={carrinho} alt="" className={styles.icon}/>
                </div>
                
        </header>
    );
}

export default Header;