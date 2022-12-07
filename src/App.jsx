// import React, {useState} from 'react'

// const App = () => {
//   let [count, setCount] = useState(0)

//   function updateCount(){
//     setCount(count + 1)
//     console.log(setCount)
//   }

//   function minusCount(){
//     if (count > 0){
//       setCount(count - 1)
//     } 
//   }

//   return (
//     <>
//     <h1>State</h1>
//     <p>You have clicked {count} times!</p>
//     <button onClick={updateCount}>Click Me to add!</button>
//     <button onClick={minusCount}>Click Me to take off!</button>
//     </>
//   )
// }

// export default App










import React, {useState} from 'react'

const ShowCount = ({ value=0 }) => {
  return <p>You have Clicked {value} times!</p>
}

const App = () => {
  let [count, setCount] = useState(0)

  // function minusCount(){
  //   if (count > 0){
  //     setCount(count - 1)
  //   } 
  // }

  return (
    <>
    <h1>State</h1>
    <ShowCount value={count} />
    <button onClick={() => setCount(count + 1)}>Click Me to add!</button>
    </>
  )
}

export default App