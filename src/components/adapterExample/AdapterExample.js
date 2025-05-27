import React from 'react';

// Original component expecting specific props
const LegacyUserCard = ({ fullName, years }) => {
  return (
    <div>
      <p>{fullName}</p>
      <p>Age: {years}</p>
    </div>
  );
};

// New data format
const newUserData = {
  name: 'Jane Doe',
  age: 25,
};

// Adapter component to convert new data format to the expected format
const UserCardAdapter = ({ user }) => {
  const adaptedProps = {
    fullName: user.name,
    years: user.age,
  };

  return <LegacyUserCard {...adaptedProps} />;
};

// Usage
const App = () => {
  return (
    <div>
      <UserCardAdapter user={newUserData} />
    </div>
  );
};

export default App;
