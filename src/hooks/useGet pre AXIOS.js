/* 
Cuando el componente se monte, este Custom Hook va a realizar una HTTP request a un endpoint variable y retornará la información relativa a dicha petición, si la petición está en progreso y si hubo un error. Esto es un servicio base que devuelve info, luego, cada componente debe manejar esa info de acuerdo a lo que deba renderizar

Esta primera versión no requiere el archivo API.js, pues no usa AXIOS
*/

import { useEffect, useState } from 'react';
const base_url = 'https://rickandmortyapi.com/api/';

export const useGet = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const getData = async (endpoint) => {
    try {
      const res = await fetch(`${base_url}${endpoint}`);
      console.log(res);
      const json = await res.json()
      setData(json)
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    } catch (error) {
      console.log('salgo por aquíiii');
      setError(true)
    }
  };

  useEffect(() => {
    getData(endpoint);
  }, [endpoint])
  return [data, isLoading, error]
}

