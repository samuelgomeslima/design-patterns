import React, { useState, useEffect } from 'react';

// Simulated complex API
const api = {
  fetchUserData: () => Promise.resolve({ name: 'John Doe', age: 30 }),
  fetchUserPosts: () => Promise.resolve(['Post 1', 'Post 2']),
};

// Facade to simplify API interactions
const userFacade = {
  getUserInfo: async () => {
    const [userData, userPosts] = await Promise.all([
      api.fetchUserData(),
      api.fetchUserPosts(),
    ]);
    return { ...userData, posts: userPosts };
  },
};

// Component using the Facade
const UserProfile = () => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await userFacade.getUserInfo();
      setUserInfo(data);
    };
    fetchData();
  }, []);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>{userInfo.name}</p>
      <p>Age: {userInfo.age}</p>
      <p>Posts:</p>
      <ul>
        {userInfo.posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>
    </div>
  );
};

// Usage
const App = () => {
  return (
    <div>
      <UserProfile />
    </div>
  );
};

export default App;
