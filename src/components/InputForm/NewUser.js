import Card from "../UI/Card/Card";

const NewUser = ({ name, age }) => {
  return (
    <Card>
      Name : {name}
      Age : ({age})
    </Card>
  );
};

export default NewUser;
