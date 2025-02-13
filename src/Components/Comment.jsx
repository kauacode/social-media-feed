import styles from "./Comment.module.css"

export function Comment() {
  return (
    <footer>
      <h3>Deixe seu feedback</h3>
      <div className={styles.comment}>
        <textarea name="" id="" placeholder="Digite um comentário..."></textarea>
      </div>
      <button className={styles.button} type="button">Publicar</button>
    </footer>
  )
}