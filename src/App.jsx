import { HeaderLogo } from "./components/HeaderLogo";
import { ContentDefault } from "./components/ContentDefault";
import { useEffect, useState } from "react";
import { PlusCircle, Trash } from "@phosphor-icons/react";

function App() {
  const [tasks, setTasks] = useState("");
  const [taskInput, setTaskInput] = useState("");
  const [checkedStateValue, setCheckedStateValue] = useState(0);

  const [checkedState, setCheckedState] = useState(
    new Array(tasks.length).fill(false)
  );

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const total = updatedCheckedState.reduce((sum, currentState) => {
      if (currentState === true) {
        return sum + 1;
      }
      return sum;
    }, 0);

    setCheckedStateValue(total);
  };

  function addTask(){
    setTasks(prevTask => [...prevTask, taskInput])
  }

  function deleteTask(position){
    const taskUpdate = tasks.filter((item, index) => index != position)

    setTasks(taskUpdate)
  }

  useEffect(()=>{
    
  },[])

  return (
    <div className="h-screen">
      <HeaderLogo />
      <div className="w-screen lg:w-[50%] flex gap-2 absolute top-[17%] lg:left-[25%] px-4 lg:p-0">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="w-full bg-gray-500 text-base p-4 rounded-lg"
          onChange={(e) => {
            setTaskInput(e.target?.value);
          }}
        />
        <button onClick={() => addTask()} className="text-gray-100 font-bold text-sm flex gap-2 justify-center items-center bg-blue-900 rounded-lg w-24 hover:bg-blue-500">
          Criar
          <PlusCircle size={16} />
        </button>
      </div>
      <div className="w-screen text-gray-200 flex flex-col items-center mt-20 px-2">
        <div className="w-full lg:w-1/2">
          <header className="w-full flex justify-between pb-2 border-b-[0.5px] border-gray-400">
            <div className="flex items-center gap-2 font-bold">
              <p className="text-sm text-blue-500 block">Tarefas criadas</p>
              <p className="text-xs px-4 py-2 bg-gray-400 rounded-full">
                {tasks.length}
              </p>
            </div>
            <div className="flex items-center gap-2 font-bold">
              <p className="text-sm text-purple-500 block">Concluídas</p>
              <p className="text-xs px-4 py-2 bg-gray-400 rounded-full">
                {checkedStateValue}
              </p>
            </div>
          </header>
          <div className="mt-6 w-full flex flex-col gap-2">
            {tasks ? (
              tasks.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full flex gap-4 justify-between items-center bg-gray-500 p-4 rounded-lg"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="checkbox-wrapper-39">
                        <label>
                          <input type="checkbox" id={`checkbox-${index}`} checked={checkedState[index]} onChange={() => handleOnChange(index)}/>
                          <span className="checkbox" htmlFor={`checkbox-${index}`}></span>
                        </label>
                      </div>
                      <label
                        htmlFor={`checkbox-${index}`}
                        className="text-gray-100"
                      >
                        {item}
                      </label>
                    </div>

                    <button onClick={() => deleteTask(index)}>
                      <Trash size={20} className="text-gray-300" />
                    </button>
                  </div>
                );
              })
            ) : (
              <ContentDefault />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
