/* 
Cuando el componente se monte, este Custom Hook va a realizar una HTTP request a un endpoint variable y retornará la información relativa a dicha petición, si la petición está en progreso y si hubo un error. Esto es un servicio base que devuelve info, luego, cada componente debe manejar esa info de acuerdo a lo que deba renderizar

//esta segunda versión requiere el archivo de configuración de AXIOS (API.js)
*/

import { useEffect, useState } from 'react';
import { API } from "../API"

export const useGet = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async (endpoint) => {
    try {
      const { data } = await API.get(endpoint);
      setData(data)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      setError(true)
    }

  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint])
  return [data, isLoading, error]
}

