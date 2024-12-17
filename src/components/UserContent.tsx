import {
	Box,
	Button,
	Card,
	FormControl,
	FormControlLabel,
	FormLabel,
	IconButton,
	Menu,
	MenuItem,
	Radio,
	RadioGroup,
	Stack,
	Typography,
	useColorScheme,
} from "@mui/material";

import react from "../assets/react.svg";
import {
	Business,
	DashboardCustomizeRounded,
	GitHub,
	Group,
	Settings,
} from "@mui/icons-material";
import { useState } from "react";

export default function UserContent() {
	const { mode, setMode } = useColorScheme();

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Card variant="elevation">
			<img
				style={{
					width: "148px",
					height: "148px",
					borderRadius: "8px",
					backgroundColor: "red",
				}}
				src={react}
				alt="git hub profile avatar"
			/>
			<Stack justifyContent="space-between">
				<Stack>
					<Box
						sx={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Typography variant="title">Cameron Williamson</Typography>
						<Box
							sx={{
								display: "flex",
								gap: "1rem",
							}}
						>
							<Button endIcon={<DashboardCustomizeRounded />}>GitHub</Button>
							<IconButton onClick={handleClick} size="small">
								<Settings />
							</IconButton>
							<Menu
								id="basic-menu"
								anchorEl={anchorEl}
								open={open}
								onClose={handleClose}
								MenuListProps={{
									"aria-labelledby": "basic-button",
								}}
							>
								<MenuItem>
									<FormControl>
										<FormLabel id="demo-theme-toggle">Theme</FormLabel>
										<RadioGroup
											aria-labelledby="demo-theme-toggle"
											name="theme-toggle"
											row
											value={mode}
											onChange={event =>
												setMode(
													event.target.value as "system" | "light" | "dark"
												)
											}
										>
											<FormControlLabel
												value="system"
												control={<Radio />}
												label="System"
											/>
											<FormControlLabel
												value="light"
												control={<Radio />}
												label="Light"
											/>
											<FormControlLabel
												value="dark"
												control={<Radio />}
												label="Dark"
											/>
										</RadioGroup>
									</FormControl>
								</MenuItem>
							</Menu>
						</Box>
					</Box>
					<Typography variant="description">
						Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
						viverra massa quam dignissim aenean malesuada suscipit. Nunc,
						volutpat pulvinar vel mass.
					</Typography>
				</Stack>
				<Stack flexDirection="row" gap="1.6rem">
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "0.2rem",
						}}
					>
						<GitHub
							sx={{
								color: "#5C738F",
							}}
						/>
						<Typography variant="description">cameronwll</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "0.2rem",
						}}
					>
						<Business
							sx={{
								color: "#5C738F",
							}}
						/>
						<Typography variant="description">cameronwll</Typography>
					</Box>
					<Box
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "0.2rem",
						}}
					>
						<Group
							sx={{
								color: "#5C738F",
							}}
						/>
						<Typography variant="description">cameronwll</Typography>
					</Box>
				</Stack>
			</Stack>
		</Card>
	);
}
