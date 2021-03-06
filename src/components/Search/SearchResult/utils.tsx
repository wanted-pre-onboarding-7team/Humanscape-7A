export const highLightText = (text: string, query: string) => {
  if (query !== '' && text.includes(query)) {
    const parts = text.split(new RegExp(`(${query})`, `gi`))

    return (
      <>
        {parts.map((part, index) => {
          const key = `mark-${index}`
          return part.toLowerCase() === query.toLowerCase() ? (
            <mark key={key} style={{ fontWeight: 900 }}>
              {part}
            </mark>
          ) : (
            part
          )
        })}
      </>
    )
  }
  return text
}
