export default function JobCard(props) {
  return (
    <>
      <div className="border border-[rgb(var(--brand-green))] bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">{props?.job?.title}</h3>
        <p className="mt-2 text-gray-600">Location: {props?.job?.location}</p>
        <p className="mt-2 text-gray-600">{props?.job?.description}</p>
        <button className="cursor-pointer mt-4 w-full px-4 py-2 bg-[rgb(var(--brand-green))] text-white rounded hover:bg-[rgb(var(--btn-hover))]">
          Apply Now
        </button>
      </div>
    </>
  );
}
