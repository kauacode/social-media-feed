import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/kauacode.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Kauã Braccio</strong>
            <span>Full Stack Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2024-10-10 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Eae pessoal!!</p>
        <p>Esse é um site desenvolvido utilizando o React para aprender os conceitos dessa tecnologia</p>
        <p>Entre em contato comigo! <a href="">https://www.linkedin.com/in/kauabraccio/</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#react</a>{' '}
          <a href="">#fullstack</a>
        </p>
      </div>
    </article>
  )
}