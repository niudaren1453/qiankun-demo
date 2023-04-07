import { createApp } from "vue";
import App from "./App.vue";
import { renderWithQiankun, qiankunWindow } from "vite-plugin-qiankun/dist/helper";

let app = null;

const render = (props = {}) => {
  const { container } = props;

  app = createApp(App);
  app.mount(container ? container.querySelector("#app") : "#app");
};

renderWithQiankun({
  mount(props:any) {
    console.log("mount");
    console.log(props)
    // 参数处理，
    render(props);
  },

  bootstrap() {
    console.log("bootstrap");
  },

  unmount(props:any) {
    console.log("unmount");
    app.unmount();
  },
  update() {},
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}
