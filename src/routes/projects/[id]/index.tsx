import { component$ } from "@builder.io/qwik"

interface Props {
  id: number
}

export default component$((props: Props) => {
  return (
    <>
      <h1>hello from project </h1>
      <p>{props.id}</p>
    </>
  )
})
