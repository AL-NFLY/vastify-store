import { initTRPC } from "@trpc/server";

const initiateTrpc = initTRPC.context().create()

export const router = initiateTrpc.router
export const publicProcedure = initiateTrpc.procedure