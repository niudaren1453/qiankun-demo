import {  start } from "qiankun";

export const vitePluginMicro = (config) => {
  return {
    install() {
      start();
    },
  };
};
