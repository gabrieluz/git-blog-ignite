import { Stack, TextField, Typography } from "@mui/material";

export default function Search() {
	return (
		<Stack
			sx={{
				width: "100%",
				gap: "0.8rem",
			}}
		>
			<Stack
				sx={{
					width: "100%",

					flexDirection: "row",
					justifyContent: "space-between",
				}}
			>
				<Typography variant="subtitle2">Publicações</Typography>
				<Typography variant="span">6 publicações</Typography>
			</Stack>
			<TextField placeholder="Buscar conteúdo" />
		</Stack>
	);
}
