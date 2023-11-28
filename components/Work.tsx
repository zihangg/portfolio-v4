import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { workHistory } from "../constants/workHistory";
import { Work } from "../constants/types";
import { Inter, Playfair_Display } from "next/font/google";
import styles from "../styles/components/work.module.css";
import CustomIndicator from "./CustomIndicator";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });

function Work() {
  const [currentSelected, setCurrentSelected] = useState<number>(0);

  const updateCurrentSelected = (index: number) => {
    setCurrentSelected(index);
  };

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Carousel
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          emulateTouch={true}
          selectedItem={currentSelected}
          onChange={updateCurrentSelected}
        >
          {workHistory.map((history: Work) => {
            return (
              <div>
                <div className={`${playfair.className} ${styles.title}`}>
                  {history.title}
                </div>
                <div className={`${playfair.className} ${styles.company}`}>
                  {history.company}
                </div>
                <p className={`${inter.className} ${styles.description}`}>
                  {history.description}
                </p>
                <div className={`${playfair.className} ${styles.duration}`}>
                  {history.duration}
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
      {/* TODO: Add animations for indicators */}
      <div className={styles.indicatorContainer}>
        {workHistory.map((_: Work, i: number) => {
          return (
            <CustomIndicator
              key={i}
              isSelected={currentSelected === i}
              onClick={() => setCurrentSelected(i)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Work;
