import styles, { layout } from "../style";
import { bill } from "../assets";

const Billing = () => {
  return (
    <section
      id="product"
      className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          src={bill}
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] pink__gradient" />
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Easily control <br className="sm:block hidden" />
          your finances.
        </h2>
        <p className={`${styles.paragraph} max-w[470px] mt-5`}>
          Today, billions of people can’t open bank accounts, others have their
          payments blocked. Ethereum's decentralized finance (DeFi) system never
          sleeps or discriminates. With just an internet connection, you can
          send, receive, borrow, earn interest, and even stream funds anywhere
          in the world.
        </p>
      </div>
    </section>
  );
};

export default Billing;
