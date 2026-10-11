import Comments from "@/app/components/comments/Comments";
import Menu from "@/app/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getFormatter } from "next-intl/server";
import { getPostBySlug, incrementViews } from "@/utils/posts";

export default async function SinglePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  await incrementViews(slug);
  const format = await getFormatter();

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
              <span className={styles.username}>{post.user.name}</span>
              <span className={styles.date}>
                {format.dateTime(post.createdAt, { dateStyle: "medium" })}
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
