import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Monserrat', 'sans-serif'],
				poppins: ["var(--font-poppins)"],
        cormorant: ['Cormorant', 'serif'],
      },
			backgroundImage: {
				'gradient-bg': 'linear-gradient(135deg, rgba(20, 30, 48, 0.8), rgba(36, 59, 85, 0.8)), url(/images/bg.avif)'
				},
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        move: {
          "0%": { transform: "translateX(-200px)" },
          "100%": { transform: "translateX(200px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        move: "move 5s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
 
  addBase({
    ":root": newVars,
  });
}
export default config;


// theme: {
// 	extend: {
// 		colors: {
// 			background: 'hsl(var(--background))',
// 			foreground: 'hsl(var(--foreground))',
// 			muted: {
// 				DEFAULT: 'hsl(var(--muted))',
// 				foreground: 'hsl(var(--muted-foreground))'
// 			},
// 			accent: {
// 				DEFAULT: 'hsl(var(--accent))',
// 				foreground: 'hsl(var(--accent-foreground))'
// 			},
// 			card: {
// 				DEFAULT: 'hsl(var(--card))',
// 				foreground: 'hsl(var(--card-foreground))'
// 			},
// 			popover: {
// 				DEFAULT: 'hsl(var(--popover))',
// 				foreground: 'hsl(var(--popover-foreground))'
// 			},
// 			primary: {
// 				DEFAULT: 'hsl(var(--primary))',
// 				foreground: 'hsl(var(--primary-foreground))'
// 			},
// 			secondary: {
// 				DEFAULT: 'hsl(var(--secondary))',
// 				foreground: 'hsl(var(--secondary-foreground))'
// 			},
// 			destructive: {
// 				DEFAULT: 'hsl(var(--destructive))',
// 				foreground: 'hsl(var(--destructive-foreground))'
// 			},
// 			border: 'hsl(var(--border))',
// 			input: 'hsl(var(--input))',
// 			ring: 'hsl(var(--ring))',
// 			chart: {
// 				'1': 'hsl(var(--chart-1))',
// 				'2': 'hsl(var(--chart-2))',
// 				'3': 'hsl(var(--chart-3))',
// 				'4': 'hsl(var(--chart-4))',
// 				'5': 'hsl(var(--chart-5))'
// 			}
// 		},
// 		backgroundImage: {
// 			'gradient-bg': 'linear-gradient(135deg, rgba(20, 30, 48, 0.8), rgba(36, 59, 85, 0.8)), url(/images/bg.avif)'
// 		},
// 		fontFamily: {
// 			poppins: ["var(--font-poppins)"]
// 		},
// 		borderRadius: {
// 			lg: 'var(--radius)',
// 			md: 'calc(var(--radius) - 2px)',
// 			sm: 'calc(var(--radius) - 4px)'
// 		}
// 	}
// },