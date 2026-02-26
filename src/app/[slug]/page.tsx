import Comments from "../components/comments/Comments";
import Menu from "../components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

export default function SinglePage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
            voluptatibus?
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}>02.06.2026</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores est, maiores dolor totam iste incidunt, deserunt cum a
              temporibus commodi tenetur velit deleniti labore blanditiis
              sapiente eos consectetur nisi cumque?
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
              doloribus.
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores est, maiores dolor totam iste incidunt, deserunt cum a
              temporibus commodi tenetur velit deleniti labore blanditiis
              sapiente eos consectetur nisi cumque?
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores est, maiores dolor totam iste incidunt, deserunt cum a
              temporibus commodi tenetur velit deleniti labore blanditiis
              sapiente eos consectetur nisi cumque?
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
