import { component$, Slot } from "@builder.io/qwik";

interface Props {
  hash: string;
}

export default component$((props: Props) => (
  <button
    onClick$={() => {
      const el = document.querySelector(`#${props.hash}`);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <Slot />
  </button>
));
