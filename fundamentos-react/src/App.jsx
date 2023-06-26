import './global.css'
import { Header } from './components/Header'

import styles from "./App.module.css"

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
      <aside>sidebar</aside>
      <main>
        teste de tempo: <time>20h00</time>
        <br/>
        <br/>
        <time title="25 de maio, às 08h13" dateTime="2022-07-25 08:13:38">Publicado há 1h</time>
      </main>
      </div>
    </div>
  )
}

export default App
