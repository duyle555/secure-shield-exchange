
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Be Vietnam Pro', 'Inter', 'system-ui', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#9372FF',
					foreground: '#FFFFFF',
					50: '#F3F0FF',
					100: '#E9E2FF',
					500: '#9372FF',
					600: '#7C3AED',
					700: '#6D28D9',
				},
				accent: {
					DEFAULT: '#00F0FF',
					foreground: '#FFFFFF',
					50: '#EFF6FF',
					100: '#DBEAFE',
					500: '#00F0FF',
					600: '#2563EB',
					700: '#1D4ED8',
				},
				dark: {
					background: '#0A0F1F',
					text: '#F0F2F5',
					subtle: '#A1A7B8',
				},
				light: {
					background: '#FFFFFF',
					text: '#1D2433',
					subtle: '#697081',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			boxShadow: {
				'glow-primary': '0 0 20px 5px rgba(147, 114, 255, 0.2)',
				'glow-accent': '0 0 20px 5px rgba(0, 240, 255, 0.2)',
				'glow-primary-strong': '0 0 30px 10px rgba(147, 114, 255, 0.3)',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'gradient-shift': {
					'0%, 100%': {
						'background-position': '0% 50%'
					},
					'50%': {
						'background-position': '100% 50%'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-20px)'
					}
				},
				'marquee': {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-100%)' }
				},
				'grid-flow': {
					'0%, 100%': { opacity: '0.2' },
					'50%': { opacity: '0.1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'gradient-shift': 'gradient-shift 15s ease infinite',
				'float': 'float 6s ease-in-out infinite',
				'marquee': 'marquee 30s linear infinite',
				'grid-flow': 'grid-flow 4s ease-in-out infinite',
			},
			backgroundImage: {
				'gradient-primary': 'linear-gradient(135deg, #9372FF 0%, #00F0FF 100%)',
				'gradient-dark': 'linear-gradient(135deg, #0A0F1F 0%, #1F2937 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
