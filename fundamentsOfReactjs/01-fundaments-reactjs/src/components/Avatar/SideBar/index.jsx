import styles from './index.module.css';

export function Avatar({ uri }) {
  return (
    <img className={styles.avatar} src={uri} />
  )
}