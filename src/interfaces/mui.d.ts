import "@mui/material";
import "csstype";

declare module "@mui/material/styles" {
	interface TypographyVariants {
		title: React.CSSProperties;
		description: React.CSSProperties;
		span: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		title?: React.CSSProperties;
		description?: React.CSSProperties;
		span?: React.CSSProperties;
	}

	interface Palette {
		blue: string;
		title: string;
		subTitle: string;
		span: string;
		label: string;
		border: string;
		post: string;
		profile: string;
		input: string;
	}
	interface PaletteOptions {
		blue: string;
		title: string;
		subTitle: string;
		span: string;
		label: string;
		border: string;
		post: string;
		profile: string;
		input: string;
	}
}

declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		title: true;
		description: true;
		span: true;
	}
}
