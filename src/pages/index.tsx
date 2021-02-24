import { FormEvent, useRef, useState } from 'react'
import Style from './styles'

const Home = () => {
  const [result, setResult] = useState('')
  const pxPerRemRef = useRef(null)
  const minWidthRef = useRef(null)
  const maxWidthRef = useRef(null)
  const minFontRef = useRef(null)
  const maxFontRef = useRef(null)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    const pxPerRemValue = Number(pxPerRemRef.current.value)
    const minWidthValue = Number(minWidthRef.current.value)
    const maxWidthValue = Number(maxWidthRef.current.value)
    const minFontValue = Number(minFontRef.current.value)
    const maxFontValue = Number(maxFontRef.current.value)

    const minWidth = minWidthValue / pxPerRemValue
    const maxWidth = maxWidthValue / pxPerRemValue

    const slope = (maxFontValue - minFontValue) / (maxWidth - minWidth)
    const yAxisIntersection = -minWidth * slope + minFontValue

    setResult(
      `font-size: clamp(${minFontValue}rem, 
        ${yAxisIntersection.toFixed(4)}rem + 
        ${(slope * 100).toFixed(4)}vw, ${maxFontValue}rem);`
    )
  }

  return (
    <Style>
      <h1>Fonte Size responsiva usando clamp</h1>

      <form onSubmit={onSubmit}>
        <input ref={pxPerRemRef} type='text' name='pxPerRem' placeholder='Pixeis por rem' />
        <input ref={minWidthRef} type='text' name='minWidth' placeholder='Largura mínima' />
        <input ref={maxWidthRef} type='text' name='maxWidth' placeholder='Largura máxima' />
        <input ref={minFontRef} type='text' name='minFont' placeholder='Fonte mínima' />
        <input ref={maxFontRef} type='text' name='maxFont' placeholder='Fonte máxima' />

        <button type='submit'>Calcular</button>
      </form>

      <h2>Resultado: {result}</h2>
    </Style>
  )
}

export default Home
