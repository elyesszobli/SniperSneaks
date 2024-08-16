import styles from "./Article.module.scss"

function Article(){
    return(
        <div className={styles.article}>
            <div className={styles.imageContainer}>
                <img src="https://images.pexels.com/photos/10726876/pexels-photo-10726876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div>
            <div className={styles.description}>
                <div className={styles.title}>
                    <p>Air Force 1</p>
                </div>
                <div className={styles.category}>
                    <p>Homme</p>
                </div>
                <div className={styles.price}>
                    <p>120€</p>
                </div>
            </div>
        </div>
    );
}

export default Article;