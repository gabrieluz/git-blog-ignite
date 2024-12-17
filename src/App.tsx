import { Stack } from "@mui/material";

import UserContent from "./components/UserContent";
import Search from "./components/Search";
import GitHubIssues from "./components/GitHubIssues";
import HeaderCover from "./components/HeaderCover";

export default function App() {
	return (
		<Stack
			sx={{
				width: "100%",
				alignItems: "center",
				backgroundColor: "#040F1A",
			}}
		>
			<HeaderCover />
			<Stack
				sx={{
					width: "70%",
					alignItems: "center",
					backgroundColor: "#071422",
				}}
			>
				<Stack
					sx={{
						width: "calc(832px + 2rem)",
					}}
				>
					<UserContent />
					<Stack gap="2rem">
						<Search />
						<GitHubIssues />
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}
