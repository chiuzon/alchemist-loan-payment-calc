import { children, Component, JSX } from "solid-js";

export interface LayoutProps {
  children: JSX.Element;
}

const Layout: Component<LayoutProps> = (props) => {
  const resolvedChildren = children(() => props.children);
  // @apply before:bg-black before:inset-1 before:rounded before:fixed before:-z-10 before:backdrop-blur-lg before:bg-opacity-70 before:border-2 before:border-white before:border-opacity-10;
  // bg-black inset-1 rounded fixed -z-10 backdrop-filter shadow-inner backdrop-blur-lg bg-opacity-70 border-2 border-white border-opacity-10
  //bg-black inset-1 rounded fixed backdrop-blur-lg bg-opacity-80 border border-gray-800
  return (
    <div>
      <div class="inset-1 rounded fixed backdrop-blur-lg bg-opacity-80 border border-gray-800 ">
        <div class="p-2">{resolvedChildren()}</div>
      </div>
    </div>
  );
};

export default Layout;
