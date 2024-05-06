import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const AddressInput = () => {
	const [address, setAddress] = useState("");

	const handleChange = (value) => {
		setAddress(value);
	};

	const handleSelect = (value) => {
		setAddress(value);
		// Handle the selected address, e.g., save it to state or perform other actions
	};

	return (
		<PlacesAutocomplete
			value={address}
			onChange={handleChange}
			onSelect={handleSelect}
		>
			{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				<div>
					<input
						{...getInputProps({
							placeholder: "Type address...",
							className: "your-input-styles",
						})}
					/>
					<div>
						{loading && <div>Loading...</div>}
						{suggestions.map((suggestion) => (
							<div {...getSuggestionItemProps(suggestion)} key={suggestion.id}>
								{suggestion.description}
							</div>
						))}
					</div>
				</div>
			)}
		</PlacesAutocomplete>
	);
};

export default AddressInput;
