/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        media440: "440px",
        media560: "560px",
        media1200: "1200px",
      },
      backgroundImage: {
        "testimonial-section":
          "url('/images/miguel-a-amutio-QDv-uBc-poY-unsplash.png')",
      },
    },
  },
  plugins: [],
};
