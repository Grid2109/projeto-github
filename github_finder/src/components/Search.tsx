type SearchProps = {
  loadUser: (userName: string) => Promise<void>;
};

import { useState, KeyboardEvent } from "react";

import { BsSearch } from "react-icons/bs";

import classes from "./Search.module.css";

const Search = ({ loadUser }: SearchProps) => {
  // saber o que o meu usuário digitou no campo de busca
  const [userName, setUserName] = useState("");

  const handleKeyDown = (e: KeyboardEvent) => { //keyboardEvent é um evento de teclado
    if (e.key === "Enter") { //se a tecla pressionada for Enter
        loadUser(userName); //carrega o nome do usuário
    }
  };

  return (
    <div className={classes.search}>
      <h2>Busque por usuário:</h2>
      <p>Conheça seus melhores repositórios</p>
      <div className={classes.search_container}>
        <input
          type="text"
          placeholder="Digite o nome do usuário"
          onChange={(e) => setUserName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {/*quando ouver um click eu vou ter a função loadUser passando o userName do useState*/}
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  );
};

export default Search;
