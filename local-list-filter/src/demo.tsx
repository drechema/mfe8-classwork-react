import React from "react";

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([
    { name: "maria" },
    { name: "paco" },
    { name: "pepe" },
    { name: "penelope" },
    { name: "juan" }
  ]);
  const [filteredUserCollection, setFilteredUserCollection] = React.useState([]);

  // Load full list when the component gets mounted and filter gets updated
  React.useEffect(() => {
    setFilteredUserCollection(
      (!filter || filter=='') ? 
      userCollection :
      userCollection.filter(item => item.name.includes(filter)));
  }, [filter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <ul>
        {filteredUserCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
