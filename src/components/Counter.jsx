import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <section className="exercise-box">
      <p className="exercise-label">Exercise 3</p>
      <h2>Counter Application</h2>
      <p className="count-display">{count}</p>
      <div className="counter-actions">
        <button type="button" onClick={() => setCount((value) => value - 1)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Increment
        </button>
      </div>
    </section>
  )
}

export default Counter
