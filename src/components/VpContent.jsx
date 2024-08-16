import styles from "./VpContent.module.scss";

function VpContent() {
  return (
    <section className={styles.vp}>
      <div className={styles.vpContent}>
        <h2>Marchez avec style, visez avec précision</h2>
        <div className={styles.seperator}></div>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          similique modi culpa, totam optio explicabo architecto, voluptatum
          iste sed adipisci eveniet accusamus numquam veritatis saepe officiis
          omnis reiciendis tempore at.
        </p>
      </div>
    </section>
  );
}

export default VpContent;
