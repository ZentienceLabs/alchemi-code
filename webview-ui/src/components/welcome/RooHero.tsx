import { useState } from "react"

const RooHero = () => {
	const [imagesBaseUri] = useState(() => {
		const w = window as any
		return w.IMAGES_BASE_URI || ""
	})

	return (
		<div className="pb-4 forced-color-adjust-none group">
			<div
				style={{
					backgroundColor: "var(--vscode-foreground)",
					WebkitMaskImage: `url('${imagesBaseUri}/alchemi-code-logo.svg')`,
					WebkitMaskRepeat: "no-repeat",
					WebkitMaskSize: "contain",
					maskImage: `url('${imagesBaseUri}/alchemi-code-logo.svg')`,
					maskRepeat: "no-repeat",
					maskSize: "contain",
				}}
				className="mx-auto group-hover:animate-bounce translate-y-0 transition-transform duration-500">
				<img src={imagesBaseUri + "/alchemi-code-logo.svg"} alt="Alchemi logo" className="h-8 opacity-0" />
			</div>
		</div>
	)
}

export default RooHero
