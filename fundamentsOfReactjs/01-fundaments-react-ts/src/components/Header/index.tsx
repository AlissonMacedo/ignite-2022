import styles from './index.module.css'
import logo from '../../assets/ignite.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt='ignite' />
    </header>
  )
}