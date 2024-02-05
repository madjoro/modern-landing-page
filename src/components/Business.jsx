import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? "mb-6" : "mb-0"
      } feature-card`}>
      <div className={`w-[64px] h-[64px] rounded-full`}>
        <img
          src={icon}
          alt="icon"
          className="w-[50%] h-[50%] object-contain"
        />
      </div>
    </div>
  );
};

const Business = () => {
  return (
    <section
      id="features"
      className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we will handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          With the right partner, you can improve your financial life by
          building credit, earning rewards and saving money.
        </p>
        <Button styles="mt-10"></Button>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feat, i) => (
          <FeatureCard key={feat.id} />
        ))}
      </div>
    </section>
  );
};

export default Business;
