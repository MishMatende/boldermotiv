import React from "react";
import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
        <p>IT'S HIGH TIME TO GET SOME</p>
        <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          BOLDER
          <span className="text-blue-400">MOTIV</span>
        </h1>
      </div>

      <p className="text-sm md:text-base font-light">
        I hereby acknowledge that I am voluntarily signing up for this workout
        <span className="text-blue-400 font-medium">(temple of sweat)</span>,
        knowing full well that my muscles may temporarily resent me - but{" "}
        <span className="text-blue-400 font-medium">
          my future me will thank me!
        </span>
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
