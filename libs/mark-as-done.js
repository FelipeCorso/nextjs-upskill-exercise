export async function markAsDone(router, id) {
  const response = await fetch("/api/mark-as-done", {
    method: "PUT",
    body: JSON.stringify({ id }),
    headers: { "Content-Type": "application/json" },
  });

  const data = await response.json();

  console.log(data);

  router.push("/");
}
