import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { getServerSession as getNextAuthServerSession } from "next-auth";
import "server-only";
import { authOptions } from "~/server/auth";

export async function getSSRSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  const session = await getNextAuthServerSession(...args, authOptions);

  return {
    isLoggedIn: !!session,
    user: session?.user,
  };
}
