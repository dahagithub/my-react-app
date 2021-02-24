export function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

export function Welcome2(props) {
  return <h1>Hello2, {props.name}</h1>;
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

export function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

export default Welcome;
