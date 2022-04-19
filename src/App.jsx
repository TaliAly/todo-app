import { StrictMode } from "react"
import Header from "./components/header"
import Todo from "./components/input"


export default function App() {
  return (
    <StrictMode>
      <Header />
      <Todo />
    </StrictMode>
  )
}