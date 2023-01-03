import { Slot, component$ } from "@builder.io/qwik"
import Footer from "~/components/Footer"
import Header from "../components/header/header"

export default component$(() => {
  return (
    <>
      {/* <InProgressBar /> */}
      <Header />
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <Footer />
    </>
  )
})
