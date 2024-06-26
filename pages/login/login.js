const form = document.getElementById("data");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const mail = e.target.mail.value;
  const password = e.target.password.value;
  const data = {
    Email: mail,
    Password: password,
  };

  await fetch(
    "https://voting.egyptsunny.com/auth/signin",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Adjust the content type based on your requirements
      },
      body: JSON.stringify(data), // Adjust the data payload based on your requirements
    }
  )
    .then((response) => response.json())
    .then((data) => {
      // Handle the response data
      console.log(data);
      if (data.type !== "Success") {
        document.getElementById("error").innerHTML = data.message;
      } else {
        localStorage.setItem("token", data.data.accessToken);
        if (data.data.user.Role === "ADMIN") {
          window.location.href = "../admin/pre-homepage.html";
        } else {
          window.location.href = "../../index.html";
        }
      }
      console.log(data);
    })
    .catch((error) => {
      // Handle any errors
      console.error("Error:", error);
    });
});
