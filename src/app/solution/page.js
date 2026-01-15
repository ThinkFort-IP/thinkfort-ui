"use client"
import SolutionsSection from "@/components/SolutionsSection";
import { useState } from "react";

export default function Solution() {
  const [solutions, setSolutions] = useState([{
    id: 1,
    title: "Technical Enhancement & Innovation Support",
    list: [
      {
        "Idea Structuring & Technical Problem Identification": "We analyze early-stage ideas to clearly define the technical problem being solved, ensuring the invention is framed around a real, identifiable technical challenge."
      }
    ]
  }])
  return (
    <div className="mt-25">
      <SolutionsSection solutions={solutions}/>
    </div>
  );
}