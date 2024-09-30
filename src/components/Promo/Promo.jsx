import styles from './Promo.module.css';

function Promo() {
    return (
        <div className={styles.fundo}>
            <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                <a href="">Shop Now </a>
            </p>
            <div className={styles.language}>
                <select className={styles.dropdwon} name="" id="">
                    <option value="eng">English</option>
                    <option value="pt-br">Portugues</option>
                </select>
            </div>
        </div>
    )
}

export default Promo