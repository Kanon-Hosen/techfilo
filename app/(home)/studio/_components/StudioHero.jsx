import React from 'react'

function StudioHero() {
  return (
    <div className="md:px-10 px-6 md:h-screen h-full md:my-0 my-14 flex  items-center justify-center">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center justify-center gap-3 text-center">
        <h1 className="font-bold md:text-6xl text-3xl text-neutral-800">A Creative Nest</h1>
        <p className="text-center md:px-32 px-0 mt-3 font-light md:text-xl leading-relaxed text-neutral-600">
          TechFilo is a family of highly driven graphic designers Bangldesh.
          Each one has their own set of skills, from
          <span className="text-primary">
            {" "}
            branding, marketing, web design
          </span>{" "}
          and <span className="text-primary"> development</span>, to{" "}
          <span className="text-primary"> animation</span>. Together they use
          their collective experience and expertise to produce effective assets
          and creative solutions to help you go one step higher.
        </p>
      </div>
    </div>
  );
}

export default StudioHero