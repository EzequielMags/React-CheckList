import { use, useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import Dialog from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import TodoContext from "./components/TodoContext"
import TodoGroup from "./components/TodoGroup"

// const todos = [
//   {
//     id: 1,
//     description: "JSX e componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 2,
//     description: "Props, state e hooks",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 3,
//     description: "Ciclo de vida dos componentes",
//     completed: false,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 4,
//     description: "Testes unitários com Jest",
//     completed: false,
//     createdAt: "2022-10-31"
//   }
// ]
// const completed = [
//   {
//     id: 5,
//     description: "Controle de inputs e formulários controlados",
//     completed: true,
//     createdAt: "2022-10-31"
//   },
//   {
//     id: 6,
//     description: "Rotas dinâmicas",
//     completed: true,
//     createdAt: "2022-10-31"
//   }
// ]

function App() {

  const [showDialog, setShowDialog] = useState(false)
  const { 
    todos,
    addTodo,
  } = use(TodoContext)

  const toggleShowDialog = () => {
    setShowDialog(!showDialog)
  }

  const handleFormSubmit = (formData) => {
  addTodo(formData)
  toggleShowDialog()
  }

  
  return (
    <main>
      <Container>
        <Header>
          <Heading>
            <IconSchool /> Plano de estudos
          </Heading>
        </Header>
        <ChecklistsWrapper>
          <TodoGroup heading="Para estudar" items={todos.filter(todo => !todo.completed)} />
          <TodoGroup heading="Concluído" items={todos.filter(todo => todo.completed)} />
          {/* <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.filter(todo => !todo.completed).map(function (t) {
              return <ToDoItem key={t.id} item={t} onToggleCompleted={toggleTodoCompleted} onDeleteTodo={deleteTodo}/>
            })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {todos.filter(todo => todo.completed).map(function (t) {
              return <ToDoItem key={t.id} item={t} onToggleCompleted={toggleTodoCompleted} onDeleteTodo={deleteTodo}/>
            })}
          </ToDoList> */}
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleShowDialog} addTodo={handleFormSubmit} />
            <FabButton onClick={toggleShowDialog}>
              <IconPlus />
            </FabButton>
          </Footer>
        </ChecklistsWrapper>
      </Container>
    </main>
  )
}

export default App
