import { getServerSession } from "next-auth/next";
import Sidebar from "~/_components/Sidebar";
import { authOptions } from "~/server/auth";
import { db } from "~/server/db";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);

  const allStufflists = await db.stufflist.findMany({
    where: {
      authorId: session?.user.id,
    },
    include: {
      _count: {
        select: {
          tasks: {
            where: {
              status: false,
            },
          },
        },
      },
    },
  });

  return (
    <div className="flex min-h-[40rem] flex-col md:flex-row">
      <Sidebar allStufflists={allStufflists} />
      <div className="flex w-full flex-col justify-between font-normal">
        {children}
      </div>
    </div>
  );
};

export default Layout;
