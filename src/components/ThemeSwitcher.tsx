import { component$, useClientEffect$ } from "@builder.io/qwik";

interface Props {
  state: {
    isDark: boolean;
    theme: string;
    isDisabled?: boolean;
  };
}

export default component$(({ state }: { state: Props["state"] }) => {
  useClientEffect$(({ track }) => {
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
  });

  return (
    <>
      <button
        aria-label="switch the theme"
        onClick$={() => {
          state.isDark = !state.isDark;
          state.isDark ? (state.theme = "dark") : (state.theme = "light");
          localStorage.theme = JSON.stringify(state.theme);
        }}
        class={`w-16 bg-slate-300 flex justify-between rounded relative after:absolute after:w-1/2 after:h-full after:dark:bg-slate-800 after:bg-white after:rounded h-8 items-center px-1 gap-3 ${
          state.isDark
            ? "after:left-1/2 bg-slate-600 after:transition-all"
            : "bg-orange-400 after:left-0 after:transition-all"
        }`}
      >
        <div class="text-white">
          <img src="/icons/kitty-dark.png" alt="" width={80} height={80} />
        </div>

        <div>
          <img src="/icons/kitty-light.png" alt="" width={80} height={80} />
        </div>
      </button>
    </>
  );
});
