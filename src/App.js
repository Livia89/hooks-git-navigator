import { useState, useEffect } from "react";

function App() {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.github.com/users/livia89/repos');
      const data = await response.json();

      setRepositories(data);
    })();

  }, []); // [] means one execution

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `you have ${filtered.length} favorities`;
  }, [repositories])

  const handleFavority = ((id) => {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    })

    setRepositories(newRepositories);
  });

  return (
    <>
      <ul>
        {repositories.map(repo => (
          <li key={repo.id}>
            {repo.name}
            {repo.favorite && <span>(Favorite)</span>}
            <button onClick={() => handleFavority(repo.id)}>Favorite</button>
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;
