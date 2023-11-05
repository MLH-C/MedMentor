import React, { useEffect, useRef } from "react";
import { stats } from "../constants";
import styles from "../style";
import "./Stats.css";

const Stats = () => {
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      {
        threshold: 0.5, // Configure the observer to trigger when 50% of the element is in view
      }
    );

    if (statsRef.current) {
      statsRef.current.childNodes.forEach((node) => observer.observe(node));
    }

    // Cleanup observer on component unmount
    return () => {
      if (statsRef.current) {
        statsRef.current.childNodes.forEach((node) => observer.unobserve(node));
      }
    };
  }, []);

  return (
    <section
      ref={statsRef}
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={` stats-item flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
            {stat.value}
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
