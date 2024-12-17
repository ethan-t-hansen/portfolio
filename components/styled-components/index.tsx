"use client";

import Image from "next/image";
import React, { useState } from "react";

import { experiences } from "../constants/experiences";
import { ImageFillProps } from "../constants/types";

export const ImageFill = ({ className, src }: ImageFillProps) => (
  <div className="relative w-full h-full">
    <Image
      className={`${className} rounded-xl object-cover`}
      fill
      src={src}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      alt="Site Image"
    />
    {/* <div className="absolute inset-0 bg-gradient-to-t from-neutral-800/20 to-transparent rounded-xl"></div> */}
  </div>
);

export const ExperiencesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(
    Object.keys(experiences)[0],
  );

  const categories = Object.keys(experiences);

  return (
    <div className="flex justify-between items-start w-full max-w-6xl py-16">
      {/* Categories Section */}
      <div className="w-1/4 space-y-4">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveCategory(category);
            }}
            className={`
              flex items-center w-full transition-all duration-300
              ${
                activeCategory === category ? "" : "hover:opacity-50 opacity-30"
              }
            `}
          >
            <div className="flex items-center space-x-2">
              <span className="flex flex-row items-center gap-1 text-2xl font-medium">
                {category.split(" ").map((word, index) => (
                  <React.Fragment key={word}>
                    {index > 0 && (
                      <div className="inline-block w-14 h-12 mx-1 relative">
                        <ImageFill src={experiences[category][0].tabImage} />
                      </div>
                    )}
                    {word}
                  </React.Fragment>
                ))}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* Experiences in Active Category */}
      <div className="w-1/2 pl-8">
        {/* Active Experience Details */}
        <div className="space-y-6">
          {experiences[activeCategory].map((experience, index) => (
            <div className="space-y-4">
              <div className="flex flex-row items-center gap-4">
                {/* Company Logo */}
                <Image
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  width={40}
                  height={40}
                />

                {/* Position Details */}
                <div className="flex flex-col">
                  <div className="text-xl font-semibold">{experience.position}</div>
                  <div className="text-gray-500 text-sm">{experience.company} / {experience.date}</div>
                </div>
              </div>

              <div className="text-gray-700"> {experience.description} </div>

              <hr className="border-t-1 border-gray-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
