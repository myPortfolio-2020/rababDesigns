import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { TrainHightlight } from "../../animation/TrainHighlight";

const Transit = () => {
  const trainRef = useRef<SVGPathElement | null>(null);
  useEffect(() => {
    if (trainRef.current) {
      TrainHightlight(trainRef.current as unknown as HTMLElement);
    }
  }, []);

  return (
    <>
      <div className="relative">
        <div className="absolute bottom-[20%] right-0 w-[100px] md:w-[150px] lg:w-[170px]">
          <Image
            src="/assets/luggage.png"
            alt=""
            width={170}
            height={66}
            className="w-full h-auto"
          />
        </div>
        <svg
          width="100%"
          height="auto"
          viewBox="0 0 1426 945"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M836.039 655.629L846.285 654.614L613.302 938.542L605.191 939.346L836.039 655.629Z"
            fill="#FCFCFC"
          />
          <path
            d="M870.112 645.644L880.37 644.614L646.775 929.289L638.655 930.105L870.112 645.644Z"
            fill="#47545E"
          />
          <path
            d="M557.384 644.286L567.911 644.235L296.5 939.5L286 939.5L557.384 644.286Z"
            fill="#FCFCFC"
          />
          <path
            d="M585.484 644.286L596.012 644.235L324.6 939.5L314.1 939.5L585.484 644.286Z"
            fill="#47545E"
          />
          <path
            d="M445.5 539L444.5 592L86 912L0.5 909L445.5 539Z"
            fill="#5C93BE"
          />
          <path
            d="M85 912L445 592V604L99.5 939L86 939.5L85 912Z"
            fill="#47545E"
          />
          <path d="M0 909L85 912L86.5 940L0 937V909Z" fill="#4D4D4D" />
          <path
            d="M808 877.437H1426V295C1358 295 1333 295 1292 326C1251 357 808 877.437 808 877.437Z"
            fill="#13171B"
          />
          {/* train */}
          <path
            className="hi"
            ref={trainRef}
            d="M901.566 121.319C822.873 93.6329 751.242 81 725.011 81C915.489 125.334 942.011 288 936.877 334.927V543.498V632.669L1057.44 521.331C1161.86 425.61 1175.15 412.394 1250.64 349.033C1310.67 298.654 1365.32 303.692 1406.01 295.631V163.637C1390.54 167.332 1344.47 174.217 1218.36 174.217C1025.37 174.217 997.915 155.216 901.566 121.319Z"
            fill="#242425"
          />
          {/* windows  0A0E10 */}
          <path
            d="M1171.44 219.054L1233.96 223.085V314.271L1169.43 346.01L1171.44 219.054Z"
            fill="#0A0E10"
          />
          <path
            d="M1257.8 224.092H1323.28L1321.26 281.021L1256.19 306.714L1257.8 224.092Z"
            fill="#0A0E10"
          />
          <path
            d="M1343.05 219.054L1403.99 218.047V273.968L1343.05 277.495L1343.05 219.054Z"
            fill="#0A0E10"
          />
          <path
            d="M1079.13 216.031L1141.64 222.581V361.124L1076.61 407.977L1079.13 216.031Z"
            fill="#0A0E10"
          />
          <path
            d="M972.188 187.819L1048.86 207.971L1051.39 421.076L981.268 472.966L972.188 187.819Z"
            fill="#0A0E10"
          />
          <path
            d="M441.009 540.169H941.011V621.169C941.011 637.185 928.027 650.169 912.011 650.169H470.009C453.993 650.169 441.009 637.185 441.009 621.169V540.169Z"
            fill="#0A0E10"
          />
          <rect
            x="558.539"
            y="568.169"
            width="264.941"
            height="4"
            rx="2"
            fill="#5B5858"
          />
          <rect
            x="558.539"
            y="591.169"
            width="264.941"
            height="4"
            rx="2"
            fill="#5B5858"
          />
          <rect
            x="558.539"
            y="614.169"
            width="264.941"
            height="4"
            rx="2"
            fill="#5B5858"
          />
          <path
            d="M510.232 566.669C524.526 566.669 536.123 578.304 536.123 592.669C536.123 607.034 524.526 618.669 510.232 618.669C495.939 618.669 484.342 607.034 484.342 592.669C484.342 578.304 495.939 566.669 510.232 566.669Z"
            fill="#FABC3A"
            stroke="#FCFCFC"
            strokeWidth="3"
          />
          <path
            d="M870.792 566.669C885.085 566.669 896.682 578.304 896.682 592.669C896.682 607.034 885.085 618.669 870.792 618.669C856.498 618.669 844.901 607.034 844.901 592.669C844.901 578.304 856.498 566.669 870.792 566.669Z"
            fill="#FABC3A"
            stroke="#FCFCFC"
            strokeWidth="3"
          />
          <path
            d="M440.011 329.169V542.168H939.011V317.169C939.011 211.169 847.914 73.5146 683.011 79.1687C508.011 85.1689 439.011 252.836 440.011 329.169Z"
            fill="#4D4D4D"
          />
          <path
            d="M489.02 351.321V542.169H894.011L895.011 340.569C903.011 243.169 822.011 128.169 693.011 128.169C539.159 128.169 483.011 263.169 489.02 351.321Z"
            fill="white"
          />
          <rect
            x="585.011"
            y="492.169"
            width="217"
            height="4"
            rx="2"
            fill="#13171B"
          />
          <rect
            x="585.011"
            y="507.169"
            width="217"
            height="4"
            rx="2"
            fill="#13171B"
          />
          <rect
            x="529.011"
            y="488.169"
            width="49"
            height="26"
            rx="7"
            fill="#F18810"
          />
          <rect
            x="812.011"
            y="488.169"
            width="49"
            height="26"
            rx="7"
            fill="#F18810"
          />
          <rect
            x="527.011"
            y="277.169"
            width="334"
            height="180"
            rx="8"
            fill="#0A0E10"
          />
          <line
            x1="639.597"
            y1="398.169"
            x2="588.011"
            y2="346.583"
            stroke="#FCFCFC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="741.597"
            y1="420.169"
            x2="646.011"
            y2="324.583"
            stroke="#FCFCFC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="800.597"
            y1="398.169"
            x2="750.011"
            y2="347.583"
            stroke="#FCFCFC"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <rect
            x="591.511"
            y="196.669"
            width="187"
            height="54"
            rx="9.5"
            fill="#BAC8D6"
            stroke="#BAC8D6"
          />
          <rect
            x="683.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="673.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="663.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="653.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="644.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="634.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="624.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="615.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="604.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="760.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="750.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="741.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="731.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="721.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="712.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="703.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect
            x="693.011"
            y="205.169"
            width="4"
            height="38"
            rx="2"
            fill="#FCFCFC"
          />
          <rect x="1400" width="26" height="295" fill="#313F4F" />
          <rect x="808" y="877" width="618" height="62" fill="#1C272D" />
        </svg>
      </div>
    </>
  );
};

export default Transit;
