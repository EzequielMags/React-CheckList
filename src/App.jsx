import { useState } from "react"
import { ChecklistsWrapper } from "./components/ChecklistsWrapper"
import { Container } from "./components/Container"
import Dialog from "./components/Dialog"
import { FabButton } from "./components/FabButton"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Heading } from "./components/Heading"
import { IconPlus, IconSchool } from "./components/icons"
import { SubHeading } from "./components/SubHeading"
import { ToDoItem } from "./components/ToDoItem"
import { ToDoList } from "./components/ToDoList"

const todos = [
  {
    id: 1,
    description: "JSX e componentes",
    completed: false,
    createdAt: "2022-10-31"
  },
  {
    id: 2,
    description: "Props, state e hooks",
    completed: false,
    createdAt: "2022-10-31"
  },
  {
    id: 3,
    description: "Ciclo de vida dos componentes",
    completed: false,
    createdAt: "2022-10-31"
  },
  {
    id: 4,
    description: "Testes unitários com Jest",
    completed: false,
    createdAt: "2022-10-31"
  }
]
const completed = [
  {
    id: 5,
    description: "Controle de inputs e formulários controlados",
    completed: true,
    createdAt: "2022-10-31"
  },
  {
    id: 6,
    description: "Rotas dinâmicas",
    completed: true,
    createdAt: "2022-10-31"
  }
]

function App() {

  const [showDialog, setShowDialog] = useState(false)

  const toggleShowDialog = () => {
    setShowDialog(!showDialog)
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
          <SubHeading>Para estudar</SubHeading>
          <ToDoList>
            {todos.map(function (t) {
              return <ToDoItem key={t.id} item={t} />
            })}
          </ToDoList>
          <SubHeading>Concluído</SubHeading>
          <ToDoList>
            {completed.map(function (t) {
              return <ToDoItem key={t.id} item={t} />
            })}
          </ToDoList>
          <Footer>
            <Dialog isOpen={showDialog} onClose={toggleShowDialog} paragrafo={"Faça elevar, o cosmo do seu coração, todo mal combater, despertar o poder"}/>
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
