// import styles from "./Content.module.scss";
import VpContent from "./VpContent";
import Offers from "./Offers";
import Who from "./Who";


function Content() {
  return (
    <div className="container">
      <VpContent></VpContent>
      <Offers></Offers>
      <Who></Who>
    </div>
  );
}

export default Content;