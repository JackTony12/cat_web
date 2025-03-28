import { useState } from "react"
import "./catscarusel.css"

const CatsArray = () => {
  const cats = [
    "/images/herocat.png",
    "/images/herocat1.png",
    "images/herocat2.png",
  ]
  const [catIndex, setCatIndex] = useState(0)
  const [isFading, setIsFading] = useState(false)

  const handleNext = () => {
    if (isFading) return
    setIsFading(true)

    setTimeout(() => {
      setCatIndex((prev) => (prev + 1) % cats.length)
    }, 300)

    setTimeout(() => {
      setIsFading(false)
    }, 600)
  }

  return (
    <div className='cat_section'>
      <img
        src={cats[catIndex]}
        alt='cat'
        className={`fade ${isFading ? "fade-out" : "fade-in"}`}
      />
      <button
        className='specialButton'
        onClick={handleNext}
        disabled={isFading}
      >
        <svg
          stroke='currentColor'
          fill='currentColor'
          strokeWidth='0'
          viewBox='0 0 24 24'
          height='1.5em'
          width='1.5em'
        >
          <path fill='none' d='M0 0h24v24H0z'></path>
          <path d='M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'></path>
        </svg>
      </button>
    </div>
  )
}

export default CatsArray
