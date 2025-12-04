import React from "react";
import interests from "./../../../lib/data/interests.json";

const Interests = () => {
  return (
    <>
      <div className="flex">
        {interests.interests.map((interest) => {
          const { titleNum, title, description, colorCode } = interest;

          const [firstWord, ...restWords] = title.split(" ");
          const restText = restWords.join(" ");

          return (
            <div key={interest.interestId} className="shrink-0 w-[520px]">
              <div className="shrink-0 w-[520px]">
                <div className="interestcard">
                  <div
                    className="cardInner"
                    style={{ backgroundColor: `${colorCode}` }}
                  >
                    {titleNum}
                  </div>
                  <div className="w-full text-center flex flex-col justify-center items-center">
                    <div className="text-3xl tracking-[1]">
                      <span style={{ color: colorCode }}>{firstWord}</span>
                      {restText ? " " + restText : ""}
                    </div>
                    <div className="text-sm font-light m-10">{description}</div>
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
