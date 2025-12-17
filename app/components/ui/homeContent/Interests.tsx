import React from "react";
import interests from "./../../../lib/data/interests.json";

const Interests = () => {
  return (
    <>
      <div className="flex xl:flex-row xl:flex-wrap flex-col justify-end items-center">
        {interests.interests.map((interest) => {
          const { titleNum, title, description, colorCode } = interest;

          const [firstWord, ...restWords] = title.split(" ");
          const restText = restWords.join(" ");

          return (
            <div
              key={interest.interestId}
              className="shrink-0 xl:w-[520px] w-[80%] xl:m-9 mb-10 xl:skew-2 skew-1
              transition-transform duration-500 ease-in-out transform 
            hover:scale-105 hover:-translate-y-2 hover:skew-y-2 hover:rotate-2 hover:shadow-2xl hover:brightness-110 cursor-pointer"
            >
              <div className="shrink-0">
                <div className="interestcard">
                  <div
                    className="cardInner animate-bounce"
                    style={{ backgroundColor: `${colorCode}` }}
                  >
                    {titleNum}
                  </div>
                  <div className="w-full text-center flex flex-col justify-center items-center">
                    <div className="text-3xl tracking-[1]">
                      <span style={{ color: colorCode }}>{firstWord}</span>
                      {restText ? " " + restText : ""}
                    </div>
                    <div className="text-xl leading-[36px] font-light m-10">
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Interests;
{
  /* <div className="text-3xl tracking-[1]">
  <span style={{ color: colorCode }}>{firstWord}</span>{" "}
  {rest.join(" ")}
</div> */
}
