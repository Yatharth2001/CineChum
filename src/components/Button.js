import React, { Children } from "react";

export const Button = ({children}) => {
  return (
    
      <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg px-5 py-3 mr-2 mb-2 font-medium">
        {children}
      </button>
   
  );
};