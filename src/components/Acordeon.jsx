import React, { useState } from 'react';

const Acordeon = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null); // Si hace clic en el mismo, cierra el ítem
    } else {
      setActiveIndex(index); // Abre el ítem correspondiente
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl border border-gray-200 dark:border-gray-700">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            onClick: () => toggleItem(index),
            isOpen: activeIndex === index,
            key: index,
          });
        }
        return child;
      })}
    </div>
  );
};

export default Acordeon;
