import dotenv from "dotenv";
import path from "path"
import payload from "payload";
import { InitOptions } from "payload/config";

dotenv.config({
  path: path.resolve(__dirname, '../.env')
})

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  }
}

interface getPayloadClientProps {
  initOptions?: Partial<InitOptions>
}

const getPayloadClient = async ({
  initOptions
}: getPayloadClientProps = {}) => {
  if(!process.env.PAYLOAD_SECRET) {
    throw new Error('PAYLOAD_SECRET is missing!')
  }

  if(cached.client) {
    return cached.client
  }

  if(!cached.promise) {
    cached.promise = payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    })
  }
}

export default getPayloadClient

