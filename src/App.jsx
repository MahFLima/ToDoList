import { HeaderLogo } from "./components/HeaderLogo";
import { Card } from "./components/Card";
import { ContentDefault } from "./components/ContentDefault";
import { useEffect, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

function App() {
  const [tasks, setTasks] = useState(["teste", "teste"])
  const [taskInput, setTaskInput] = useState("")
  const [isCheckedTask, setIsCheckedTask] = useState("")

  useEffect(() => {

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
        <button
          className="text-gray-100 font-bold text-sm flex gap-2 justify-center items-center bg-blue-900 rounded-lg w-24 hover:bg-blue-500"
        >
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
              <p className="text-xs px-4 py-2 bg-gray-400 rounded-full">0</p>
            </div>
          </header>
          <div className="mt-6 w-full flex flex-col gap-2">
            {tasks ? (
              tasks.map((item, index) => {
                return <Card key={index} name={item} check={`task${index}`}/>;
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
