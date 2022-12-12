import React from 'react';

const AddPlace = ({placeData, onTitleChange, onDescriptionChange, onPlaceSubmit}) => {
	return(
		<React.Fragment>
			<div>
                <h3>Add Place</h3>
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <label htmlFor="place-title">Title</label>
                    <input
                        id="place-title"
                        name="place-title"
                        type="text"
                        value={placeData.title}
                        onChange={onTitleChange}
                    />
                </div>
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <label htmlFor="place-description">Description</label>
                    <textarea
                        id="place-description"
                        name="place-description"
                        type="text"
                        value={placeData.description}
                        onChange={onDescriptionChange}
                    />
                </div>
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <label htmlFor="place-lat">Latitude</label>
                    <input
                        id="place-lat"
                        name="place-lat"
                        type="text"
                        value={placeData.lat}
                    />
                </div>
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <label htmlFor="place-lng">Longitude</label>
                    <input
                        id="place-lng"
                        name="place-lng"
                        type="text"
                        value={placeData.lng}
                    />
                </div>
                <div style={{"display": "flex", "flexDirection": "column"}}>
                    <button onClick={onPlaceSubmit}>Add Place</button>
                </div>
            </div>
		</React.Fragment>
	)
}

export default AddPlace;