import styles, { layout } from "../style";
import { card } from "../assets";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Take charge <br className="sm:block hidden" />
          in a few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          One of the main features of Ethereum is that you keep control of your
          own assets by managing your own account. This means you don't have to
          trust any third party with your assets, and you are protected from any
          custodian acting dishonestly, going bankrupt or getting hacked.
          However, it also means you take responsibility for your own security.
        </p>
        <Button styles={"mt-10"}></Button>
      </div>
      <div className={layout.sectionImg}>
        <img
          src={card}
          alt="card"
          className="w-[100%] h-[100%]"
        />
      </div>
    </section>
  );
};

export default CardDeal;
