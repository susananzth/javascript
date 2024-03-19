import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

export default function Banner() {
  return (
    <div className="bg-pink-200 relative isolate flex items-center gap-x-6 
      overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-gray-900">
          <strong className="font-semibold">Laravel</strong> &middot; 
          Proyecto base de Login, Roles, Permisos
        </p>
        <a
          href="https://github.com/susananzth/Laravel_Login_Panel_Roles"
          className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold 
          text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 
          focus-visible:outline-offset-2 focus-visible:outline-gray-900"
        >
          Ver ahora <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
        >
          <span className="sr-only">Cerrar</span>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </div>
    </div>
  );
}
