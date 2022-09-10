import { Post } from '../Post'
import styles from './index.module.css'

export function Posts() {
  return (
    <div className={styles.container}>
      <Post />
      <Post />
      <Post />
    </div>
  )
}