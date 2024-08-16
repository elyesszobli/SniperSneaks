import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center justify-content-sp`}>
      <div>
        <a href="#" className="title-logo ">SNIPERSNEAKS</a>
      </div>
      <ul className="d-flex">
        <li><a href="#" className="underline-text">Nouveautés du moment</a></li>
        <li><a href="#" className="underline-text">Homme</a></li>
        <li><a href="#" className="underline-text">Femme</a></li>
        <li><a href="#" className="underline-text">Enfant</a></li>
        <li><a href="#" className="underline-text">Offres</a></li>
      </ul>
      <button className="mr-5 btn btn-reverse-primary">
        <i className="fa-solid fa-basket-shopping mr-5"></i>
        panier
      </button>
    </header>
  );
}

export default Header;
