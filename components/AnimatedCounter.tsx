"use client";

import React from "react";
import CountUp from "react-countup";

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp
        duration={2}
        end={amount}
        decimal=","
        prefix="USD $"
        decimals={2}
      ></CountUp>
    </div>
  );
};

export default AnimatedCounter;
