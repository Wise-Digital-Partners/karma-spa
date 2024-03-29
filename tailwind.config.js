module.exports = {
   mode: "jit",
   content: ["./src/**/*.js"],
   theme: {
      container: {
         center: true,
         padding: {
            DEFAULT: "1rem",
         },
         screens: {
            DEFAULT: "77rem",
         },
      },
      fontFamily: {
         heading: ['"Cormorant Garamond", serif'],
         // 'display': [''],
         body: ['"Mulish", sans-serif'],
      },
      extend: {
         colors: {
            gray: {
               900: "#141412",
               800: "#1A1A1A",
               700: "#232323",
               600: "#666666",
               500: "#8A8A8A",
               400: "#8C8C8C",
               300: "#918B83",
               200: "#979797",
               100: "#F5F0E9",
            },
            // primary_900: "",
            // primary_800: "",
            // primary_700: "",
            // primary_600: "",
            // primary_500: "",
            primary_400: "#F3AD51",
            // primary_300: "",
            // primary_200: "",
            // primary_100: "",
            // secondary_900: "",
            // secondary_800: "",
            // secondary_700: "",
            // secondary_600: "",
            // secondary_500: "",
            secondary_400: "#2B806E",
            // secondary_300: "",
            // secondary_200: "",
            secondary_100: "#F5F0E9",
         },
         fontSize: {
            "3xs": ".375rem",
            "2xs": ".625rem",
            md: ".9375rem",
            xl: "1.25rem",
            "2xl": "1.375rem",
            "3xl": "1.75rem",
            "4xl": "2.25rem",
            "5xl": "2.75rem",
            "6xl": "3.125rem",
            "7xl": "5.5rem",
            mobilexl: "1.125rem",
            mobile2xl: "1.25rem",
            mobile3xl: "1.75rem",
            mobile4xl: "2rem",
            mobile5xl: "2.375rem",
            mobile6xl: "2.75rem",
            mobile7xl: "3.75rem",
         },
         height: {
            "2px": "2px",
            "50vw": "50vw",
            "75vw": "75vw",
            "100vw": "100vw",
            "150vw": "150vw",
         },
         width: {
            "50vw": "50vw",
            "75vw": "75vw",
            "100vw": "100vw",
            "150vw": "150vw",
         },
         maxWidth: {
            "7xl": "78rem",
         },
         borderRadius: {
            sm: "0.1875rem",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.25rem",
            "4xl": "2rem",
         },
         spacing: {
            7: "1.75rem",
            14: "3.5rem",
            18: "4.5rem",
            28: "7rem",
            36: "9rem",
            44: "11rem",
            60: "15rem",
         },
      },
   },
   plugins: [require("@tailwindcss/custom-forms")],
};
