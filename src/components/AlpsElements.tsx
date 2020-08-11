import React from 'react';

const AlpsEmements: React.FC<{ selectedIndex: number; onSelectElement: (index: number) => void }> = ({ selectedIndex, onSelectElement }) => {
  const circles = [
    { x: '141.516', y: '214.516' },
    { x: '302.516', y: '126.516' },
    { x: '425.516', y: '230.516' },
    { x: '404.516', y: '405.516' },
    { x: '214.516', y: '386.516' },
  ];
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 595 470">
      <defs>
        <filter id="a" width="341.7%" height="341.7%" x="-99.8%" y="-99.8%" filterUnits="objectBoundingBox">
          <feMorphology in="SourceAlpha" operator="dilate" radius="3" result="shadowSpreadOuter1"></feMorphology>
          <feOffset dx="4" dy="4" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
          <feGaussianBlur in="shadowOffsetOuter1" result="shadowBlurOuter1" stdDeviation="6"></feGaussianBlur>
          <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
          <feColorMatrix in="shadowBlurOuter1" values="0 0 0 0 0.121530113 0 0 0 0 0.285966612 0 0 0 0 0.416533801 0 0 0 0.17798913 0"></feColorMatrix>
        </filter>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1" transform="translate(-7 0)">
        <g stroke="#FFF" transform="translate(88 38)">
          <path d="M214.588211 0.6258133L0.590553162 157.284638 82.3306258 410.764333 346.845797 410.764333 428.585869 157.284638z"></path>
          <path d="M415.242362 161.653083L214.58791 14.7620874 13.9344625 161.653083 90.5767693 399.328511 338.59905 399.328511z"></path>
          <path d="M401.898955 166.021628L214.587709 28.8994751 27.2774677 166.021628 98.824018 387.891778 330.352404 387.891778z"></path>
          <path d="M388.555447 170.390274L214.588412 43.0349394 40.621377 170.390274 107.070162 376.455146 322.105658 376.455146z"></path>
          <path d="M375.21204 174.75882L214.588211 57.1723271 53.9643822 174.75882 115.31741 365.017401 313.859012 365.017401z"></path>
          <path d="M361.868533 179.127365L214.58791 71.3087025 67.3082916 179.127365 123.563554 353.580668 305.612266 353.580668z"></path>
          <path d="M348.525126 183.496012L214.587709 85.4461914 80.6512967 183.496012 131.810803 342.144036 297.36562 342.144036z"></path>
          <path d="M335.181618 187.864557L214.588412 99.5825667 93.9942014 187.864557 140.056946 330.706291 289.118874 330.706291z"></path>
          <path d="M321.838211 192.233102L214.588211 113.718942 107.338211 192.233102 148.304195 319.27057 280.872228 319.27057z"></path>
          <path d="M308.494704 196.601648L214.58791 127.85633 120.681116 196.601648 156.550338 307.833837 272.625481 307.833837z"></path>
          <path d="M295.151297 200.969282L214.587709 141.992806 134.025126 200.969282 164.797587 296.397205 264.378835 296.397205z"></path>
          <path d="M281.807789 205.337827L214.588412 156.130194 147.36803 205.337827 173.044735 284.95946 256.132089 284.95946z"></path>
          <path d="M268.464382 209.706474L214.588211 170.265658 160.71204 209.706474 181.290979 273.522828 247.885443 273.522828z"></path>
          <path d="M255.120875 214.075019L214.58791 184.402034 174.054945 214.075019 189.538128 262.086095 239.638697 262.086095z"></path>
          <path d="M241.777468 218.443564L214.588714 198.539421 187.398955 218.443564 197.784372 250.649362 231.392051 250.649362z"></path>
          <path d="M228.43396 222.81211L214.588412 212.675797 200.742864 222.81211 206.03152 239.212629 223.145304 239.212629z"></path>
          <path d="M214.588211 226.812982L214.085869 227.180452 214.277764 227.775694 214.898659 227.775694 215.090553 227.180452z"></path>
        </g>
        <path stroke="#0199FE" strokeWidth="4" d="M140 213.333925L302.935202 125 425.262369 228.222067 404.025915 406.827039 212.744833 387.36687z"></path>
        <g stroke="#9B9B9B" strokeWidth="2" transform="translate(299 33)">
          <path d="M0 0.519L5 0.519"></path>
          <path d="M0 46.187L5 46.187"></path>
          <path d="M0 15.05L5 15.05"></path>
          <path d="M0 60.718L5 60.718"></path>
          <path d="M0 30.618L5 30.618"></path>
          <path d="M0 74.211L5 74.211"></path>
          <path d="M0 87.704L5 87.704"></path>
          <path d="M0 102.235L5 102.235"></path>
          <path d="M0 117.803L5 117.803"></path>
          <path d="M0 131.296L5 131.296"></path>
          <path d="M0 176.964L5 176.964"></path>
          <path d="M0 145.827L5 145.827"></path>
          <path d="M0 191.495L5 191.495"></path>
          <path d="M0 161.396L5 161.396"></path>
          <path d="M0 204.988L5 204.988"></path>
          <path d="M0 218.481L5 218.481"></path>
        </g>
        {/* <use fill="#000" filter="url(#a)" xlinkHref="#b"></use>
        <use
          fill="#0199FE"
          stroke="#F3F3F3"
          strokeWidth="6"
          xlinkHref="#b"
        ></use> */}

        <circle cx={circles[selectedIndex].x} cy={circles[selectedIndex].y} r="9.516" fill="#000" filter="url(#a)"></circle>

        {circles.map((circle, i) => {
          const isSelected = i === selectedIndex;
          return (
            <circle
              key={i}
              cx={circle.x}
              cy={circle.y}
              r={isSelected ? '9.516' : '6.516'}
              fill={isSelected ? '#0199FE' : '#F1F1F1'}
              stroke={isSelected ? '#F3F3F3' : '#0199FE'}
              strokeWidth={isSelected ? '6' : '4'}
              onClick={() => onSelectElement(i)}></circle>
          );
        })}
        <text fill="#454249" fontFamily="SFProText-Regular, SF Pro Text" fontSize="11" fontWeight="normal" letterSpacing="0.458">
          <tspan x="424.634" y="470">
            LOGIC
          </tspan>
        </text>
        <text fill="#454249" fontFamily="SFProText-Regular, SF Pro Text" fontSize="11" fontWeight="normal" letterSpacing="0.458">
          <tspan x="534.932" y="193">
            EFFICIENCY
          </tspan>
        </text>
        <text fill="#454249" fontFamily="SFProText-Regular, SF Pro Text" fontSize="11" fontWeight="normal" letterSpacing="0.458">
          <tspan x="290.057" y="10">
            TCP
          </tspan>
        </text>
        <text fill="#454249" fontFamily="SFProText-Regular, SF Pro Text" fontSize="11" fontWeight="normal" letterSpacing="0.458">
          <tspan x="151.131" y="470">
            CODE
          </tspan>
        </text>
        <text fill="#454249" fontFamily="SFProText-Regular, SF Pro Text" fontSize="11" fontWeight="normal" letterSpacing="0.458">
          <tspan x="7.642" y="193">
            ACCURACY
          </tspan>
        </text>
      </g>
    </svg>
  );
};

export default AlpsEmements;
