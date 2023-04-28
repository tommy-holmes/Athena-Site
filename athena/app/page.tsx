import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Athena is a powerful AI-powered, privacy-centric chat app for iOS devices and Mac that offers offline mode, multiple conversations and an intuitive user interface."
        />
        <meta
          name="keywords"
          content="Athena, Athena App, The Athena App, ChatGPT, AI chat, iOS app, Mac app, iPhone, iPad, Mac, Apple, Native app"
        />
        <meta
          name="image"
          content="https://theathena.app/static/MetaImage.jpeg"
        />
        <meta name="author" content="Athena AI Ltd" />
        <meta
          http-equiv="Cache-Control"
          content="no-cache, no-store, must-revalidate"
        />
        <meta http-equiv="Pragma" content="no-cache" />
        <meta http-equiv="Expires" content="0" />

        <link href="dist/output.css" rel="stylesheet" />
        <link rel="icon" type="image/x-icon" href="static/icon.png" />
      </Head>

      <body className="text-black bg-egg dark:bg-carbon dark:text-white">
        <div className="container mx-auto">
          <div className="lg:grid">
            <header className="flex top-0 p-5 mt-5 lg:gap-[48rem] justify-self-center max-w-5xl backdrop-blur bg-egg/90 dark:bg-carbon/90 z-10 items-center justify-between">
              <a
                href="#"
                className="text-slate-300 dark:text-slate-700 text-2xl font-bold"
              >
                Athena
              </a>
              <nav>
                <ul className="items-center space-x-2 md:flex">
                  <li>
                    <a
                      id="download"
                      className="text-white font-semibold py-2 px-4 ml-4 rounded-full bg-teal"
                      // onClick="scrollToSection('downloadSection')"
                    >
                      Download
                    </a>
                  </li>
                </ul>
              </nav>
            </header>
          </div>

          <main className="max-w-screen-sm m-8 md:max-w-screen-2xl">
            <section className="mt-28">
              <div className="text-center">
                <h1 className="text-7xl font-bold mb-2">Meet Athena</h1>
                <h1 className="text-2xl">
                  Elevate your AI experience on iOS and Mac
                </h1>
              </div>
            </section>

            <section id="demoSection" className="mt-12 flex justify-center">
              <div id="play" className="text-center text-2xl">
                <a
                  id="btn"
                  className="font-semibold watch md:pl-6 md:pr-6 md:pt-1 md:pb-1"
                >
                  <img src="static/play.svg" className="max-h-8 mr-1"></img>
                  Watch introduction video
                </a>
              </div>

              <div id="demoVideo">
                <video
                  autoPlay
                  loop
                  controls
                  muted
                  src="static/Athena iOS Demo.mov"
                ></video>
              </div>
            </section>

            <section>
              <div className="justify-center hiddenMobile mt-28 space-y-4 flex space-x-4">
                <img
                  src="static/X Device - Hero 1 - Light.png"
                  className="w-7/8 dark:hidden"
                />
                <img
                  src="static/X Device - Hero 1 - Dark.png"
                  className="w-7/8 hidden dark:block"
                />
              </div>

              <div className="justify-center md:hidden mt-28 space-y-4">
                <img
                  src="static/iOS - Hero 1 - Light.png"
                  className="w-7/8 dark:hidden"
                />
                <img
                  src="static/iOS - Hero 1 - Dark.png"
                  className="w-7/8 hidden dark:block"
                />
              </div>
            </section>

            <section id="featuresSection" className="mt-32 text-center">
              <h2 className="text-4xl font-bold mb-2">
                More than a pretty (inter)face
              </h2>
              <div className="flex justify-center">
                <h1 className="text-lg md:w-2/3">
                  Explore the features behind Athena's best-in-class AI
                  experience that sets it apart from the rest.
                </h1>
              </div>

              <div className="flex justify-center md:pl-20 md:pr-20">
                <div className="grid grid-cols-1 mt-10 md:grid-cols-2 max-w-5xl lg:grid-cols-4 gap-4">
                  <div className="feature card">
                    <div className="flex justify-center">
                      <img src="static/phone.svg" className="h-16 m-1 mb-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Native</h3>
                    <p>
                      Glide through smooth navigation and familiar gestures for
                      a top-notch user experience.
                    </p>
                  </div>
                  <div className="feature card">
                    <div className="flex justify-center">
                      <img src="static/lock.svg" className="h-16 m-1 mb-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Private</h3>
                    <p>
                      Our privacy-centric app safeguards your personal data,
                      ensuring it remains on your device.
                    </p>
                  </div>
                  <div className="feature card">
                    <div className="flex justify-center">
                      <img
                        src="static/instruments.svg"
                        className="h-16 m-1 mb-8"
                      />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Accessible</h3>
                    <p>
                      Resizable text, dictation, haptic feedback, and sound
                      chimes make for an accessible experience.
                    </p>
                  </div>
                  <div className="feature card">
                    <div className="flex justify-center">
                      <img src="static/bulb.svg" className="h-16 m-1 mb-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Prompt tips</h3>
                    <p>
                      Discover inspiring, well-crafted prompts for optimal,
                      tailored responses.
                    </p>
                  </div>

                  <div className="feature card">
                    <div className="flex justify-center">
                      <img src="static/cpu.svg" className="h-16 m-1 mb-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Offline mode
                    </h3>
                    <p>
                      Easily browse your previous conversations even while
                      offline.
                    </p>
                  </div>
                  <div className="feature card">
                    <div className="flex justify-center">
                      <img src="static/text.svg" className="h-16 m-1 mb-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Markdown</h3>
                    <p>Response text is richly formatted with markdown.</p>
                  </div>
                  <div className="feature card">
                    <div className="flex justify-center">
                      <img src="static/moon.svg" className="h-16 m-1 mb-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Dark mode</h3>
                    <p>
                      Boost focus and safeguard your eyes with dark mode -
                      perfect for night owls or darker aesthetic lovers.
                    </p>
                  </div>
                  <div className="feature card">
                    <div className="flex justify-center">
                      <img src="static/chats.svg" className="h-16 m-1 mb-8" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">
                      Multiple topics
                    </h3>
                    <p>
                      Effortlessly handle multiple topics simultaneously and
                      retain history on your device.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center m-10">
                <h1 className="text-2xl font-bold mb-2">
                  We're just getting started
                </h1>
                <div className="flex justify-center">
                  <h1 className="text-md md:w-2/3">
                    We are dedicated to enhancing Athena, continually adding
                    exciting features to elevate your AI experience even
                    further!
                  </h1>
                </div>
              </div>
            </section>

            <section className="mt-32 md:pl-20 md:pr-20">
              <div className="text-center">
                <h2 className="text-4xl font-bold mb-2">
                  Ask and you shall receive
                </h2>
                <div className="flex justify-center">
                  <h1 className="text-lg md:w-2/3">
                    Your versatile AI assistant for information, advice,
                    creativity, and problem-solving across numerous topics and
                    tasks. You need only #AskAthena.
                  </h1>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="max-w-5xl mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:place-content-center">
                  <div className="card">
                    <p className="mt-0 font-semibold mb-3 dark:text-white">
                      I've been working on an essay for school, can you help me
                      improve it and make my writing more engaging?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      Athena can assist with writing or editing essays,
                      articles, stories, or other content.
                    </p>
                  </div>
                  <div className="card">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      I am currently learning Spanish, would you help me learn
                      by having a conversation with me in Spanish?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      You can ask Athena to put on an act as anything you would
                      like and she will respond as such.
                    </p>
                  </div>
                  <div className="card">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      I am writing a sci-fi book, could you help me come up with
                      ideas for characters?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      You can ask Athena to help generate ideas for projects,
                      stories, or other creative endeavors.
                    </p>
                  </div>
                  <div className="card hiddenMobile">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      I need a few facts and figures for a science project I am
                      working on, can you help?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      Athena can provide information on a variety of topics,
                      such as history, science, technology, and more.
                    </p>
                  </div>
                  <div className="card hiddenMobile">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      I have family staying and need to cook for 5 of them. Can
                      you suggest a popular Italian recipe with the right
                      quantities for 6 adults?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      Athena can suggest books, movies, music, cooking recipes
                      and instructions, or anything else based on your
                      preferences.
                    </p>
                  </div>
                  <div className="card hiddenMobile">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      I'm having trouble managing my expenses and saving money,
                      can you give me advice on how to improve my personal
                      financial situation?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      Athena can provide guidance on budgeting, saving,
                      investing, and managing finances.
                    </p>
                  </div>
                  <div className="card">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      Can you explain what this Python code does and how I can
                      reimplement it in Swift?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      Athena can be your coding copilot providing guidance on
                      programming concepts and helping with code debugging or
                      optimization.
                    </p>
                  </div>
                  <div className="card">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      I have a book writtern in German, can you translate it to
                      English for me?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      You can provide Athena with the text you would like
                      translated and specify the source and target languages,
                      she will handle the rest.
                    </p>
                  </div>
                  <div className="card hiddenMobile">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      I'm planning a vacation to Europe and want to make it
                      truly memorable, can you suggest some unique and
                      unforgettable experiences I should include in my
                      itinerary?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      Athena can help with researching destinations, finding
                      accommodations, and creating itineraries.
                    </p>
                  </div>
                  <div className="card hiddenMobile">
                    <p className="mt-0 font-bold mb-3 dark:text-white">
                      I'm feeling unfulfilled in my current job and want to make
                      a change, can you help me explore different career options
                      that might be a better fit for me?
                    </p>
                    <p className="mt-1 dark:text-slate-400 mb-0 col-span-2">
                      You can ask Athena and she can offer suggestions on career
                      paths, job hunting strategies, and interview preparation.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="downloadSection"
              className="mt-32 mb-20 flex justify-center"
            >
              <div className="space-y-16 ml-5 mr-5">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-2">
                    Sign up for the waitlist
                  </h1>
                  <div className="flex justify-center">
                    <h1 className="text-lg ml-5 mr-5 md:w-2/3">
                      We can only take on a limited number of users for now, but
                      for a chance to be one of the first to get to use Athena
                      sign up for the waitlist.
                    </h1>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-1 mx-4 mt-8 md:pl-20 md:pr-20 space-y-4 md:grid-cols-3 md:space-x-4 md:space-y-0">
                  <div className="text-center card min-h-min">
                    <div className="pl-8 pr-8">
                      <div className="flex justify-center">
                        <a
                          target="_blank"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                        >
                          <img
                            src="static/icon.png"
                            className="icon max-h-28 mb-6 rounded-3xl"
                          />
                        </a>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">Mac</h3>

                        <p className="dark:text-slate-400">
                          macOS 13.0 or later
                        </p>
                      </div>

                      <div className="mt-8 space-y-2">
                        {/* <div className="flex justify-center">
                    <a href=""><img className="w-48" src="static/appstore.svg" alt="Get on the App Store"></a>
                  </div>
                  <div className="flex justify-center">
                    <a href="https://testflight.apple.com/join/6CTjDWXw"><img className="w-48" src="static/testflight.svg" alt="Join the TestFlight"></a>
                  </div> */}

                        <div className="flex justify-center">
                          <a
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                            className="text-teal cta font-semibold p-2 px-4 rounded-lg"
                            id="btn"
                          >
                            Join the waitlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center card min-h-min md:relative dark:dark-card">
                    <div className="pl-8 pr-8">
                      <div className="flex justify-center">
                        <a
                          target="_blank"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                        >
                          <img
                            src="static/icon.png"
                            className="icon max-h-28 mb-6 rounded-3xl"
                          />
                        </a>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">iPhone</h3>

                        <p className="dark:text-slate-400">iOS 16.0 or later</p>
                      </div>

                      <div className="mt-8 space-y-2 md:absolute md:inset-x-0 md:bottom-6">
                        {/* <div className="flex justify-center">
                    <a href=""><img className="w-48" src="static/appstore.svg" alt="Get on the App Store"></a>
                  </div>
                  <div className="flex justify-center">
                    <a href="https://testflight.apple.com/join/6CTjDWXw"><img class="w-48" src="static/testflight.svg" alt="Join the TestFlight"></a>
                  </div> */}

                        <div className="flex justify-center">
                          <a
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                            className="text-teal cta font-semibold p-2 px-4 rounded-lg"
                            id="btn"
                          >
                            Join the waitlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center card min-h-min md:relative dark:dark-card">
                    <div className="pl-8 pr-8">
                      <div className="flex justify-center">
                        <a
                          target="_blank"
                          href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                        >
                          <img
                            src="static/icon.png"
                            className="icon max-h-28 mb-6 rounded-3xl"
                          />
                        </a>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-xl font-bold">iPad</h3>

                        <p className="dark:text-slate-400">
                          iPadOS 16.1 or later
                        </p>
                      </div>

                      <div className="mt-8 space-y-2 md:absolute md:inset-x-0 md:bottom-6">
                        {/* <div className="flex justify-center">
                    <a href=""><img className="w-48" src="static/appstore.svg" alt="Get on the App Store"></a>
                  </div>
                  <div className="flex justify-center">
                    <a href="https://testflight.apple.com/join/6CTjDWXw"><img class="w-48" src="static/testflight.svg" alt="Join the TestFlight"></a>
                  </div> */}

                        <div className="flex justify-center">
                          <a
                            target="_blank"
                            href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                            className="text-teal cta font-semibold p-2 px-4 rounded-lg"
                            id="btn"
                          >
                            Join the waitlist
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="socials" className="mt-32 mb-32 text-center">
              <h1 className="text-4xl font-bold mb-2">
                Follow Athena's journey
              </h1>
              <div className="flex justify-center">
                <h1 className="text-lg w-3/4 md:w-2/3">
                  Be in the loop and the first to know when exciting new
                  features drop and any other major updates by following Athena
                  on social media.
                </h1>
              </div>

              <div className="flex justify-center">
                <div className="grid grid-cols-2 max-w-4xl gap-2 md:gap-0 md:grid-cols-3 p-4 justify-center">
                  <a
                    target="_blank"
                    className="text-teal text-2xl font-semibold watch px-4 py-1"
                    href="https://twitter.com/TheAthenaApp"
                    id="btn"
                  >
                    Twitter
                    <img
                      src="static/chevron.right.svg"
                      className="max-h-8 ml-2"
                    />
                  </a>
                  <a
                    rel="me"
                    target="_blank"
                    className="text-teal text-2xl font-semibold watch px-4 py-1"
                    href="https://mastodon.online/@TheAthenaApp"
                    id="btn"
                  >
                    Mastodon
                    <img
                      src="static/chevron.right.svg"
                      className="max-h-8 ml-2"
                    />
                  </a>
                  <a
                    target="_blank"
                    className="text-teal col-span-2 md:col-span-1 text-2xl font-semibold watch px-4 py-1"
                    href="https://www.youtube.com/@TheAthenaApp"
                    id="btn"
                  >
                    YouTube
                    <img
                      src="static/chevron.right.svg"
                      className="max-h-8 ml-2"
                    />
                  </a>
                </div>
              </div>
            </section>

            <div className="flex justify-center bg-white dark:bg-deepGrey">
              <div className="container p-8 pb-4 max-w-4xl">
                <div className="grid gap-8 grid-cols-2 md:grid-cols-4">
                  <div className="space-y-1">
                    <h1 className="font-bold text-slate-500 dark:text-slate-300">
                      Products
                    </h1>
                    <a
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Athena for Mac
                    </a>
                    <a
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Athena for iPhone
                    </a>
                    <a
                      target="_blank"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSf83PDgOX2jfuqIyxMANd5WrVrxkoEfY1B_XQqAr5wgzt48cg/viewform?usp=sf_link"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Athena for iPad
                    </a>
                  </div>

                  <div className="space-y-1">
                    <h1 className="font-bold text-slate-500 dark:text-slate-300">
                      Support
                    </h1>
                    <a
                      href="mailto: feedback@theathena.app"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Provide feedback
                    </a>
                    <a
                      href="mailto: features@theathena.app"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Request feature
                    </a>
                  </div>

                  <div className="space-y-1">
                    <h1 className="font-bold text-slate-500 dark:text-slate-300">
                      News
                    </h1>
                    <a
                      target="_blank"
                      href="https://twitter.com/TheAthenaApp"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Twitter
                    </a>
                    <a
                      target="_blank"
                      href="https://mastodon.online/@TheAthenaApp"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Mastodon
                    </a>
                    <a
                      target="_blank"
                      href="https://www.youtube.com/@TheAthenaApp"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      YouTube
                    </a>
                    <a
                      target="_blank"
                      href="https://instagram.com/theathenaapp"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Instagram
                    </a>
                    <a
                      target="_blank"
                      href="https://LinkedIn.com/company/theathenaapp"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      LinkedIn
                    </a>
                  </div>

                  <div className="space-y-1">
                    <h1 className="font-bold text-slate-500 dark:text-slate-300">
                      Company
                    </h1>
                    <a
                      target="_blank"
                      href="https://github.com/tommy-holmes"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Tom Holmes
                    </a>
                    <a
                      target="_blank"
                      href="https://benkau.com"
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Shaps Benkau
                    </a>
                    <a
                      href="downloads/athena-presskit.zip"
                      download
                      className="text-slate-400 dark:text-slate-500 secondary-btn"
                    >
                      Press Kit
                    </a>
                  </div>
                </div>

                <div className="flex justify-center mt-16">
                  <img
                    src="static/logo-small-1.svg"
                    className="height: 16pt;"
                  />
                </div>

                <div className="text-center m-2">
                  <p>
                    <a
                      target="_blank"
                      href="https://openai.com"
                      className="text-sm text-slate-500"
                    >
                      POWERED BY OPENAI'S CHATGPT
                    </a>
                  </p>
                </div>
              </div>
            </div>


          </main>
        </div>
      </body>
    </>
  );
}
