import express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";

import getPayloadClient from "./getPayloadClient";
import { nextApp, nextHandler } from "./next-utils";
import { appRouter } from "./trpc";
import { inferAsyncReturnType } from "@trpc/server";

const app = express()
const PORT = Number(process.env.PORT) || 3000

const createContext = ({req, res}: trpcExpress.CreateExpressContextOptions) => ({
    req, res
})

export type ExpressContextProps = inferAsyncReturnType<typeof createContext>

const start = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit:async (cms) => {
                cms.logger.info(`URL: ${process.env.NEXT_PUBLIC_SERVER_URL}/`)
                cms.logger.info(`ADMIN URL: ${cms.getAdminURL()}`)
            },
        }
    })

    app.use('/api/trpc', trpcExpress.createExpressMiddleware({
        router: appRouter,
        createContext
    }))

    app.use((req, res) => nextHandler(req, res))
    nextApp.prepare().then(() => {
        app.listen(PORT,async () => {
        })
    })
}

start()