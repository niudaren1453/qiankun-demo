import qiankun from "vite-plugin-qiankun";

const pluginMicro = () => {
  return {
    name: "vite-plugin-micro",
    config() {
      return {
        plugins: [qiankun("app-vite", { useDevMode: true })],
      };
    },
    configResolved(resolvedConfig) {},

    transform() {
      //   console.log("config :>> ", config);
    },

    // configResolved(resolvedConfig) {},
  };
};
export default pluginMicro;
