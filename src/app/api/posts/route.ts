import { NextResponse } from "next/server";
import { prisma } from "@/utils/connect";
import { Prisma } from "@/generated/prisma/client";
import { getAuthSession } from "@/utils/auth";

//CREATE A POST
export const POST = async (req: Request) => {
  const session = await getAuthSession();
  if (!session) {
    return new NextResponse(JSON.stringify({ message: "Not Authenticated!" }), {
      status: 401,
    });
  }

  try {
    const body = await req.json();
    const post = await prisma.post.create({
      data: { ...body, userEmail: session.user?.email },
    });

    return new NextResponse(JSON.stringify({ post }), { status: 200 });
  } catch (err) {
    if (
      err instanceof Prisma.PrismaClientKnownRequestError &&
      err.code === "P2002"
    ) {
      return new NextResponse(
        JSON.stringify({
          message:
            "A post with this title already exists. Please choose a different title.",
        }),
        { status: 409 }, // 409 Conflict is the correct status for this
      );
    }

    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 },
    );
  }
};
