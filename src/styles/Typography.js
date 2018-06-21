import WebFont from "webfontloader";

const Typography = () => {
  WebFont.load({
    google: {
      families: ["Open Sans:400,400i,700", "sans-serif"]
    },
    google: {
      families: ["Trade Winds"],
      text: "aeglnoyz"
    }
  });
};

export default Typography;
