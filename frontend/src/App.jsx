import './App.css'

function App() {
  return (
    <div className="container">
      <div className="card">
        <h1>🚀 Bem-vindo!</h1>
        <p>Pipeline CI/CD funcionando com sucesso</p>

        <h3>📌 Etapas do Pipeline</h3>

        <ol className="steps">
          <li>Checkout do repositório</li>
          <li>Configuração do Node.js</li>
          <li>Instalação das dependências</li>
          <li>Build da aplicação</li>
          <li>Deploy automático no GitHub Pages</li>
        </ol>

        <span className="footer">
          DevOps • CI/CD • Front-end • GitHub Actions
        </span>
      </div>
    </div>
  )
}

export default App
