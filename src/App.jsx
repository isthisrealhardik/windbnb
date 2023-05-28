import Main from "./components/Main";
import Nav from "./components/Nav";

const App = () => {
  return(
    <div className="bg-primary h-screen w-screen flex flex-col justify-start items-start">
      <Nav />
      <Main />
    </div>
  )
}

export default App;