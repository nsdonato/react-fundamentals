// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// EJERCICIO
// const smallBox = (
//   <div
//     className="box box--small"
//     style={{backgroundColor: 'lightblue', fontStyle: 'italic'}}
//   >
//     small lightblue box
//   </div>
// )
// const mediumBox = (
//   <div
//     className="box box--medium"
//     style={{backgroundColor: 'pink', fontStyle: 'italic'}}
//   >
//     medium pink box
//   </div>
// )
// const largeBox = (
//   <div
//     className="box box--large"
//     style={{backgroundColor: 'orange', fontStyle: 'italic'}}
//   >
//     large orange box
//   </div>
// )

// function App() {
//   return (
//     <div>
//       {smallBox}
//       {mediumBox}
//       {largeBox}
//     </div>
//   )
// }

// export default App

// EXTRA CREDIT 1
// function App() {
//   const Box = ({className, style, ...otherProps}) => {
//     return (
//       <div
//         className={`box ${className}`}
//         style={{fontStyle: 'italic', ...style}}
//         {...otherProps}
//       />
//     )
//   }
//   return (
//     <div>
//       <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
//         small lightblue box
//       </Box>
//       <Box className="box--medium" style={{backgroundColor: 'pink'}}>
//         medium pink box
//       </Box>
//       <Box className="box--large" style={{backgroundColor: 'orange'}}>
//         large orange box
//       </Box>
//     </div>
//   )
// }

// export default App

// EXTRA CREDIT 2
function App() {
  const Box = ({size, style, ...otherProps}) => {
    return (
      <div
        className={`box box--${size}`}
        style={{fontStyle: 'italic', ...style}}
        {...otherProps}
      />
    )
  }
  return (
    <div>
      <Box size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
      </Box>
      <Box size="medium" style={{backgroundColor: 'pink'}}>
        medium pink box
      </Box>
      <Box size="large" style={{backgroundColor: 'orange'}}>
        large orange box
      </Box>
    </div>
  )
}

export default App
