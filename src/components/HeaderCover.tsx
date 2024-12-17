import cover from "../assets/cover.svg";

export default function HeaderCover() {
	return (
		<header
			style={{
				width: "70%",
				height: "fit-content",
			}}
		>
			<img width="100%" src={cover} alt="git hub blog cover" />
		</header>
	);
}
