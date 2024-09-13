import { existsSync, PathLike, readFileSync, writeFileSync } from "node:fs"

export function appendJSON(path: PathLike, data: object, index?: string | number) {
    if (!path) return false
    if (!data) return false

    if (existsSync(path)) {
        const buffer = readFileSync(path)

        if (!buffer) return false
        const rawdata = JSON.parse(buffer.toString())

        if (rawdata instanceof Array) {
            rawdata.push(data)
        } else {
            index ? (rawdata[index] = data) : (rawdata[new Date().toString()] = data)
        }

        const outJSON = JSON.stringify(rawdata, null, 4)
        writeFileSync(path, outJSON)
        return true
    } else {
        const outJSON = JSON.stringify(index ? { [index]: data } : [data], null, 4)
        writeFileSync(path, outJSON)
        return true
    }
}

function edit_compiler(path: PathLike, data: object, index?: string | number) {}
