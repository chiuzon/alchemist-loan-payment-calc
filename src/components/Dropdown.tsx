import { currentNetwork, ENetworks, NetworksMetadata } from "@/stores";
import {
  children,
  Component,
  createEffect,
  createMemo,
  createSignal,
  For,
  JSX,
  Show,
} from "solid-js";

export interface LayoutProps {
  width?: string;
  defaultIndex?: number;
  items: string[];
}

const Dropdown: Component<LayoutProps> = (props) => {
  const [toggle, setToggle] = createSignal(false);

  const [readCurrentNetwork, setCurrentNetwork] = currentNetwork;

  const width = createMemo(() => props.width ?? "w-30");

  return (
    <div class="relative px-2 w-full">
      <button
        onClick={() => setToggle((prev) => !prev)}
        class={`shadow-highlight-1 px-2 py-1 bg-slate-900 rounded ${width()}`}
      >
        {NetworksMetadata[readCurrentNetwork()].title}
      </button>

      <Show when={toggle()}>
        <div
          class={`absolute shadow-highlight-1 px-2 mt-1 bg-slate-900 bg-opacity-80 rounded ${width()}`}
        >
          <For each={props.items}>
            {(key: string, index) => (
              <button
                class="w-full shadow-highlight px-1 text-center"
                onClick={() => {
                  setCurrentNetwork(key as ENetworks);

                  setToggle(false);
                }}
              >
                {NetworksMetadata[key as ENetworks].title}
              </button>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};

export default Dropdown;
