export const List = (props: { title: string }) => {
  const title = props.title
  return (
    <div>
      {title}
      リストです。
    </div>
  )
}