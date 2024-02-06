import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-center m-1">
          <img
            src={logo}
            alt="logo"
            className="w-[266px] h-[72px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[310px] m-auto`}>
            A new way to pay.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div
              key={link.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]">
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul>
                {link.links.map((fl) => (
                  <li
                    key={fl.name}
                    className={`font-poppins font-normal text-[16px] 
                    leading-[24px] text-dimWhite 
                    hover:text-secondary cursor-pointer`}>
                    {fl.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-slate-400">
        <p className="font-poppins font-normal text-center text-[14px] leading-[20px] text-white">
          2024 Ethereum. No Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6 ">
          {socialMedia.map((soc) => (
            <img
              key={soc.id}
              src={soc.icon}
              alt="icon"
              className={`w-[21px] h-[21px] object-contain mr-3`}></img>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
