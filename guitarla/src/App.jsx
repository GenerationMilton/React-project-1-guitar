
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { useState, useEffect } from 'react'

function App() {

  // hook useState
  const [auth, setAuth] = useState(false);
  // hook useEffect ,make a piece of code when executes an state in the application
  useEffect(() => {
   if(auth){
    console.log('Autenticado');
   }
  },[auth]);

  setTimeout(() => {
    setAuth(true)
  }, 3000);

  return (
    <>
    <Header />  


    <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          <Guitar />
          
        </div>
    </main>


    <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
            <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
    </footer>

    </>
  )
}

export default App
