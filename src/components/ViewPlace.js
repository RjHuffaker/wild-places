import React, {useState} from 'react';

const ViewPlace = ({activePlace, onTitleChange, onDescriptionChange, onSaveClick}) => {
    const [editMode, setEditMode] = useState(false)
    
    return(
		editMode ?
        <div key={activePlace.id}>
            <h3>Edit Place</h3>
            <div style={{"display": "flex", "flexDirection": "column"}}>
              <label htmlFor="place-title">Title</label>
              <input
                  id="place-title"
                  name="place-title"
                  type="text"
                  value={activePlace.title}
                  onChange={onTitleChange}
              />
            </div>
            <div style={{"display": "flex", "flexDirection": "column"}}>
              <label htmlFor="place-description">Description</label>
              <textarea
                  id="place-description"
                  name="place-description"
                  type="text"
                  value={activePlace.description}
                  onChange={onDescriptionChange}
              />
            </div>
            <button onClick={()=>{setEditMode(false); onSaveClick()}}>Save Changes</button>
            {editMode}
        </div>
        :
        <div key={activePlace.id}>
            <h3>{activePlace.title}</h3>
            <p>{activePlace.description}</p>
            <button onClick={()=>setEditMode(true)}>Edit Place</button>
            {editMode}
        </div>
	)
}

export default ViewPlace;