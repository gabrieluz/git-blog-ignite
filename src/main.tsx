import "./styles/global.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/theme.tsx";

import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider
			theme={theme}
			noSsr
			disableTransitionOnChange
			defaultMode="system"
		>
			<CssBaseline />
			<App />
		</ThemeProvider>
	</StrictMode>
);
