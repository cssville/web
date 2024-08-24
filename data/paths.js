"use strict";
// paths.ts
exports.__esModule = true;
exports.paths = void 0;
exports.paths = {
    home: "/",
    notFound: "/404",
    docs: "/docs",
    components: {
        chip: "components/chip",
        button: "components/button",
        typography: "components/typography"
    },
    intro: {
        gettingStarted: "intro/getting-started"
    },
    cssClasses: function (name) { return "css-classes/".concat(name); }
};
