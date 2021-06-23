import Card from "../UI/Card/Card";
import NewUser from "./NewUser";
const DisplayList = ({ usersList }) => {
  const displayList = usersList.map((user) => (
    <li key={user.id}>
      <NewUser name={user.name} age={user.age} />
    </li>
  ));
  return <Card>{displayList}</Card>;
};

export default DisplayList;
