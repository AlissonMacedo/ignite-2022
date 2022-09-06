import styles from './index.module.css';


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img src="https://github.com/AlissonMacedo.png" alt="avatar" />
          <div className={styles.authorInfo} >
            <strong>Alisson Macedo</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="11 de maio às 08:13h" dateTime="2022-05-11 08:11:00">Publicado a 1 hora.</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p><a href="https://github.com/AlissonMacedo">jane.design/doctorcare</a></p>
        <p>
          <a href="">#Novo projeto</a>{' '}
          <a href="">#rocketseat</a>{' '}
          <a href="">#nlw</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        <textarea className={styles.comment} placeholder="Deixe um comentário" />

        <button type="submit">Comentar</button>
      </form>
    </article>
  )
}