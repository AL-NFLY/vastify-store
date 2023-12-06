import dotenv from "dotenv";
import path from "path"

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

const getPayloadClient = async () => {
  return (
    <div>getPayloadClient</div>
  )
}

export default getPayloadClient