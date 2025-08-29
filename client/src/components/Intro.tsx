

export default function Intro() {
    return (
    <main className="flex flex-row items-center justify-center min-h-screen p-10 bg-gray-100">
      <div className="text-2xl font-bold p-6 max-w-2xl">
        <p>Hi there, my name is{" "}
          <span className="text-teal-500 inline-flex">Emily Hurst</span>.
          <br />
          Welcome to my personal site. Here, you can check out my projects, view my CV, and learn more about my experience.
          <br />
          <br />
          Feel free to explore and reach out if you have any questions or just want to say hi!
        </p>
        <p className="text-gray-500 text-2xl">This is a work in progress, so please check back often for updates!
          </p>

          
      </div>
      
      <div className="w-50 h-50 rounded-full object-cover ring-5 ring-teal-500"></div> {/* Headshot Placeholder */ }

      
    </main>
    );
}