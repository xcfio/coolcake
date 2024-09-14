import { existsSync, PathLike, readFileSync, rmSync, writeFileSync } from "node:fs"
import { AppendJSONOption } from "./type"

export function appendJSON(path: PathLike, data: object, options?: AppendJSONOption) {
    if (!path || !data) return false
    const jsonSpace = options?.jsonSpace === undefined ? 4 : options?.jsonSpace === null ? undefined : options.jsonSpace
    const index = options?.index && typeof options.index !== "boolean" ? options.index : new Date().toISOString()
    const { jsonReplacer: replacer, jsonReviver: reviver } = options ?? {}

    if (existsSync(path)) {
        const buffer = readFileSync(path)
        if (!buffer) return false

        const bufferData = buffer.toString()
        if (!bufferData) {
            rmSync(path, { recursive: true, force: true })
            return appendJSON(path, data, options)
        }

        const rawdata = JSON.parse(bufferData, reviver)
        if (rawdata instanceof Array) {
            rawdata.push(data)
        } else {
            rawdata[index] = data
        }

        const outJSON = JSON.stringify(rawdata, replacer as any, jsonSpace)
        writeFileSync(path, outJSON)
        return true
    } else {
        const outJSON = JSON.stringify(options?.index ? { [index]: data } : [data], replacer as any, jsonSpace)
        writeFileSync(path, outJSON)
        return true
    }
}
