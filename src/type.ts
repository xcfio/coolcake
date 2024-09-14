export interface AppendJSONOption {
    index?: string | number | boolean
    jsonSpace?: null | number
    jsonReplacer?: ((number | string)[] | null) | ((this: any, key: string, value: any) => any)
    jsonReviver?: (this: any, key: string, value: any) => any
}
