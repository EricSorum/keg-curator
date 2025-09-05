"use client";

export default function ResetDatabaseButton() {
  async function handleClick() {
    const res = await fetch("/api/reset", {
      method: "POST",
    });

    const data = await res.json();
    alert(data.message);
  }

  return (
    <button
      onClick={handleClick}
      className="rounded bg-red-600 px-4 py-2 text-white hover:bg-red-700"
    >
      Reset Database
    </button>
  );
}
