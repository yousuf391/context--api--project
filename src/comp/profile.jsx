import { useContext } from "react";
import UserContext from "../context/userContext";

function Profile() {
  const { user } = useContext(UserContext);

  // If the user is not logged in
  if (!user) {
    return <div>Please login</div>;
  }

  return (
    <div>
      Welcome, {user.username}!
      
      <div>Password is hidden for security reasons.</div>
    </div>
  );
}

export default Profile;
