import type { JSX } from "react"

export const tokenMap: Record<string, JSX.Element> = {
  geo: <img src="/img/icon-geo.png" className="inline w-4 h-4 mx-1" />,
  essence: <img src="/img/icon-essence.png" className="inline w-4 h-4 mx-1" />,
  pale: <img src="/img/icon-pale-ore.png" className="inline w-4 h-4 mx-1" />,
}

export const renderText = (text: string) => {
  const parts = text.split(/(\[[^\]]+\])/g)

  return parts.map((part, index) => {
    const match = part.match(/\[([^\]]+)\]/)

    if (match) {
      const key = match[1]
      return <span key={index}>{tokenMap[key] || part}</span>
    }

    return <span key={index}>{part}</span>
  })
}