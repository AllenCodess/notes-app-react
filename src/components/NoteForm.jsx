// importing the useState hook that has a initial value and then it updates it
import { useState } from "react";

// this function or componenet is equal to the intial value of 
// formdata which is an object and then it gets updated to setFormData
// im not sure what the point of notes and setNotes is doing I know im passing it from the app.jsx component
const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: '',

    });

    // this function handles the submission by checking to see if the the description and title fields are empty
    // if they are then the function will stop and not continue with the rest of the instructions.
    // if the funciton keeps going because the strings are not empty then setNotes initial value becomes setNotes
    // and the updated value becomes a copy of the intial value through ...notes. it becomes a copy
    // so the original data isnt changed and has its intigrity. thats important because the app continously
    // references that data so if it chnaged the app may crash
    // then setFromData reset the values after those processes are complete
    const handleSubmission = (e) => {
        e.preventDefault();
        if(!formData.title || !formData.description) return; // Checks to see if its empty
        const newNote = { id: Date.now(), ...formData };
        setNotes([newNote, ...notes]);
        setFormData({
            title: '',
        category: 'Work',
        priority: 'Medium',
        description: '',
        })
    }
//this function coordinates and updates the key value paits with ...formData which creates a copy of the oringal
// amd assings the respective key  to its value per the form. the app knows which value belongs to what key bacause 
// of the name property inside input or select 
    const handleChange = (e) => {
          
       setFormData({
        ...formData, [e.target.name]: e.target.value,
       })
    }
    

    return (

        // when this form is submitted it calls the submission function above
        // the value is assined to the key of title since its hardcoded here and the value is the input 
        // formData.title
        // the Event onChnage triggers when there is any change in the input field
        // this process repeats for each div assigning th proper keys and values

<form 
onSubmit={handleSubmission}
className="mb-6">
    <div className="mb-4">
        <label htmlFor="title" className="block font-semibold"> Title</label>
        <input 
        name="title"
        type="text"
        className="w-full p-2 border rounded-lg"
        value={formData.title}
        onChange={handleChange} />
    </div>

     <div className="mb-4">
        <label htmlFor="priority" className="block font-semibold"> Priority</label>

            <select
            name="priority"
            className="w-full p-2 border rounded-lg"
            value={formData.priority}
            onChange={handleChange} >

        <option value="Low">🟢Low</option>
        <option value="Medium">🟠Medium</option>
        <option value="High">🔴High</option>
        </select>
    </div>

      <div className="mb-4">
        <label htmlFor="category" className="block font-semibold"> Category</label>

            <select
            name="category"
            className="w-full p-2 border rounded-lg"
            value={formData.category}
            onChange={handleChange} >

        <option value="Work">📂 Work</option>
        <option value="Personal">🏠 Personal</option>
        <option value="Ideas">💡 Ideas</option>
        </select>
    </div>

     <div className="mb-4">
        <label htmlFor="description" className="block font-semibold"> Description</label>
        <textarea
        name="description"
        className="w-full p-2 border rounded-lg"
        value={formData.description}
        onChange={handleChange} > </textarea>
    </div>
{/* submit button for the form */}
    <button type='submit' className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button>

</form>

    )
}

export default NoteForm;