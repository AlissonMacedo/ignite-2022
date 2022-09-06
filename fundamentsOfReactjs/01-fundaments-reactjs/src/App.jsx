import './global.css'
import styles from './App.module.css'

import { Header } from './components/Header'
import { Posts } from './components/Posts'
import { SideBar } from './components/SideBar'

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <Posts />
      </div>
    </div>
  )
}

export default App
