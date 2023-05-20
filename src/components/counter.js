import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../reducers/counter'

const Counter = () => {
  const dispatch = useDispatch()

  // Select the count value from the state
  const count = useSelector(state => state.counter.count)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter