import Comments from "@/app/components/comments/Comments";
import Menu from "@/app/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const getData = async (slug: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};

export default async function SinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = await getData(slug);
  const post = data?.post;
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.user}>
            {post.user?.image && (
              <div className={styles.userImageContainer}>
                <Image
                  src={post.user?.image}
                  alt=""
                  fill
                  className={styles.avatar}
                />
              </div>
            )}

            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user.name}</span>
              <span className={styles.date}>
                {post.createdAt?.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        {post.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post.desc }}
          ></div>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
}
