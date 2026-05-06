import { Tooltip } from "@/components/Tooltip/Tooltip";

export default function About() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-emerald-200">
            About the Artist
          </h1>

          <p className="max-w-md text-lg leading-8 text-violet-300">
            This is failderp. Or me.
          </p>

          <p className="max-w-md text-lg leading-8 text-violet-300">
            Raised by an art teacher, she was blessed with a childhood full of
            art supplies and encouragement to create. She has been doodling
            since she could hold a pencil and has been daydreaming since before
            she can ever remember. She has always been fascinated by the world
            around her, and has forever been drawn to making something out of
            something else.
          </p>

          <p className="max-w-md text-lg leading-8 text-violet-300">
            She dabbles in a wide variety of content creation formats such as{" "}
            <a
              href="https://twitch.tv/failderp/about"
              className="font-medium text-white"
              target="_blank" rel="noopener noreferrer"
            >
              Twitch streaming
            </a>{" "}
            and{" "}
            <Tooltip message="not yet available">
              <a href="#" className="font-medium text-white">
                Lesson planning
              </a>
            </Tooltip>{" "}
            for students.
          </p>
        </div>
      </main>
    </div>
  );
}
