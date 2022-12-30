import { component$, Slot } from "@builder.io/qwik";

interface Props {
  hash: string;
  disabled?: boolean;
  classIcon?: string;
}

export default component$((props: Props) => (
  <button
    class={`${props.disabled ? "text-slate-400" : ""} ${
      !props.disabled ? props.classIcon : ""
    }`}
    disabled={props.disabled}
    onClick$={() => {
      const el = document.querySelector(`#${props.hash}`);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    }}
  >
    <Slot />
  </button>
));
