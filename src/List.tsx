const LANGUAGES: string[] = [
  'Js',
  'C#',
  'Ruby',
  'PHP',
  'Go'
]

export const List = () => {

  return (
    <div>
      {
        LANGUAGES.map((lang, index) => {
          return (
            <div key={index}>{lang}</div>
          )
        })
      }
    </div>
  )
}