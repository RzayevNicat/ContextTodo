import { createContext, useState } from "react";

export const Context = createContext();
const UserProvider = ({ children }) => {

    const [todo, setTodo] = useState([])

    const data = {
        todo, setTodo
    }

    return (
        <Context.Provider value={data}>{children}</Context.Provider>
    )
}

export default UserProvider