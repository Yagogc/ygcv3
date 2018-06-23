import WebFont from "webfontloader";

const Typography = () => {
  WebFont.load({
    classes: false,
    events: false,
    google: {
      families: ["Open Sans:400,400i,700", "sans-serif"]
    }
  });
  WebFont.load({
    classes: false,
    events: false,
    google: {
      families: ["Marck Script"],
      text: "aeglnoyzGY"
    }
  });
};

export default Typography;
