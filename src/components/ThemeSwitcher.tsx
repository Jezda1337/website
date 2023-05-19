import { $, component$, useVisibleTask$ } from "@builder.io/qwik";

interface Props {
  state: {
    isDark: boolean;
    theme: string;
    isDisabled?: boolean;
  };
}

export default component$(({ state }: { state: Props["state"] }) => {
  // this hook need to to be changed
  useVisibleTask$(({ track }) => {
    track(() => state.isDark);

    state.isDark
      ? document.documentElement.classList.add(
          "dark",
          "bg-slate-800",
          "text-white"
        )
      : document.documentElement.classList.remove(
          "dark",
          "bg-slate-800",
          "text-white"
        );
    state.isDark
      ? (document.body.classList.add("darkDots"),
        document.body.classList.remove("lightDots"))
      : (document.body.classList.add("lightDots"),
        document.body.classList.remove("darkDots"));
  });

  const handleTheme = $(() => {
    state.isDark = !state.isDark;
    state.isDark ? (state.theme = "dark") : (state.theme = "light");
    localStorage.theme = JSON.stringify(state.theme);
  });

  return (
    <>
      <button
        id="themeSwitcher"
        aria-label="switch the theme"
        onClick$={handleTheme}
        class={`w-16 flex justify-between rounded relative after:absolute after:w-1/2 after:h-full after:dark:bg-slate-800 after:bg-white after:rounded h-8 items-center px-1 gap-3 shadow-[inset_0_0px_4px_rgba(0,0,0,0.6)]  ${
          state.isDark
            ? "bg-slate-600 after:left-1/2 after:transition-all"
            : "bg-orange-400 after:left-0 after:transition-all"
        }`}
      >
        <div class="text-white">
          <img src="/icons/kitty-dark.webp" alt="" width={80} height={80} />
        </div>

        <div>
          <img src="/icons/kitty-light.webp" alt="" width={80} height={80} />
        </div>
      </button>
    </>
  );
});
