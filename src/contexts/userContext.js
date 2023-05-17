import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false)

    return (
        <UserContext.Provider value ={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}

// O Value é um atributo que vai receber os valores que queremos compartilhar aos nossos componentes
// O UserStore, precisa ser maiuscula, porque é um componente.

//Envolver a raiz da aplicação com o no UserStore, para toda aplicação ter acesso aos valores

// Propriedade padrão do React "Children" = filho // vai ser basicamente o que está dentro do componentes o que estiver envolvido na UserStore

// O UserStore, será envolvido na raiz da nossa aplicação (index.js)