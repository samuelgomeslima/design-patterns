import React from 'react';

// Original component
const UserProfile = ({ name, age }) => {
  return (
    <div>
      <p>{name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

// Proxy function to wrap the component
const withRenderLogging = (Component) => {
  return class extends React.Component {
    componentDidMount() {
      console.log(`Component ${Component.name} mounted with props:`, this.props);
    }

    componentDidUpdate(prevProps) {
      console.log(`Component ${Component.name} updated from props:`, prevProps, 'to', this.props);
    }

    render() {
      return <Component {...this.props} />;
    }
  };
};

// Wrapped component with proxy
const UserProfileWithLogging = withRenderLogging(UserProfile);

// Usage
const App = () => {
  return (
    <div>
      <UserProfileWithLogging name="John Doe" age={30} />
    </div>
  );
};

export default App;
