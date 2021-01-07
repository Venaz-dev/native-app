import { proxy } from "valtio";

const store = proxy({
  background: "red",
  menuAction: "",
});

export default store;
