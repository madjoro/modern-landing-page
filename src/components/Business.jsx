/* eslint-disable react/prop-types */
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
      <div className="flex-1 flex flex-col ml-3">
        <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
          {content}
        </p>
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
        <h2 className={styles.heading2}>An open internet.</h2>
        <p className={`${styles.paragraph} max-w-[470px]`}>
          {`Today, we gain access to 'free' internet services by giving up control
          of our personal data. Ethereum services are open by default – you just
          need a wallet. These are free and easy to set up, controlled by you,
          and work without any personal info.`}
        </p>
        <Button styles="mt-10"></Button>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feat, i) => (
          <FeatureCard
            key={feat.id}
            {...feat}
            index={i}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
