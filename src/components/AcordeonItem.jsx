import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const AcordeonItem = ({ title, isOpen, onClick, style, children }) => {
  return (
    <>
      {/* Encabezado del ítem */}
      <div 
        className={`flex justify-between items-center w-full p-5 cursor-pointer font-medium text-gray-500 first:rounded-t-xl ${isOpen ? '' : style} border-t border-t-gray-200 first:border-t-0 dark:border-t-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3 transition`}
        onClick={onClick}
      >
        <span className="text-lg font-medium">{title}</span>
        <FontAwesomeIcon className={`transform ${isOpen ? 'rotate-180' : ''} transition duration-300`} icon={faChevronDown} />
      </div>
      
      {/* Contenido del ítem */}
      <div
        className={`border-t border-t-gray-200 dark:border-t-gray-700 p-5 ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </>
  );
};

export default AcordeonItem;
