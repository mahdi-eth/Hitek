/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
const tabsData = [
  {
    label: "Review",
    content:
      "the «iPhone 12 Pro MAX» is new flagship with several new features and a quad-camera. Apple has used the same formula for the last few years for the features and overall design of this phone. The display of iPhone 12 Pro MAX is equipped with Super Retina panel to provide very good images to the user. This display has a very high resolution; At 6.7 inches, it holds about 458 pixels per inch, which is exactly equal to the pixel density of the iPhone XS. The back cover of the new iPhone is made of glass so that the phone does not have an antenna problem and the battery can be charged wirelessly in this phone. Of course, the metal frame houses this glass body This beautiful body is very resistant to scratches; So rest assured that water and dust do not easily affect the iPhone 12 Pro MAX.In addition, stains and grease do not have much effect on this quality screen, but this is not the end of the matter, the new"
  },
  {
    label: "Expert check  ",
    content:
      "the «iPhone 12 Pro MAX» is new flagship with several new features and a quad-camera. Apple has used the same formula for the last few years for the features and overall design of this phone. The display of iPhone 12 Pro MAX is equipped with Super Retina panel to provide very good images to the user. This display has a very high resolution; At 6.7 inches, it holds about 458 pixels per inch, which is exactly equal to the pixel density of the iPhone XS. The back cover of the new iPhone is made of glass so that the phone does not have an antenna problem and the battery can be charged wirelessly in this phone. Of course, the metal frame houses this glass body This beautiful body is very resistant to scratches; So rest assured that water and dust do not easily affect the iPhone 12 Pro MAX.In addition, stains and grease do not have much effect on this quality screen, but this is not the end of the matter, the new iPhone can last for 30 minutes in 4 meters of water. Face recognition using the front camera is another feature used in the new Apple iPhone. But the most interesting and obvious difference in this new product is the cameras, which this time fit nicely in the back of the quad. Three cameras with 12-megapixel sensors along with a fourth TOF 3D LiDAR scanner, provide the user with very high quality and completely satisfying images. Ability to connect to 4G and 5G networks, Bluetooth version 5, version 14 of iOS are other features of this phone. In terms of hardware, the phone uses the new A14 chip, which in addition to the usual tasks, to support the new virtual reality capabilities that Apple is focusing on these days.According to Apple, this phone is 80 times faster than its version 11.the «iPhone 12 Pro MAX» is new flagship with several new features and a quad-camera. Apple has used the same formula for the last few years for the features and overall design of this phone. The display of iPhone 12 Pro MAX is equipped with Super Retina panel to provide very good images to the user. This display has a very high resolution; At 6.7 inches, it holds about 458 pixels per inch, which is exactly equal to the pixel density of the iPhone XS. The back cover of the new iPhone is made of glass so that the phone does not have an antenna problem and the battery can be charged wirelessly in this phone. Of course, the metal frame houses this glass body This beautiful body is very resistant to scratches; So rest assured that water and dust do not easily affect the iPhone 12 Pro MAX.In addition, stains and grease do not have much effect on this quality screen, but this is not the end of the matter, the new iPhone can last for 30 minutes in 4 meters of water. Fa",
    titel: " overview"
  },
  {
    label: "Specifications ",
    content:
      "the «iPhone 12 Pro MAX» is new flagship with several new features and a quad-camera. Apple has used the same formula for the last few years for the features and overall design of this phone. The display of iPhone 12 Pro MAX is equipped with Super Retina panel to provide very good images to the user. This display has a very high resolution; At 6.7 inches, it holds about 458 pixels per inch, which is exactly equal to the pixel density of the iPhone XS. The back cover of the new iPhone is made of glass so that the phone does not have an antenna problem and the battery can be charged wirelessly in this phone. Of course, the metal frame houses this glass body This beautiful body is very resistant to scratches; So rest assured that water and dust do not easily affect the iPhone 12 Pro MAX.In addition, stains and grease do not have much effect on this quality screen, but this is not the end of the matter, the new iPhone can last for 30 minutes in 4 meters of water. Face recognition using the front camera is another feature used in the new Apple iPhone. But the most interesting and obvious difference in this new product is the cameras, which this time fit nicely in the back of the quad. Three cameras with 12-megapixel sensors along with a fourth TOF 3D LiDAR scanner, provide the user with very high quality and completely satisfying images. Ability to connect to 4G and 5G networks, Bluetooth version 5, version "
  },
  {
    label: "User comments",
    content:
      "the «iPhone 12 Pro MAX» is new flagship with several new features and a quad-camera. Apple has used the same formula for the last few years for the features and overall design of this phone. The display of iPhone 12 Pro MAX is equipped with Super Retina panel to provide very good images to the user. This display has a very high resolution; At 6.7 inches, it holds about 458 pixels per inch, which is exactly equal to the pixel density of the iPhone XS. The back cover of the new iPhone is made of glass so that the phone does not have an antenna problem and the battery can be charged wirelessly in this phone. Of course, the metal frame houses this glass body This beautiful body is very resistant to scratches; So rest assured that water and dust do not easily affect the iPhone 12 Pro MAX.In addition, stains and grease do not have much effect on this quality screen, but this is not the end of the matter, the new iPhone can last for 30 minutes in 4 meters of water. Face recognition using the front camera is another feature used in the new Apple iPhone. But the most interesting and obvious difference in this new product is the cameras, which this time fit nicely in the back of the quad. Three cameras with 12-megapixel sensors along with a fourth TOF 3D LiDAR scanner, provide the user with very high quality and completely satisfying images. Ability to connect to 4G and 5G networks, Bluetooth version 5"
  }
];
export function TabSwitch() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <>
      <div>
        <div className="flex space-x-3 border-b">
          {/* Loop through tab data and render button for each. */}
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-2 border-4 bg-blend-screen text-primary bg-slate-300 rounded-lg transition-colors duration-300 ${
                  idx === activeTabIndex
                    ? "border-b-primary"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTabIndex(idx)}>
                {tab.label}
              </button>
            );
          })}
        </div>
        {/* Show active tab content. */}
        <div className=" p-10 border-t-2 border-gray-500 flex flex-col ">
          <span className="font-semibold">
            {tabsData[activeTabIndex].label}
          </span>
          <p className="py-8sm:pr-0 lg:pr-40">
            {tabsData[activeTabIndex].content}
          </p>
          <span className="text-sky-500 pb-8 ">show more</span>
          <hr /> <hr />
          <div className="pt-10 flex flex-wrap flex-col ">
            <span className="font-semibold ">
              {tabsData[activeTabIndex].label}
            </span>
            <div className="">
              <p className="py-8 sm:pr-0 lg:pr-40">
                {tabsData[activeTabIndex].content}
              </p>
              <p className="py-8 sm:pr-0 lg:pr-40">
                {tabsData[activeTabIndex].content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
