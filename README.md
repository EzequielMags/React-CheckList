![](thumbnail.png)

# App de Checklist de Estudos

Um projeto prático desenvolvido passo a passo para quem já tem o básico de ReactJS e quer evoluir para construir aplicações mais organizadas, escaláveis e com experiência moderna. Ao longo do curso, criamos um app de checklist para organizar estudos, tarefas e o que mais precisar.

## 🔨 Funcionalidades do projeto

* ✅ **Adição de tarefas**: Crie novas tarefas através do botão flutuante (FAB) e modal
* ✏️ **Edição de tarefas**: Edite tarefas existentes clicando no ícone de lápis
* 🗑️ **Exclusão de tarefas**: Remova tarefas clicando no ícone de lixeira
* ☑️ **Marcação de conclusão**: Marque tarefas como concluídas através do checkbox
* 📋 **Organização automática**: Tarefas são automaticamente organizadas em "Para estudar" e "Concluído"
* 📅 **Data de criação**: Cada tarefa exibe a data de criação formatada em português
* 💾 **Persistência de dados**: Todas as tarefas são salvas automaticamente no localStorage
* 🎨 **Feedback visual**: Mensagem amigável quando não há tarefas cadastradas (empty state)
* 🎭 **Modal interativo**: Dialog nativo do HTML5 para adicionar/editar tarefas
* 🎯 **Interface moderna**: Design limpo e intuitivo com componentes bem estruturados

![](screen-capture.png)

## ✔️ Técnicas e tecnologias utilizadas

O desenvolvimento do projeto aborda as seguintes técnicas e tecnologias:

### React e Hooks
* **React 19**: Versão mais recente do React com recursos modernos
* **useState**: Gerenciamento de estado local e global das tarefas
* **useEffect**: Sincronização automática com localStorage
* **useContext**: Context API para compartilhar estado global entre componentes
* **use (React 19)**: Hook moderno para consumir contextos e promises
* **useRef**: Referência ao elemento dialog para controle programático

### Arquitetura e Organização
* **Context API**: Gerenciamento de estado global através de `TodoProvider` e `TodoContext`
* **Componentização**: Componentes reutilizáveis e bem organizados:
  - `TodoProvider`: Provider do contexto com toda lógica de negócio
  - `TodoGroup`: Agrupa tarefas por categoria (Para estudar / Concluído)
  - `ToDoItem`: Item individual de tarefa com ações
  - `ToDoList`: Lista de tarefas
  - `Dialog`: Modal para adicionar/editar tarefas
  - `FormularioDialog`: Formulário dentro do modal
  - `FabButton`: Botão flutuante de ação
  - `EmptyTodo`: Estado vazio quando não há tarefas
  - `Header`, `Footer`, `Container`, `ChecklistsWrapper`: Componentes de layout

### Estilização
* **CSS Modules**: Estilos organizados por componente
* **CSS puro**: Sem dependências de bibliotecas de estilo
* **Design responsivo**: Interface adaptável

### Funcionalidades Técnicas
* **Formulários controlados**: Manipulação de inputs através de FormData
* **Persistência local com localStorage**: Salva as tarefas automaticamente
* **Dialog HTML5 nativo**: Uso do elemento `<dialog>` para modais
* **Ícones SVG personalizados**: Sistema de ícones customizado
* **Data e formatação**: Manipulação de datas com `toLocaleDateString`

### Ferramentas de Desenvolvimento
* **Vite**: Build tool moderna e rápida
* **ESLint**: Linting para qualidade de código
* **Node.js 22+**: Ambiente de execução

## 🛠️ Como rodar o projeto

Após baixar o projeto, siga os passos abaixo para executar localmente:

### Pré-requisitos
- Node.js versão 22.0.0 ou superior instalado ([guia oficial](https://nodejs.org/en/download/))

### Instalação e Execução

1. No terminal, navegue até a pasta do projeto:

```bash
cd "React utilizando hooks para gerenciar estados"
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Acesse no navegador: [http://localhost:5173](http://localhost:5173)

### Outros comandos disponíveis

```bash
# Build para produção
npm run build

# Preview da build de produção
npm run preview

# Executar linter
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── App.jsx                 # Componente principal da aplicação
├── main.jsx               # Ponto de entrada da aplicação
├── index.css              # Estilos globais
└── components/
    ├── TodoContext.js     # Context API para estado global
    ├── TodoProvider/      # Provider com lógica de negócio
    ├── TodoGroup/         # Agrupamento de tarefas
    ├── ToDoItem/          # Item individual de tarefa
    ├── ToDoList/          # Lista de tarefas
    ├── Dialog/            # Modal para adicionar/editar
    ├── formularioDialog/  # Formulário do modal
    ├── EmptyTodo/         # Estado vazio
    ├── FabButton/         # Botão flutuante
    ├── Header/            # Cabeçalho
    ├── Footer/            # Rodapé
    ├── Container/         # Container principal
    ├── ChecklistsWrapper/ # Wrapper das listas
    ├── Heading/           # Título
    ├── SubHeading/        # Subtítulo
    ├── TextInput/         # Input de texto
    └── icons/             # Ícones SVG
```

## 🎯 Funcionalidades Detalhadas

### Gerenciamento de Tarefas
- Cada tarefa possui: `id`, `description`, `completed`, `createdAt`
- IDs são gerados automaticamente baseados no tamanho da lista
- Datas são armazenadas em formato ISO e exibidas em português brasileiro

### Persistência
- As tarefas são automaticamente salvas no `localStorage` sempre que há alterações
- Ao recarregar a página, as tarefas são restauradas automaticamente
- Chave utilizada: `"todos"`

### Interface do Usuário
- Botão flutuante (FAB) no canto inferior direito para adicionar novas tarefas
- Modal que se abre ao clicar no FAB ou no ícone de edição
- Checkbox para marcar/desmarcar tarefas como concluídas
- Botões de ação (editar e excluir) em cada tarefa
- Organização visual clara entre tarefas pendentes e concluídas

## 📚 Mais informações do curso

Curtiu o projeto e quer aprender na prática? O passo a passo completo faz parte do segundo curso da carreira React da Alura, com foco em experiência real de desenvolvimento, boas práticas e refatoração progressiva.

Se quiser experimentar, explore o código e customize o checklist do seu jeito!

---

Vida longa e próspera 🚀
