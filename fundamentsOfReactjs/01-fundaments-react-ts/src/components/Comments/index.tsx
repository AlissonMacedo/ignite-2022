import { Trash, ThumbsUp } from 'phosphor-react';
import { Avatar } from '../Avatar/Post';
import styles from './index.module.css';

export function Comments() {
  return (
    <div className={styles.comment}>
      <Avatar border={false} uri="https://github.com/AlissonMacedo.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alisson Macedo</strong>
              {/* <time time="11 de Maio às 08:13h" datetime="2022-05-11">Cerca de 1h atrás</time> */}
              <time>Cerca de 1h atrás</time>
            </div>

            <button title="Deletar coméntario">
              <Trash size={20} />
            </button>
          </header>

          <p>Muito bom Devon, parabéns👏🏻👏🏻</p>
        </div>

        <footer>
          <button>
            <ThumbsUp size={20} />
            Aplaudir
            <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}