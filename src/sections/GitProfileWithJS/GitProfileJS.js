// document.addEventListener("DOMContentLoaded", function () {
//   const body = document.querySelector("body");

//   const usernameInput = document.createElement("input");
//   usernameInput.setAttribute("type", "text");
//   usernameInput.setAttribute("placeholder", "Enter GitHub username");
//   body.appendChild(usernameInput);

//   const searchButton = document.createElement("button");
//   searchButton.textContent = "Search";
//   body.appendChild(searchButton);

//   const resultContainer = document.createElement("div");
//   body.appendChild(resultContainer);

//   const errorContainer = document.createElement("div");
//   body.appendChild(errorContainer);

//   searchButton.addEventListener("click", async function () {
//     const username = usernameInput.value.trim();
//     if (!username) {
//       return;
//     }

//     try {
//       const response = await fetch(`https://api.github.com/users/${username}`);
//       if (!response.ok) {
//         throw Error("User not found");
//       }
//       const userData = await response.json();
//       displayUserData(userData);
//       clearError();
//     } catch (error) {
//       displayError(error.message);
//       clearUserData();
//     }
//   });

//   function displayUserData(userData) {
//     resultContainer.innerHTML = `
//         // <h1>GitHub Profile Search</h1>
//         <table>
//           <tr>
//             <th>Name</th>
//             <th>Followers</th>
//             <th>Following</th>
//             <th>Public Repos</th>
//             <th>Profile Picture</th>
//             <th>Email</th>
//           </tr>
//           <tr>
//             <th>${userData.login}</th>
//             <th>${userData.followers}</th>
//             <th>${userData.following}</th>
//             <th>${userData.public_repos}</th>
//             <th><img src="${
//               userData.avatar_url
//             }" height="100" width="100" /></th>
//             <th>${userData.email || "N/A"}</th>
//           </tr>
//         </table>
//       `;
//   }

//   function displayError(errorMessage) {
//     errorContainer.textContent = errorMessage;
//   }

//   function clearUserData() {
//     resultContainer.innerHTML = "";
//   }

//   function clearError() {
//     errorContainer.textContent = "";
//   }
// });

// // import React from "react";

// // const GitProfileJS = () => {
// //   return <div>GitProfileJS</div>;
// // };

// // export default GitProfileJS;
