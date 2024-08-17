import styles from "./Who.module.scss"

function Who(){
    return(
        <div className={styles.who}>
            <div className={styles.whoImg}></div>
                <div className={`${styles.whoContentText} bg-dark`}>
                    <h2>Une équipe de <strong>professionnels</strong> avec plus de 10 ans d expérience</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, numquam magnam corrupti rem atque voluptate sunt repellendus ab, porro laborum eum hic minus quam! Non aut, consectetur vero dolores ab nobis est hic doloremque debitis voluptate nemo officiis, enim atque dolor labore in! Voluptates, eius! Et magni enim optio dicta.</p>
                </div>
        </div>
    );
}

export default Who;