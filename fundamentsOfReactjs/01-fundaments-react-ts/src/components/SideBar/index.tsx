import styles from './index.module.css';
import { PencilLine } from 'phosphor-react';
import { Avatar } from '../Avatar/SideBar'

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1618335829737-2228915674e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="image-avatar" />

      <div className={styles.profile}>
        <Avatar uri="https://avatars.githubusercontent.com/u/27962779?v=4" />
        <strong>Alisson Macedo</strong>
        <span>Web Developer</span>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
          </a>
        </footer>
      </div>
    </aside>
  )
}