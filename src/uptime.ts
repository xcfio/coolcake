const start = performance.now()

export function uptime(long?: boolean): string {
    const duration = Math.round(performance.now() - start)
    const milliseconds = Math.round((duration % 1000) / 100)
    const seconds = Math.round((duration / 1000) % 60)
    const minutes = Math.round((duration / (1000 * 60)) % 60)
    const hours = Math.round((duration / (1000 * 60 * 60)) % 24)
    const days = Math.round(duration / (1000 * 60 * 60 * 24))

    let result = ""
    if (long) {
        switch (true) {
            case days > 0:
                result += `${days} day${days > 1 ? "s" : ""} `

            case hours > 0:
                result += `${hours} hour${hours > 1 ? "s" : ""} `

            case minutes > 0:
                result += `${minutes} minute${minutes > 1 ? "s" : ""} `

            case seconds > 0:
                result += `${seconds} second${seconds > 1 ? "s" : ""} `

            case milliseconds > 0:
                result += `${milliseconds} millisecond${milliseconds > 1 ? "s" : ""}`
        }
    } else {
        switch (true) {
            case days > 0:
                result += `${days}d `

            case hours > 0:
                result += `${hours}h `

            case minutes > 0:
                result += `${minutes}m `

            case seconds > 0:
                result += `${seconds}s `

            case milliseconds > 0:
                result += `${milliseconds}ms`
        }
    }
    return result
}
