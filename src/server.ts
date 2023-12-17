import express from "express";
import getPayloadClient from "./getPayloadClient";
import { nextApp, nextHandler } from "./next-utils";

const app = express()
const PORT = Number(process.env.PORT) || 3000

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

    app.use((request, response) => nextHandler(request, response))
    nextApp.prepare().then(() => {
        // payload.logger.info('Next.js started')
        
        app.listen(PORT,async () => {
            // payload.logger.info(`Next.js App URL: ${process.env.NEXT_PUBLIC_SERVER_URL}`)
        })
    })
}

start()