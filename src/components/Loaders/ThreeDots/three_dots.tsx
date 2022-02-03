import * as React from 'react';

interface ThreeDotsProps {
  type?: "linear" | "blink", 
  fill?: string,
  speed?: number,
}

const ThreeDotsLoader = ({
  type = "blink",
  fill = "black", 
  speed = 100,
  ...props
}: ThreeDotsProps ) => {

  if (type == "blink"){
    return (
      <svg width="120" height="30" xmlns="http://www.w3.org/2000/svg" fill="#000">
        <circle cx="15" cy="15" r="15">
          <animate attributeName="r"
                    begin="0s" dur="2s"
                    values="0;0;15;0;0;0" calcMode="linear"
                    repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="15" r="15">
          <animate attributeName="r"
                    begin="0.2s" dur="2s"
                    values="0;0;15;0;0;0" calcMode="linear"
                    repeatCount="indefinite"
          />
        </circle>
        <circle cx="85" cy="15" r="15">
          <animate attributeName="r"
                    begin="0.4s" dur="2s"
                    values="0;0;15;0;0;0" calcMode="linear"
                    repeatCount="indefinite"
          />
        </circle>
      </svg>
    )
  } else {
    return (
      <svg width="120" height="30" xmlns="http://www.w3.org/2000/svg" fill="#000">
        <circle cx="15" cy="15" r="15">
          <animate attributeName="fill-opacity" from="1" to="1"
                    begin="0s" dur="0.8s"
                    values="1;.5;.5" calcMode="linear"
                    repeatCount="indefinite"
          />
        </circle>
        <circle cx="50" cy="15" r="15">
          <animate attributeName="fill-opacity" from="1" to="1"
                    begin="0s" dur="0.8s"
                    values=".5;1;.5;0;0;0" calcMode="linear"
                    repeatCount="indefinite"
          />
        </circle>
        <circle cx="85" cy="15" r="15">
          <animate attributeName="fill-opacity" from="1" to="1"
                    begin="0s" dur="0.8s"
                    values=".5;.5;1;0;0;0" calcMode="linear"
                    repeatCount="indefinite"
          />
        </circle>
      </svg>
    )
  }
}

// ThreeDotsLoader.defaultProps = {
//   type: "blink",
//   fill: "black",
//   speed: 100,
// }

export { ThreeDotsLoader };