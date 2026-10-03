import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";

function App() {

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
