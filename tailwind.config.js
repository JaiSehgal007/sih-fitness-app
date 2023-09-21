/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray1: {
          "100": "rgba(0, 0, 0, 0.2)",
          "200": "rgba(255, 255, 255, 0.05)",
          "300": "rgba(255, 255, 255, 0.8)",
        },
        snow: {
          "100": "#fffcfc",
          "200": "rgba(255, 251, 251, 0.1)",
          "300": "rgba(255, 246, 246, 0.32)",
        },
        white: "#fff",
        gainsboro: "#d9d9d9",
        lavenderblush: "#f6eaea",
        "gray-400": "#9ca3af",
        "gray-700": "#374151",
        "gray-600": "#4b5563",
        "primary-500": "#3f83f8",
        mediumspringgreen: "#03ff95",
      },
      spacing: {},
      fontFamily: {
        "leading-tight-text-sm-font-normal": "Inter",
        roboto: "Roboto",
      },
      borderRadius: {
        "81xl": "100px",
        "3xs": "10px",
        "381xl": "400px",
        "245xl-5": "264.5px",
        "8xs": "5px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      "5xl": "24px",
      "12xl-7": "31.7px",
      "31xl": "50px",
      "lg-5": "18.5px",
      lg: "18px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
