import React, {useEffect, useState} from 'react'
import Gif from './Gif'
import getGifs from '../services/getGifs'

export default function ListOfGifs ({ params }){
  const { keyword } = params
  const [gifs, setGifs] = useState(
    { loading: false, results: []}
  )

  useEffect(function () {//recibe 2 parámetros, el 1ro es la función que queremos ejecutar y el 2do las dependencias que tiene este efecto(array: lista de dependencias)
    setGifs(
      actualGifs => ({loading: true, results: actualGifs.resutls})
    )

    getGifs({ keyword })
      .then(gifs => {
        setGifs({ loading: false, results: gifs })
      })
  },[keyword])//este es el array con el 2do parámetro, si se pone vacío significa que solo se va a ejecutar 1 vez

if (gifs.loading) return <i>Cargando</i>

  return <div>
  {
      gifs.results.map(({id, title, url}) =>
      <Gif
        id={id}
        key={id}
        title={title}
        url={url}
      />
    )
  }
  </div>
}
