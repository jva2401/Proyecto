const logueese = () => {
    const correo = document.getElementById("correo");
    const contrasena = document.getElementById("contrasena");
    let url = "http://localhost:1500/api/auth/login";
    
    let option = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: correo.value, // Cambiado a 'email'
        password: contrasena.value // Cambiado a 'password'
      })
    };
  
  
    fetch(url, option)
      .then(res => res.json())
      .then(data => {
        document.cookie = `token=${data.token}`;
        if (data.token !== undefined){
          window.location.href = "/dash";
        } else {
          alertify.error("Invalid credentials");
        }
      })
      .catch(error => console.error(error.message));
  };
  

// const logueese = () => {
//   const correo = document.getElementById("correo");
//   const contrasena = document.getElementById("contrasena");

//   let option = {
//       method: "POST",
//       headers: {
//           "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//           email: correo.value,
//           password: contrasena.value
//       })
//   };

//   let url = "http://localhost:1500/api/auth/login";

//   fetch(url, option)
//       .then(res => {
//           if (!res.ok) {
//               throw new Error('Network response was not ok');
//           }
//           return res.json();
//       })
//       .then(data => {
//           console.log("Response data:", data);
//           document.cookie = `token=${data.token}`;
//           if (data.token !== undefined) {
//               window.location.href = "/dash";
//           } else {
//               alertify.error("Invalid credentials");
//           }
//       })
//       .catch(error => {
//           console.error("Fetch error:", error);
//           alertify.error("Error occurred while fetching data");
//       });
// };
