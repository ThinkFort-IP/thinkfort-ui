"use client"
import { useEffect, useState } from "react";
import SolutionCard from "./SolutionCard";

export default function SolutionsSection() {
  const [solutions, setSolutions] = useState([]);
  useEffect(() => {
    fetch("/solutions/solutions.json")
      .then((res) => res.json())
      .then((data) => setSolutions(data));
  }, []);

  return (
    <>
      <h1 className="text-3xl font-semibold text-center mx-auto">
        Tailored IP Solutions for Every Innovator
      </h1>
      <p className="text-md text-slate-500 text-center mt-2 max-w-md mx-auto">
        From concept to commercialization, we provide strategic guidance and protection to accelerate innovation, secure ideas, and maximize impact across startups, businesses, and institutions.
      </p>
      <div className="flex items-center justify-center flex-wrap gap-6 mt-15 mb-20 px-4 md:px-10">
      {solutions &&
        solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution}/>
        ))}
    </div>
    </>
    
  );
}
