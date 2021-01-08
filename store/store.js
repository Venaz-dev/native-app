import { proxy } from "valtio";

const store = proxy({
  menuAction: "",
});

export default store;
