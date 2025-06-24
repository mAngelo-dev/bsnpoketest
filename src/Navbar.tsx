import {CgPokemon} from "react-icons/cg";
import {FaRegStar} from "react-icons/fa";
import {Link} from "react-router-dom";

function Navbar() {
  return (<>
    {/*Codigo modificado da ideia em: https://www.creative-tim.com/twcomponents/components/basice-navbar*/}
    {/*Icones disponíveis https://react-icons.github.io/react-icons/*/}
    <header>
      <nav className="bg-gray-700">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-50">PokéBSN</h1>
          <div className="flex space-x-10">
            <div className="flex items-center space-x-2">
              <CgPokemon color="white" size={30}/>
              <Link to="/">
                <span className="text-gray-50">Página Inicial</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <FaRegStar color={"white"} size={30}/>
              <Link to="/favoritos">
                <span className="text-gray-50">Favoritos</span>
              </Link>
            </div>
            {/*  Ideia descartada de página de creditos */}
            {/*  <div className="flex items-center space-x-2">*/}
            {/*    <span className="text-gray-50">Credits</span>*/}
            {/*  </div>*/}
          </div>
          <div className="lg:flex hidden items-center space-x-2 bg-white py-1 px-2 rounded-full">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 cursor-pointer" fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                    </svg>
                  </span>
            <input className="outline-none" name="pokemon" type="text" placeholder="Pesquisar"/>
          </div>
        </div>
      </nav>
    </header>
  </>)
}

export default Navbar;