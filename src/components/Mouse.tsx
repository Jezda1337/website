import { component$, Slot, $ } from "@builder.io/qwik";

interface Props {
  hash: string;
  disabled?: boolean;
  classIcon?: string;
}

export default component$((props: Props) => {
  const handleClick = $(function () {
    // until the section scrolling bug is fixed, you have to use this workaround (#2532 qwik)
    setTimeout(() => {
      const el = document.getElementById(`${props.hash}`);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth" });
    }, 200);
  });

  return (
    <button
      class={`${props.disabled ? "text-slate-400" : ""} ${
        !props.disabled ? props.classIcon : ""
      } ${props.hash !== "contact" ? "px-3 py-[10px]" : ""}`}
      disabled={props.disabled}
      onClick$={handleClick}
    >
      <Slot />
    </button>
  );
});
