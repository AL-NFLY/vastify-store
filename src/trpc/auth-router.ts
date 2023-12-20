import { AuthCredentialsValidator } from "../lib/validators/AuthCredentialsValidator";
import getPayloadClient from "../getPayloadClient";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const authRouter = router({
    createPayloadUser: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({input}) => {
            const{ email, password } = input
            const payload = await getPayloadClient()

            // Check if user already exists
            const { docs: users } = await payload.find({
                collection: 'users',
                where: {
                    email: {
                        equals: email,
                    },
                },
            })

            if (users.length !== 0) 
                throw new TRPCError({ code: 'CONFLICT' })

            await payload.create({
                collection: 'users',
                data: {
                    email,
                    password,
                    role: 'user',
                },
            })

            return { 
                success: true, 
                sentToEmail: email,
            }
    }),

    verifyEmail: publicProcedure
        .input(z.object({
            token: z.string()
        }))
        .mutation(async ({ input }) => {
            const { token } = input
            
            const payload = await getPayloadClient()

            const isVerified = await payload.verifyEmail({
                collection: 'users',
                token,
            })
        })
})