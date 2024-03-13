import React, { useEffect, useRef } from "react";
import Image from "next/image";
import style from "./team.module.css";
// Assuming the path to your images is correct
import team1 from "../../assets/teams/ABEGAIL.jpg";
import team2 from "../../assets/teams/ROMEN.JPG";
import team3 from "../../assets/teams/RONALD.jpg";
import team4 from "../../assets/teams/JASHA.JPG";
import team5 from "../../assets/teams/DUMA.JPG";
import team6 from "../../assets/teams/EIRAND.jpg";

import eirand from "../../assets/Barcelo, Eirand Jan C..jpg";
import jasha from "../../assets/Basa, Jashameel Faith D..jpg";
import dumaguina from "../../assets/Dumaguina, Rafael B..jpg";
import camela from "../../assets/Romen, Camela Trisha J..jpg";
import aby from "../../assets/Lopez, Abegail A..jpg";
import ronald from "../../assets/IMG_20230921_094013.jpg";

function Team() {
  const team = [
    { name: "Aby", position: "Web Designer" },
    { name: "Trisha", position: "UI Developer" },
    { name: "Ron", position: "Web Developer" },
    { name: "Jash", position: "Data Analyst" },
    { name: "Doma", position: "ML Supervisor" },
    { name: "Eirand", position: "ML Engineer" },
    { name: "Aby", position: "Web Designer" },
    { name: "Trisha", position: "UI Developer" },
    { name: "Ron", position: "Web Developer" },
    { name: "Jash", position: "Data Analyst" },
    { name: "Doma", position: "ML Supervisor" },
    { name: "Eirand", position: "ML Engineer" },
  ];
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let requestID;
    const scrollSpeed = 1; // Adjust this value to change the scrolling speed

    // Function to handle the infinite scroll
    const animateScroll = () => {
      // Check if we need to reset the scroll position
      if (
        scrollContainer.scrollWidth <=
        scrollContainer.clientWidth + scrollContainer.scrollLeft
      ) {
        scrollContainer.scrollLeft -= scrollContainer.clientWidth; // Reset scroll position
      } else {
        scrollContainer.scrollLeft += scrollSpeed;
      }

      // Request the next animation frame
      requestID = requestAnimationFrame(animateScroll);
    };

    animateScroll();

    // Cleanup on component unmount
    return () => cancelAnimationFrame(requestID);
  }, []);

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Meet Our Team</h1>
      <div className={style.insideContainer} ref={scrollRef}>
        {/* Dynamically create cards for each team member */}
        {[
          team1,
          team2,
          team3,
          team4,
          team5,
          team6,
          team1,
          team2,
          team3,
          team4,
          team5,
          team6,
        ].map((memberSrc, index) => (
          <div className={style.card} key={index}>
            <div className={style.subCard}>
              <Image
                className={style.roundImage}
                src={memberSrc}
                alt={`Team member ${index + 1}`}
              />
              <div className={style.nameContainer}>
                <p className={style.name}>{team[index].name}</p>
                <p className={style.position}>{team[index].position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
