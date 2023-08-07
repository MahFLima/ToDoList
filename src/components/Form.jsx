import React from 'react';
import {PlusCircle} from "@phosphor-icons/react";

function Form() {
  return (
    <div className='w-screen lg:w-[50%] flex gap-2 absolute top-[17%] lg:left-[25%] px-4 lg:p-0'>
        <input type="text" placeholder='Adicione uma nova tarefa' className='w-full bg-gray-500 text-base p-4 rounded-lg'/>
        <button className='text-gray-100 font-bold text-sm flex gap-2 justify-center items-center bg-blue-900 rounded-lg w-24 hover:bg-blue-500'>
          Criar
          <PlusCircle size={16} /> 
        </button>
    </div>
  );
}

export default Form;