import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@components/Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faX, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header className="bg-pink-200/75 absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
                <Link to="/" className="-m-1.5 p-1.5">
                    <span className="sr-only">SusanaNzth</span>
                    <Logo style="h-8" />
                </Link>
            </div>
            <div className="flex lg:hidden">
                <button id="btnMenu" type="button" onClick={toggleMenu} 
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span className="sr-only">Abrir menú</span>
                    <FontAwesomeIcon className="h-6 w-6" icon={faBars} />
                </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
                <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">Inicio</Link>
                <Link to="/fundamentos" className="text-sm font-semibold leading-6 text-gray-900">Fundamentos</Link>
                <Link to="/javascript" className="text-sm font-semibold leading-6 text-gray-900">Javascript</Link>
                <Link to="/php" className="text-sm font-semibold leading-6 text-gray-900">PHP</Link>
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                <a href="https://susananzth.com/" target="_blank" className="text-sm font-semibold leading-6 text-gray-900">
                    Contáctame
                    <FontAwesomeIcon className="ms-2" icon={faArrowRightLong} />
                </a>
            </div>
        </nav>
        <div id="menuMobile" className={`${menuVisible ? '' : 'hidden'}`} role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">SusanaNzth</span>
                        <Logo style="h-8" />
                    </Link>
                    <button type="button" onClick={toggleMenu} className="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span className="sr-only">Cerrar menú</span>
                        <FontAwesomeIcon className="h-6 w-6" icon={faX} />
                    </button>
                </div>
                <div className="mt-6 flow-root">
                    <div className="-my-6 divide-y divide-gray-500/10">
                        <div className="space-y-2 py-6">
                            <Link to="/" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Inicio</Link>
                            <Link to="/fundamentos" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Fundamentos</Link>
                            <Link to="/javascript" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Javascript</Link>
                            <Link to="/php" className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">PHP</Link>
                        </div>
                        <div className="py-6">
                            <a 
                                href="https://susananzth.com/" target="_blank"
                                className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                Contáctame
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Navbar
