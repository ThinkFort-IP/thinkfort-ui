export default function JobCard(props) {
  return (
    <>

        <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800">{props?.job?.title}</h3>
        <p className="mt-2 text-gray-600">Location: {props?.job?.location}</p>
        <p className="mt-2 text-gray-600">
            {props?.job?.description}
        </p>
        <button className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Apply Now
        </button>
        </div>
    </>
  );
}
