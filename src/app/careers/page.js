"use client"
import JobCard from "@/components/JobCard";
import { useState } from "react";

export default function Careers() {
  const [jobs, setJobs] = useState([
      {
        id: 1,
        title: "Frontend Developer",
        location: "Hybrid",
        description:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis bibendum felis a dignissim. Sed nulla dui, semper sit amet magna vel, tempor accumsan ex.",
      },
      {
        id: 2,
        title: "Backend Developer",
        location: "Hybrid",
        description:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis bibendum felis a dignissim. Sed nulla dui, semper sit amet magna vel, tempor accumsan ex.",
      },
      {
        id: 3,
        title: "Content Writer",
        location: "Remote",
        description:
          "orem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis bibendum felis a dignissim. Sed nulla dui, semper sit amet magna vel, tempor accumsan ex.",
      },
    ]);
  return (
    <div className="mt-35 mb-20">
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Join Our Team</h2>
            <p className="mt-4 text-gray-600">
              We’re looking for talented individuals to help us shape the
              future. Explore our current opportunities and find your perfect
              role.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {jobs?.map((job) => (<JobCard key={job.id} job={job}/>))}
          </div>
        </div>
      </section>
    </div>
  );
}
