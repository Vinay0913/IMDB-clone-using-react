import React from "react";

function Banner({ imageUrl, title }) {
  return (
    <div
      className="mt-[5px] md:h-[70vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div className="text-white text-center container mx-auto p-4 md:p-6 lg:p-8">
        {title}
      </div>
    </div>
  );
}

export default Banner;
