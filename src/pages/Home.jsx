import React from 'react'
// import HeroSection from '../layouts/HeroSection' //! deprecated 
// import HeaderNav from '../layouts/Nav' //!deprecated

export default function Home() {
    return (
        <>
    <main className="w-[80vw] mx-auto flex flex-col items-center justify-center mt-12">
        <div className="flex flex-col items-center gap-3">
        <h1 className="font-[800] text-3xl text-[#d1d1d1]">Code Facade: Unstoppable execution scenes</h1>
        <h3 className="text-2xl font-semibold">Code Learn Easy&Fast</h3>
        <p className="w-[60%]">
            A code execution system: Code that Runs code, Anywhere. Save setup hurdles and focus on what matters.
            Automate your workflow with our powerful remote code execution platform. Seamless and efficient features. 
            Real-time coding, storage, and collaborations.
        </p>
        </div>
        <div className="flex gap-3 mt-4">
            <button className="bg-green-300 text-white rounded-xl px-3 py-4">START CODING</button>
            <button className="bg-blue-400 text-white rounded-xl px-3 py-4">START LEARNING</button>
        </div>
    </main>

    <section id="video-section" className="w-[80vw] mx-auto mt-10">
        <video autoPlay width="" height="400px">
            {/* <!-- <source src="../javascript-compiler.535259af.webm" type="video/webm"/> --> */}
        </video>
    </section>

    <section id="package-and-langs-support" className="w-[80vw] mx-auto flex flex-col gap-2">
        <h1>Multiple languages supported</h1>
        <h3>Rust, Elixir, Python, Go, JavaScript, TypeScript,</h3>
        
        another vid showing code
        List langs and frameworks here...
    </section>

    <section className="w-[80vw] mx-auto flex flex-col gap-4">
        <h1>JavaScript, TypeScript, React, Vue, Tailwind css at your fingertips</h1>

        <div className="flex justify-between">
                    <div>
                        <h1 className="font-semibold text-xl underline">Old Way</h1>
                        <ul className="flex flex-col gap-1">
                            <li>Download IDE/Editor</li>
                            <li>Install and configure IDE</li>
                            <li>Install runtimes, Node, JVM, etc</li>
                            <li>Add to PATH ENV</li>
                            <li>Open IDE and start creating projects</li>
                            <li>Init packages from npm or package managers</li>
                            <li>Create file</li>
                            <li>Write first line of code</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h1 className="font-semibold text-xl underline">New way</h1>
                        <ul className="flex flex-col gap-1">
                            <li>Visit online platform</li>
                            <li>Start instantly</li>
                        </ul>
                    </div>
        </div>

    </section>
        </>
    )
}