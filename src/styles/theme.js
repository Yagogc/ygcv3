const theme = {
  ws: {
    padding: "10px"
  },
  mq: {
    mobile: "max-width: 768px",
    desktop: "min-width: 768px"
  },
  color: {
    ui1: "#0e1122",
    ui2: "#151931",
    ui3: "#1e233b",
    ui4: "#252c48",
    ui5: "#ffffff",
    text1: "#ffffff",
    text2: "#f0f0f0",
    text3: "#5a6872",
    brand1: "#5f4b8b",
    brand2: "#663399",
    brand3: "#AA00DE",
    brand4: "#FF5252"
  },
  gradient: ({ deg = 135 } = {}) => `linear-gradient(
    ${deg}deg,
    #AA00DE 0%,
    #FF5252 100%
  );`,
  container: {
    width: "1100px",
    padding: "20px"
  },
  brands: {
    facebook: "#3b5998",
    google: "#E02900",
    github: "#644D89",
    linkedin: "#0077B5"
  }
};

export default theme;
