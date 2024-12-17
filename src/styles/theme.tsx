import { createTheme } from "@mui/material";

const theme = createTheme({
	palette: {
		blue: "#3294F8",
		title: "#E7EDF4",
		subTitle: "#C4D4E3",
		text: { primary: "#AFC2D4" },
		span: "#7B96B2",
		label: "#3A536B",
		border: "#1C2F41",
		post: "#112131",
		profile: "#0B1B2B",
		background: { default: "#071422" },
		input: "#040F1A",
	},
	colorSchemes: {
		dark: {
			palette: {
				blue: "#3294F8",
				title: "#2c3238",
				subTitle: "#C4D4E3",
				span: "#7B96B2",
				label: "#3A536B",
				border: "#1C2F41",
				post: "#112131",
				profile: "#0B1B2B",
				input: "#040F1A",
				text: { primary: "#AFC2D4" },
				background: { default: "#071422" },
			},
		},
		light: {
			palette: {
				blue: "#5BAAFD",
				title: "#F4F9FC",
				subTitle: "#DFE9F2",
				text: { primary: "#D0DEE8" },
				span: "#A3B6CF",
				label: "#5C738F",
				border: "#3B4E61",
				post: "#2B3C4D",
				profile: "#1E3042",
				background: { default: "#1B2A37" },
				input: "#14222F",
			},
		},
	},
	typography: {
		title: {
			color: "title",
			fontWeight: "bold",
			fontSize: "24px",
		},
		subtitle1: {
			color: "title",
			fontWeight: "bold",
			fontSize: "20px",
		},
		subtitle2: {
			color: "subTitle",
			fontWeight: "bold",
			fontSize: "18px",
		},
		description: {
			color: "#7B96B2",
			fontWeight: 400,
			fontSize: "16px",
		},
		span: {
			color: "#7B96B2",
			fontWeight: 400,
			fontSize: "14px",
		},
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					variants: [
						{
							props: { variant: "outlined" },
							style: {
								maxWidth: "416px",

								minHeight: "fit-content",
								maxHeight: "260px",

								backgroundColor: "#112131",

								padding: "2rem",
								gap: "1rem",
								display: "flex",
								flexDirection: "column",

								border: "2px solid #112131",

								borderRadius: "8px",

								cursor: "pointer",

								":hover": {
									border: `2px solid #3A536B `,
								},
							},
						},
						{
							props: { variant: "elevation" },
							style: {
								position: "relative",

								display: "flex",

								flexDirection: "row",

								padding: "2rem",
								bottom: "4rem",

								gap: "2rem",

								backgroundColor: "#0B1B2B",
							},
						},
					],
				},
			},
		},
		MuiTypography: {
			defaultProps: {
				lineHeight: "160%",

				fontFamily: "Nunito",
			},
		},
		MuiIconButton: {
			defaultProps: {
				style: {
					padding: "8px",
				},
			},
		},
	},
});

export default theme;
