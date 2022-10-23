import { children, Component, JSX } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";
import Dropdown from "./Dropdown";
import { currentNetwork, NetworksMetadata, SupportedNetworks } from "@/stores";
export interface LayoutProps {
  children: JSX.Element;
}

const Layout: Component<LayoutProps> = (props) => {
  const resolvedChildren = children(() => props.children);

  const [network] = currentNetwork;

  return (
    <div class="relative flex flex-col gap-2 h-screen">
      <div class="bg-bgImg bg-cover opacity-20 absolute inset-0 blur-lg -z-10"></div>
      <div class="shadow-highlight  flex flex-col gap-2 text-yellow-500 bg-yellow-900 bg-opacity-10 py-2 rounded p-1 ">
        ⚠️ This website is in alpha.
      </div>
      <div class="rounded  shadow-highlight-1 h-screen  border-slate-200 border-opacity-10 inset-1 bg-black bg-opacity-75">
        <div class="p-3 w-full flex justify-between items-center border-b border-slate-200 border-opacity-10">
          <div class="uppercase font-semibold text-white">Alchemix TOOLS</div>

          <nav class="flex gap-5">
            <A
              class="font-semibold text-white text-opacity-80 text-md"
              href="/"
            >
              Overview
            </A>

            <A class="font-semibold text-white text-opacity-80" href="/lrc">
              LRC (Loan Repayment Calculator)
            </A>
          </nav>
          <div>
            <Dropdown items={SupportedNetworks}></Dropdown>
          </div>
        </div>
        <div class="p-2 overflow-y-auto">{resolvedChildren()}</div>
      </div>
    </div>
  );
};

export default Layout;
