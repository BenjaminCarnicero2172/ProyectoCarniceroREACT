import { createContext, useState } from "react";

const FavsContext = createContext();

export default FavsContext;


export const FavoritosProvider = ({ children }) => {
    const [listaDeFavoritos, setListaDeFavoritos] = useState([]);
      const agregarAFavoritos = (itemNuevo) => {
          console.log('agregarAFavoritos: ', itemNuevo);
      const yaEstaEnFavoritos = listaDeFavoritos.some((item) => item.id === itemNuevo.id);
      if(yaEstaEnFavoritos) {
        // agregar algun switalert de boostrap
        return;
      } else {
        setListaDeFavoritos([...listaDeFavoritos, itemNuevo]);
      }
      
    }

    return(
    <FavsContext.Provider value={{listaDeFavoritos, agregarAFavoritos}}>
        {children}
    </FavsContext.Provider>)
  }