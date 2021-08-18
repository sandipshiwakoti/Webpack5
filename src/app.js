import { getData } from "./data";
import "./style.scss";

const data = getData();

data.forEach((item) => {
  console.log(item);
});
