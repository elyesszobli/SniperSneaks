import styles from "./Offers.module.scss"
import Article from "./Article";

function Offers(){
    return(
        <div className={styles.offer}>
            <div className={styles.OfferContainer}>
                <h3 className="mb-20">Nos dernieres Offres</h3>
                <div className={`{styles.offerElem} d-flex`}>
                    <Article></Article>
                    <Article></Article>
                    <Article></Article>
                </div>
            </div>
        </div>
    );
}

export default Offers;