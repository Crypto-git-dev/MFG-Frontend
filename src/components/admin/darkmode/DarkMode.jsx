import React from "react";
import "./DarkMode.css"; // Create a new CSS file for styling

function DarkMode() {
	const setDarkMode = () => {
		document.querySelector("body").setAttribute("data-theme", "dark");
		localStorage.setItem("selectedTheme", "dark");
	};

	const setLightMode = () => {
		document.querySelector("body").setAttribute("data-theme", "light");
		localStorage.setItem("selectedTheme", "light");
	};

	const selectedTheme = localStorage.getItem("selectedTheme");
	if (selectedTheme === "dark") {
		setDarkMode();
	}

	const toggleTheme = (e) => {
		if (e.target.checked) {
			setDarkMode();
		} else {
			setLightMode();
		}
	};

	return (
		<div>
			<label className="relative inline-flex items-center cursor-pointer">
				<input
					type="checkbox"
					className="sr-only peer"
					onChange={toggleTheme}
					defaultChecked={selectedTheme === "dark"}
				/>
				<div className="toggle-switch">
					<span className="text-gray-500 peer-checked:transform peer-checked:translate-x-full peer-checked:text-white absolute peer-checked:left-1/2 peer-checked:-translate-x-1/2 peer:transition-transform peer:transition-transform"></span>
					<span className="text-gray-500 peer-checked:translate-x-0 peer:transition-transform peer:transition-transform"></span>
				</div>
				
			</label>
		</div>
	);
}

export default DarkMode;
