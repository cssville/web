// paths.ts

export const paths = {
  home: "/",
  notFound: "/404",
  docs: "/docs",
  components: {
    chip: "components/chip",
    button: "components/button",
    typography: "components/typography",
  },
  intro: {
    gettingStarted: "intro/getting-started",
  },
  cssClasses: (name: string) => `css-classes/${name}`,
};
