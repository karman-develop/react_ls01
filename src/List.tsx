import { Ilangs } from "./types"

export const List = ({ langsParent }: Ilangs) => {

  return (
    <div>
      {
        langsParent.map((lang, index) => {
          return (
            <div key={index}>{lang}</div>
          )
        })
      }
    </div>
  )
}