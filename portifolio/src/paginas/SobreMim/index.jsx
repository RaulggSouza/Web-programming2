import styles from "./SobreMim.module.css";
import PostModelo from "@/componentes/PostModelo";
import fotoCapa from "@/assets/portrait.png";
import fotoSobreMim from "@/assets/portrait.png";
export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o famoso Asdrubal!</h3>
      <img
        src={fotoSobreMim}
        alt="foto do asdrubal"
        className={styles.fotoSobreMim}
      />
      <p className={styles.paragrafo}>Asdrubal Topolinsk ... </p>
      <p className={styles.paragrafo}>No ensino médio, ... </p>
      <p className={styles.paragrafo}>A trajetória ... </p>
      <p className={styles.paragrafo}>Hoje, ... </p>
    </PostModelo>
  );
}
