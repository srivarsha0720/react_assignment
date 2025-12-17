import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Sri Varsha";
  const age = 20;

  return (
    <div>
      <h2>User Profile</h2>
      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;