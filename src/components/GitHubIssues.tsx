import { GitHub } from "@mui/icons-material";
import { Box, Card, Grid2, Stack, Typography } from "@mui/material";

export default function GitHubIssues() {
	return (
		<Grid2
			sx={{
				display: "grid",
				gridTemplateColumns: "repeat(2, 2fr)",
				gap: "2rem",
			}}
		>
			{Array(27)
				.fill("")
				.map((_, index) => (
					<Card variant="outlined" key={index}>
						<Stack flexDirection="row">
							<Stack width="100%" justifyContent="space-between">
								<Box
									sx={{
										width: "100%",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center",
									}}
								>
									<Typography
										variant="subtitle1"
										sx={{
											width: "calc(416px - 8rem)",
											whiteSpace: "nowrap",
											overflow: "hidden",
											textOverflow: "ellipsis",
										}}
									>
										JavaScript data types and data structures JavaScript data
										JavaScript data types and data structures types and data
										JavaScript data types and data structures structures
									</Typography>
									<GitHub />
								</Box>
								<Typography variant="span">1 dia</Typography>
							</Stack>
						</Stack>
						<Typography
							variant="description"
							sx={{
								display: "-webkit-box",
								overflow: "hidden",
								WebkitBoxOrient: "vertical",
								WebkitLineClamp: 4,
							}}
						>
							Programming languages all have built-in data structures, but these
							often differ from one language to another. This article attempts
							to list the built-in data structures available in JavaScript and
							what properties they have. These can be used to build other data
							structures. Wherever possible, comparisons with other languages
							are drawn.
						</Typography>
					</Card>
				))}
		</Grid2>
	);
}
