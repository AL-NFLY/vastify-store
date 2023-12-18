import { AuthCredentialsValidator } from "@/lib/validators/AuthCredentialsValidator";
import { publicProcedure, router } from "./trpc";
import getPayloadClient from "@/getPayloadClient";

export const authRouter = router({
    createPayloadUser: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({input}) => {
            const{ email, password } = input
            const payload = await getPayloadClient()

    })
})