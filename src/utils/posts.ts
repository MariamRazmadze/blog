import { prisma } from "./connect";

export const POSTS_PER_PAGE = 2;

export const getPosts = async ({
  page,
  cat,
}: {
  page: number;
  cat?: string;
}) => {
  const where = cat ? { catSlug: cat } : {};

  const [posts, count] = await prisma.$transaction([
    prisma.post.findMany({
      where,
      orderBy: { createdAt: "desc" },
      take: POSTS_PER_PAGE,
      skip: POSTS_PER_PAGE * (page - 1),
    }),
    prisma.post.count({ where }),
  ]);

  return { posts, count };
};

export const getPostBySlug = (slug: string) =>
  prisma.post.findUnique({
    where: { slug },
    include: { user: true },
  });

export const incrementViews = (slug: string) =>
  prisma.post.update({
    where: { slug },
    data: { views: { increment: 1 } },
  });
