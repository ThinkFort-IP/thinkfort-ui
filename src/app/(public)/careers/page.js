import JobCard from "@/components/JobCard";
import jobs from "@/data/jobs.json";
export const metadata = {
  title: "Careers",
  description:
    "Explore career opportunities at ThinkFortIP. Join our intellectual property and legal team working on patents, trademarks, and innovation-driven projects.",
};
export default function Careers() {
  return (
    <div className="mt-35 mb-20 ">
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
          <div className="mt-10">
            <div className="flex gap-10 flex-wrap justify-center">
              {jobs?.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
