import React, { useEffect, useState,useRef  } from "react";
import { useProductId } from "@/context";
import { getSingleProductService } from "../../api";

export const TabSwitch = () => {
  const [activeTab, setActiveTab] = useState(1);
  const { productId } = useProductId();
  const [ProductData, setProductData] = useState({});

  useEffect(() => {
    getSingleProductService({ id: productId }).then((res) => {
      const singleProductData = res.product;
      setProductData(singleProductData);
      console.log(ProductData);
    });
  }, [productId]);
  const reviewRef = useRef(null);
  const expertCheckRef = useRef(null);
  const specificationsRef = useRef(null);
  const userCommentsRef = useRef(null);

  const handleTabClick = (tabIndex,tabRef) => {
    setActiveTab(tabIndex);
    tabRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-10">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          <button
            onClick={() => handleTabClick(1,reviewRef)}
            className={`${
              activeTab === 1
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
            Review
          </button>
          <button
            onClick={() => handleTabClick(2,expertCheckRef)}
            className={`${
              activeTab === 2
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
            Expert Check
          </button>
          <button
            onClick={() => handleTabClick(3,specificationsRef)}
            className={`${
              activeTab === 3
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
            Specifications
          </button>
          <button
            onClick={() => handleTabClick(4,userCommentsRef)}
            className={`${
              activeTab === 4
                ? "border-primary text-primary"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
            User Comments
          </button>
        </nav>
      </div>

      <div className="py-8">
        <div
        ref={reviewRef}
          className={`${
            activeTab === 1 ? "block" : "hidden"
          } transition-all duration-500`}>
            <span className="font-extrabold">
            Review

            </span>
          <p className="text-gray-700">
            the «iPhone 12 Pro MAX» is new flagship with several new features
            and a quad-camera. Apple has used the same formula for the last few
            years for the features and overall design of this phone. The display
            of iPhone 12 Pro MAX is equipped with Super Retina panel to provide
            very good images to the user. This display has a very high
            resolution; At 6.7 inches, it holds about 458 pixels per inch, which
            is exactly equal to the pixel density of the iPhone XS. The back
            cover of the new iPhone is made of glass so that the phone does not
            have an antenna problem and the battery can be charged wirelessly in
            this phone. Of course, the metal frame houses this glass body This
            beautiful body is very resistant to scratches; So rest assured that
            water and dust do not easily affect the iPhone 12 Pro MAX.In
            addition, stains and grease do not have much effect on this quality
            screen, but this is not the end of the matter, the new iPhone can
            last for 30 minutes in 4 meters of water. Face recognition using the
            front camera is another feature used in the new Apple iPhone. But
            the most interesting and obvious difference in this new product is
            the cameras, which this time fit nicely in the back of the quad.
            Three cameras with 12-megapixel sensors along with a fourth TOF 3D
            LiDAR scanner, provide the user with very high quality and
            completely satisfying images. Ability to connect to 4G and 5G
            networks, Bluetooth version 5, version 14 of iOS are other features
            of this phone. In terms of hardware, the phone uses the new A14
            chip, which in addition to the usual tasks, to support the new
            virtual reality capabilities that Apple is focusing on these
            days.According to Apple, this phone is 80 times faster than its
            version 11.
          </p>
        </div>
        <div
        ref={expertCheckRef}
          className={`${
            activeTab === 2 ? "block" : "hidden"
          } transition-all duration-500`}>
          <div className="text-gray-700 flex flex-col gap-3">
          <span className="font-extrabold">
          Expert Check

            </span>
            <span className="font-bold ">Long Stop : New Giant</span>
            <p>
              the «iPhone 12 Pro MAX» is new flagship with several new features
              and a quad-camera. Apple has used the same formula for the last
              few years for the features and overall design of this phone. The
              display of iPhone 12 Pro MAX is equipped with Super Retina panel
              to provide very good images to the user. This display has a very
              high resolution; At 6.7 inches, it holds about 458 pixels per
              inch, which is exactly equal to the pixel density of the iPhone
              XS. The back cover of the new iPhone is made of glass so that the
              phone does not have an antenna problebattery can be charged
              wirelessly in this phone. Of course, the metal frame houses this
              glass in this phone. Of course, the metal frame houses this glass
              body This beautiful body is very resistant to scratches; So rest
              assurand dust do not easily affect the iPhone 12 Pro MAX.In
              addition, stains and grenot have much effect on this quality
              screen, but this is not thef matter, the new iPhone can last for
              30 minutes in 4 meters of water. Face 4 meter s of water. Facereco
              recognition using the front camera is another featused in version
              meters of water. Facereco 11.
            </p>
          </div>
        </div>
        <div
        ref={specificationsRef}
          className={`${
            activeTab === 3 ? "block" : "hidden"
          } transition-all duration-500 flex flex-row gap-16`}>
          <div className="font-extrabold">Specifications</div>
          <div className="flex flex-col gap-3  font-extralight">
            <p>weight</p>
            <p>CPU</p>
            <p>weight</p>
            <p>CPU</p>
            <p>weight</p>
            <p>CPU</p>
            <p>weight</p>
            <p>CPU</p>
          </div>
          <div className="flex flex-col gap-3  font-extralight">
            <p>228 gr</p>
            <p>{ProductData?.features?.cpu}</p>
            <p>228 gr</p>
            <p>{ProductData?.features?.cpu}</p>
            <p>228 gr</p>
            <p>{ProductData?.features?.cpu}</p>
            <p>228 gr</p>
            <p>{ProductData?.features?.cpu}</p>
          </div>
        </div>
        <div
          className={`${
            activeTab === 4 ? "block" : "hidden"
          } transition-all duration-500`}>
          <p className="text-gray-700">This is the user comments section.</p>
        </div>
      </div>
    </div>
  );
};
