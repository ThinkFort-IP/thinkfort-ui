"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SolutionPage from "@/components/Solution/SolutionPage";

export default function Page() {
  const params = useParams();
  const [solutions, setSolutions] = useState([]);
  useEffect(() => {
    fetch("/solutions/solutions.json")
      .then((res) => res.json())
      .then((data) => setSolutions(data));
  }, []);
  if (!solutions) return null;
  const { slug } = params;
  const currentSolution = solutions?.find((b) => b.slug === slug);

  return (
    <div className="mt-35">
      {currentSolution && <SolutionPage solution={currentSolution} />}
    </div>
  );
}
