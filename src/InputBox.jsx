function InputBox(props) {
    return (

        <div className="flex flex-col justify-center mb-4">
            <label htmlFor='message' className="text-lg font-semibold mb-2 text-gray-500">{props.content}</label>
            <textarea
                id={props.content}
                rows="6"
                className="w-80 h-52 p-2 border border-gray-300 shadow-md rounded mb-2 focus:ring-blue-500"
                placeholder="Paste the text / Upload the file"
            ></textarea>
            <div className="flex content-center justify-center">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded mr-2">Upload
                </button>
                <button className="bg-gray-700 hover:bg-yellow-600 text-white font-semibold p-2 rounded">Clear</button>
            </div>
        </div>
    )
}

export default InputBox;