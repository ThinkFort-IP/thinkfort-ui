"use client";

export function DeleteSupportTicketButton({ id }) {
  const handleDelete = async () => {
    const confirmed = confirm("Are you sure you want to delete this ticket?");
    if (!confirmed) return;

    const res = await fetch(`/api/support/delete/${id}`, { method: "DELETE" })

    if (res.ok) {
      window.location.reload();
    } else {
      alert("Failed to delete ticket");
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-600 hover:underline text-sm"
    >
      Delete
    </button>
  );
}
