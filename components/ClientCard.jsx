"use client";
import React, { useRef } from "react";
import CardComponets from "./CardComponets";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { useMediaQuery } from "react-responsive";

gsap.registerPlugin(Flip);

const ClientCard = ({ data }) => {
  const isTablet = useMediaQuery({
    query: "(max-width:768px)",
  });
  const cardRef = useRef([]);
  cardRef.current = [];

  useGSAP(() => {
    const cards = cardRef.current.filter(Boolean);
    if (!cards.length) return;

    const container = cards[0].parentElement;
    if (!container) return;

    const { width, height } = container.getBoundingClientRect();
    if (!isTablet) {
      gsap.set(cards, {
        position: "absolute",
        top: height / 15,
        left: width / 15,
        xPercent: -50,
        yPercent: -50,
        opacity: 1,
        visibility: "visible",
      });

      const state = Flip.getState(cards);

      gsap.set(cards, {
        position: "relative",
        top: 0,
        left: 0,
        xPercent: 0,
        opacity: 1,
        yPercent: 0,
      });

      Flip.from(state, {
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
      });
    }
    gsap.from(".dicount-para", {
      yPercent: 120,
      ease: "bounce.out",
      delay: 2,
    });
  }, []);

  return (
    <>
      {Array.isArray(data) &&
        data.map((product) => (
          <div
            key={product._id}
            ref={(el) => {
              if (el) cardRef.current.push(el);
            }}
            className="card w-fit rounded-3xl"
          >
            <CardComponets productData={product} />
          </div>
        ))}
    </>
  );
};

export default ClientCard;
