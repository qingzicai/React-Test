import InputBox from './InputBox.jsx';
import Header from "./Header.jsx";


function App() {
  return (
 <>
    <Header/>

     <main className="max-w-3xl mx-auto mt-10 p-4 flex-col content-center justify-between">
         {/*input box for job description*/}
         <div className="flex content-center justify-between">
             <div className="flex flex-col justify-center mb-4">
                 <label htmlFor="message" className="text-lg font-semibold mb-2 text-gray-500">Job Description</label>
                 <textarea id="job-description" rows="6"
                           className="w-80 h-52 p-2 border border-gray-300 shadow-md rounded mb-2 focus:ring-blue-500"
                           placeholder="Past the text / Upload the file"></textarea>
                 <div className="flex content-center justify-center">
                     <button
                         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded mr-2">Upload
                     </button>
                     <button className="bg-gray-700 hover:bg-yellow-600 text-white font-semibold p-2 rounded">Clear
                     </button>
                 </div>
             </div>
             {/*input box for work experience*/}
             <div className="flex flex-col justify-center mb-4">
                 <label htmlFor="message" className="text-lg font-semibold mb-2 text-gray-500">Work Experience</label>
                 <textarea id="work-experience" rows="6"
                           className="w-80 h-52 p-2 border border-gray-300 shadow-md rounded mb-4 focus:ring-blue-500"
                           placeholder="Past the text / Upload the file"></textarea>
                 <div className="flex content-center justify-center">
                     <button
                         className="bg-blue-500 hover:bg-blue-600 text-white font-semibold p-2 rounded mr-2">Upload
                     </button>
                     <button className="bg-gray-700 hover:bg-yellow-600 text-white font-semibold p-2 rounded">Clear
                     </button>
                 </div>
             </div>
         </div>

         {/*Response from Vertex AI*/}
         <div className="mt-8">
             <button id='ai-generate'
                     className="text-xl font-semibold mb-4 bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded">Generate
                 Bullet Points
             </button>
             <textarea id="ai-response" rows="8"
                       className="bg-white p-4 h-36 w-full border border-gray-300 rounded"></textarea>
         </div>
     </main>

     <footer className="bg-gray-700 py-4 px-8 text-gray-200 text-sm flex justify-between items-center">
         <div>
             <p>Bulletizer &copy; 2023. All rights reserved.</p>
         </div>
         <div>
             <p>Contact: info@bulletizer.com</p>
         </div>
         <div>
             <p>License: MIT</p>
         </div>
     </footer>

 </>
  )
}

export default App
