"use client";
import { toast } from "react-toastify";
export function DeleteSubmissionButton({ id }) {
  async function handleDelete() {
    const confirmed = confirm(
      "Are you sure you want to delete this submission?"
    );
    if (!confirmed) return;

    const res = await fetch(`/api/forms/delete/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      toast.error("Failed to delete submission");
      return;
    }
    toast.success("Inquiry deleted successfully ");
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  }

  return (
    <button
      onClick={handleDelete}
      className="cursor-pointer text-red-600 hover:underline"
    >
      Delete
    </button>
  );
}
