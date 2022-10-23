import { Component } from "solid-js";

const Home: Component = () => {
  return (
    <div class="flex flex-col">
      <section class="relative  shadow-highlight border p-5 py-10 h-40 border-white border-opacity-10 rounded-md overflow-hidden">
        <img
          class="absolute opacity-20 w-56 blur-sm rotate-45 -z-10"
          src="./static/alchemix_logo.png"
        />
        <img
          class="absolute opacity-20 w-56 blur-sm -rotate-45 right-0 top-0"
          src="./static/alchemix_logo.png"
        />
        <h1 class="text-sm lg:text-4xl shadow-white rotate-2 text-[#c0987c] text-opacity-50  drop-shadow-highlight  font-bold uppercase text-center">
          Ư̸̪̔̃P̴̭̎͗G̸̬̓̑Ŗ̴̛̔̉A̸̛͚͈̍̽D̴̫̘͓͋̀͛Ẻ̴̫́̉ ̸̨́̈́Y̶̠͋̾̒Ố̴͎̥͉U̵͎̞̓͛R̵̙̎ ̷̡̨͇͊̐̍Á̵͖̦́̌L̵̟̰̤̄C̶̙͎̟͛̚Ȟ̵̯͑Ḙ̷̞̮̌̄͝M̶̫͔̈I̶̞̻̋͛͑X̴̮̲̕͠ ̴̨̪͆ͅḚ̴̤͋X̸͇̼̋̀Ṕ̴̨̞͚͆̅E̷̝͍͋̇̑R̵̛͚̓͊I̷͙̐͊É̸̯͝Ǹ̴̢͔͐̏Ç̷̘͙͑́͛E̷̢͓͇͑̓̓
        </h1>
      </section>
    </div>
  );
};

export default Home;
