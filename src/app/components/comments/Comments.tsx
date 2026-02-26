import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Comments() {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea placeholder="white a comment..." className={styles.input} />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}>02.26.2026</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            corrupti expedita atque suscipit, commodi repellendus eveniet
            eligendi, ut eos natus enim, magni incidunt accusantium dicta sunt
            quaerat laborum! Tenetur, est?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}>02.26.2026</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            corrupti expedita atque suscipit, commodi repellendus eveniet
            eligendi, ut eos natus enim, magni incidunt accusantium dicta sunt
            quaerat laborum! Tenetur, est?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}>02.26.2026</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            corrupti expedita atque suscipit, commodi repellendus eveniet
            eligendi, ut eos natus enim, magni incidunt accusantium dicta sunt
            quaerat laborum! Tenetur, est?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}>02.26.2026</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            corrupti expedita atque suscipit, commodi repellendus eveniet
            eligendi, ut eos natus enim, magni incidunt accusantium dicta sunt
            quaerat laborum! Tenetur, est?
          </p>
        </div>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>Mariam Razmadze</span>
              <span className={styles.date}>02.26.2026</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            corrupti expedita atque suscipit, commodi repellendus eveniet
            eligendi, ut eos natus enim, magni incidunt accusantium dicta sunt
            quaerat laborum! Tenetur, est?
          </p>
        </div>
      </div>
    </div>
  );
}
