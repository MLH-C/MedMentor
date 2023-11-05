import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a smarter solution <br className="sm:block hidden" /> on your
        fingertips.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Utilize our app to accurately measure your stress levels and monitor
        your emotional well-being, providing a supportive companion on your
        journey towards tranquility and balance.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100]" />
          
    </div>
  </section>
);

export default CardDeal;
