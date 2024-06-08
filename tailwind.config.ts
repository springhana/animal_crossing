import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ["JejuHallasan"],
        Roboto: ["Roboto-Variable"],
      },
      screens: {
        mobile: { max: "424px" },
        mobile_1: { min: "425px", max: "874px" },
        tablet: { min: "875px", max: "1234px" },
        tablet_1: { min: "1235px", max: "1579px" },
        desktop: { min: "1580px" },
      },
      boxShadow: {
        card_shadow: "-2px 2px 10px 0px rgba(68, 68, 68, 0.4)",
        modal_shadow: "0 25px 40px -20px #afb8c9;",
      },
      fontSize: {
        bs_13: "0.8125rem",
        bs_14: "0.875rem",
        bs_15: "0.9375rem",
        bs_16: "1rem",
        bs_17: "1.0625rem",
        bs_18: "1.125rem",
        bs_20: "1.25rem",
        bs_22: "1.375rem",
        bs_24: "1.5rem",
        bs_28: "1.75rem",
        bs_34: "2.125rem",
        bs_43: "2.6875rem",
        bs_48: "3rem",
        bs_50: "3.125rem",
        bs_60: "3.75rem",
      },
      maxWidth: {
        max_w: "1400px",
      },
      minWidth: {
        min_w: "320px",
      },
      gridTemplateColumns: {
        blog_columns: "15% 65% 20%",
        tablet_blog_columns: "25% 75% 0%",
        moblie_blog_columns: "0% 100% 0%",
      },
      gridTemplateRows: {
        blog_rows: "100%",
      },
    },
  },
  plugins: [],
};
export default config;
