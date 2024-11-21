import Header from "./assets/Components/Header"
import MenuPage from "./assets/Components/Menu/MenuPage"
import Footer from "./assets/Components/Footer"
const App = () => {
  return (
    <div className="w-screen h-screen">
      <div className=" w-full h-2/6">
        <Header />
      </div>
      <div className="w-full">
        <MenuPage />
      </div>
      <div className="w-full h-2/6">
      <Footer />
      </div>
    </div>
  )
}

export default App