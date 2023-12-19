import List from "../List/List";

export default function Profile() {
  const myInfo = {
    name: "Ivan Tomicic",
    location: "Zagreb",
    Age: "33",
    colors: [
      { id: 1, name: "Orange" },
      { id: 2, name: "Blue" },
      { id: 3, name: "Green" },
    ],
  };
  return (
    <>
      <h1>Profile</h1>
      <p>Name: {myInfo.name}</p>
      <p>Location: {myInfo.location}</p>
      <p>Age: {myInfo.Age}</p>
      <h2>Favorite colors:</h2>
      <List colors={myInfo.colors} />
    </>
  );
}
