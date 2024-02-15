import { useState } from "react";

import Error from "../components/Error.tsx";

import Loader from "../components/Loader.tsx";

import Search from "../components/Search.tsx";
//useState para salvar o estado do usuário

import  User  from '../components/User.tsx';

import { UserProps } from "../types/user.ts";



const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null); //meu usuário pode ser de um desses dois tipos. Inicio meu estado nulo pra saber quando eu tenho um user ou não
  //Função assíncrona loadUser carrega o usuário da API do Github: recebe como parâmetro userName do tipo String;
 const [error, setError] = useState(false);
 const [isLoading, setIsLoading] = useState(false);

  const loadUser = async (userName: string) => {
    //acessa a API do Github baseado no nome de usuário

    setUser(null);
    setIsLoading(true);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    //recebendo o dado acima
    const data = await res.json();

    setIsLoading(false);

    if(res.status === 404){
      setError(true);
      return;
    }

    setError(false);

    const { avatar_url, login, location, followers, following } = data;

    //novo objeto do tipo UserProps
    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    //usuário com dados de user
    setUser(userData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />{" "}
      {/*componente de busca para exibir os dados do usuário */}
      {isLoading && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
