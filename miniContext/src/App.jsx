// import Login from "./Components/Login"
// import Profile from "./Components/Profile"
// import UserContextProvider from "./context/UserContextProvider"

// function App() {

//   return (

//      <UserContextProvider>
//       <Login />
//       <Profile />
//      </UserContextProvider>

//   )
// }

// export default App

import "./App.css"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./context/UserContextProvider"

function App() {
  return (
    <div
      style={{
        justifyItems: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <UserContextProvider>
        <h1>React with Chai and share is important</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App
