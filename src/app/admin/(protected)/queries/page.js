import Link from "next/link";

async function getSubmissions() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/forms/list`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch submissions");
  }

  return res.json();
}

export default async function AdminDashboard() {
  const submissions = await getSubmissions();

  return (
    <div className="mt-35 mb-20 p-8">
      <h1 className="text-2xl font-semibold mb-6">Form Submissions</h1>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Services</th>
              <th className="p-3">Jurisdiction</th>
              <th className="p-3">Submitted</th>
              <th className="p-3">Consent</th>
              <th className="p-3">View Full Submission</th>
            </tr>
          </thead>

          <tbody>
            {submissions.map((item) => (
              <tr key={item._id} className="border-t hover:bg-gray-50">
                <td className="p-3">{item.fullName}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.phone || "-"}</td>
                <td className="p-3">
                  {item.services?.length ? item.services.join(", ") : "-"}
                </td>
                <td className="p-3">
                  {item.jurisdiction?.length
                    ? item.jurisdiction.join(", ")
                    : "-"}
                </td>
                <td className="p-3">
                  {new Date(item.createdAt).toLocaleDateString()}
                </td>
                <td className="p-3">
                  {item.consent?.contactConsent ? "✅" : "❌"}
                </td>
                <td className="p-3">
                  <Link
                    href={`/admin/queries/${item._id}`}
                    className="text-blue-600 hover:underline"
                  >
                    View
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {submissions.length === 0 && (
        <p className="text-gray-500 mt-6">No submissions yet.</p>
      )}
    </div>
  );
}
