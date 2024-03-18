import React, { useState } from "react";

const GitProfileSearch = () => {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    console.log("HandleSearch function");

    try {
      console.log(username);
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw Error("User not found");
      }
      const data = await response.json();

      setUserData(data);
      setError(null);
    } catch (error) {
      console.log(error);
      setUserData(null);
      setError(error.message);
    }
  };

  return (
    <div>
      <h1>GitHub Profile Search</h1>
      <input
        id="usernameInput"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter Github username"
      />

      <button onClick={handleSearch}>Search</button>

      {userData && (
        <>
          <table>
            <tr>
              <th>Name</th>
              <th>Followers</th>
              <th>Following</th>
              <th>Public Repos</th>
              <th>Profile Picture</th>
              <th>Email</th>
            </tr>
            <tr>
              <th>{userData.login}</th>
              <th>{userData.followers}</th>
              <th>{userData.following}</th>
              <th>{userData.public_repos}</th>
              <th>
                <img src={userData.avatar_url} height={100} width={100} />
              </th>
              <th>{userData.email}</th>
            </tr>
          </table>
        </>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default GitProfileSearch;
