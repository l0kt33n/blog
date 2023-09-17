import { Linkedin, Github, Mail, Check, CheckCircle } from 'lucide-react'

export default function Page() {
  return (
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="w-full">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-bold tracking-wide text-gray-800 dark:text-white lg:text-5xl">
            Lokteen Yu
          </h1>
          <h2 className="mt-4 text-gray-600 dark:text-gray-400">
            I am a software engineer based in Bay Area, CA specializing in building (and occasionally designing) exceptional websites, games, and everything in between.
          </h2>

          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <CheckCircle size={24} />
              <span className="mx-2">Next.js Fullstack</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <CheckCircle size={24} />
              <span className="mx-2">React Frontend</span>
            </p>
            
            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <CheckCircle size={24} />
              <span className="mx-2">TailwindCSS</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <CheckCircle size={24} />
              <span className="mx-2">Unreal Engine 5</span>
            </p>

            <p className="flex items-center -mx-2 text-gray-700 dark:text-gray-200">
              <CheckCircle size={24} />
              <span className="mx-2">Express API</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center mt-16 space-y-8 lg:flex-row lg:items-start lg:space-y-0 lg:space-x-6">
          <a href="mailto:yulokteen@outlook.com" className="text-gray-400 hover:text-gray-500">
            <Mail size={24} />
          </a>
          <a href="https://www.linkedin.com/lokteenyu" className="text-gray-400 hover:text-gray-500">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com/l0kt33n" className="text-gray-400 hover:text-gray-500">
            <Github size={24} />
          </a>
        </div>
      </div>
    </div>
  )
}