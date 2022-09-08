import styles from './index.module.css';

export function Avatar({ uri, border = true }) {
  return (
    <img className={border ? styles.avatarWithBorder : styles.avatar} src={uri} />
  )
}