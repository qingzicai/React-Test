const ResponseBox = () => {
    return (
        <div className="mt-8">
            <button id='ai-generate'
                    className="text-xl font-semibold mb-4 bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded">Generate
                Bullet Points
            </button>
            <textarea id="ai-response" rows="8"
                      className="bg-white p-4 h-36 w-full border border-gray-300 rounded"></textarea>
        </div>
    )
}

export default ResponseBox;