import Navbar from "./components/Navbar.jsx";

function App() {

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <main>
        <section className="min-h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">
            My Portfolio
          </h1>
        </section>
      </main>
    </div>
  )
}

export default App
