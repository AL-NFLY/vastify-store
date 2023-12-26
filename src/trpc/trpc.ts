import { ExpressContextProps } from "@/server";
import { initTRPC } from "@trpc/server";

const initiateTrpc = initTRPC.context<ExpressContextProps>().create()

export const router = initiateTrpc.router
export const publicProcedure = initiateTrpc.procedure