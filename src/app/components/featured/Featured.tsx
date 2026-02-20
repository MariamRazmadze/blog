import styles from "./featured.module.css";
import Image from "next/image";

export default function Featured() {
  return (
    <div className={styles.container}>
      <h1>
        <b>Hey, I&apos;m Mariam! </b>I&apos;m writing about things I&apos;m
        learning.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. A, optio?
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            deserunt minus optio incidunt ea odio corrupti voluptas esse amet
            voluptate blanditiis nobis mollitia est error? Recusandae et
            laudantium ex temporibus?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}
