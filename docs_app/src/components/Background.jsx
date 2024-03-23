import React from "react";

function background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute w-full py-8 top-[5%] flex justify-center font-semibold text-zinc-600 text-xl">
          Documents
        </div>
        <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] text-zinc-900 leading-none tracking-tighter font-semibold">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default background;
