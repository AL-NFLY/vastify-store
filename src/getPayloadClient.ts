import dotenv from "dotenv";
import path from "path"
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
}

export default getPayloadClient

