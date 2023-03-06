let lg = document.getElementById("login");
lg.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log("enter");
  await fetch("https://voting-57vf.onrender.com/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      Email: document.getElementById("tet").value,
      Password: document.getElementById("set").value,
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  console.log(document.getElementById("tet").value);
  console.log(document.getElementById("set").value);
});
