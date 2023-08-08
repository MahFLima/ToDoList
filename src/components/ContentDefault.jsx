import Clipboard  from "../assets/Clipboard"

export function ContentDefault() {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <Clipboard/>
      <p className="flex flex-col text-center text-gray-300">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}