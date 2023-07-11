import InputBox from "./InputBox.jsx";
import Header from "./Header.jsx";
import Footer from "./footer.jsx";
import ResponseBox from "./ResponseBox.jsx";


function App() {
    return (
        <>
            <Header/>

            <main className="max-w-3xl mx-auto mt-10 p-4 flex-col items-center justify-between">
                <div className={'flex'}>
                    {/*input box for job description*/}
                    <InputBox content={'job-description'}/>

                    {/*input box for work experience*/}
                    <InputBox content={'work-experience'}/>
                </div>

                {/*Response from Vertex AI*/}
                <ResponseBox/>

            </main>

            <Footer/>

        </>
    )
}

export default App
