import styles from "./Banner.module.css";
import minhaFoto from "@/assets/portrait.png";
export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Hello World!</h1>
        <p className={styles.paragrafo}>
          Hello people! I am Raul Souza,
        </p>
      </div>
      <div className={styles.imagens}>
        <img
          className={styles.minhaFoto}
          src={minhaFoto}
          alt="Foto do Raul"
        />
      </div>
    </div>
  );
}
