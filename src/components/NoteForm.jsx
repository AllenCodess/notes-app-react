import { useState } from "react";
import TextInput from "./inputs/TextInput";


const NoteForm = ({notes, setNotes}) => {
    const [formData, setFormData] = useState({
        title: '',
        category: 'Work',
        priority: 'Medium',
        description: '',

    });
    const [isFormVisible, setisFormVisible] = useState(false)


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

    const handleChange = (e) => {
          
       setFormData({
        ...formData, [e.target.name]: e.target.value,
       })
    }

    return (
<>
         <button
    onClick={() => setisFormVisible(!isFormVisible)}
    className='w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 
    rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4'
  >
    {isFormVisible ? 'Hide Form ✖️' : 'Add New Note ➕'}
  </button>

  {isFormVisible && (<form 
onSubmit={handleSubmission}
className="mb-6">
   <TextInput 
   label={'Title'}
   name={'title'}
   value={formData.value}
   onChange={handleChange}
   required/>

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

    <button type='submit' className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600">Add Note</button>

</form>)}


</>

    )
}

export default NoteForm;