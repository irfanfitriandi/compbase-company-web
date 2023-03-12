import React from "react";
import { IconProps } from "../IconProps";

const LogoIcon = ({ primary, secondary, ...props }: IconProps) => {
  return (
    <svg
      viewBox="0 0 441 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M41.6667 8.33334H58.3333V29.1667H66.6667V37.5H58.3333V83.3333H75V45.8333H83.3333V83.3333H91.6667V91.6667H8.33334V83.3333H16.6667V33.3333H25V83.3333H50V16.6667H41.6667V8.33334ZM33.3333 25V16.6667H41.6667V25H33.3333ZM33.3333 25H25V33.3333H33.3333V25ZM75 45.8333H66.6667V37.5H75V45.8333ZM41.6667 41.6667H33.3333V50H41.6667V41.6667ZM33.3333 58.3333H41.6667V66.6667H33.3333V58.3333Z"
        fill={primary}
      />
      <path
        d="M102.88 49.472C103.648 45.0347 105.291 41.088 107.808 37.632C110.368 34.1333 113.525 31.424 117.28 29.504C121.035 27.5413 125.088 26.56 129.44 26.56C134.773 26.56 139.083 27.968 142.368 30.784C145.696 33.6 147.573 37.44 148 42.304H135.968C135.413 40.4693 134.389 39.0827 132.896 38.144C131.445 37.1627 129.653 36.672 127.52 36.672C124.149 36.672 121.227 37.8453 118.752 40.192C116.277 42.496 114.699 45.5893 114.016 49.472C113.803 50.6667 113.696 51.712 113.696 52.608C113.696 55.5947 114.528 57.9627 116.192 59.712C117.856 61.4613 120.139 62.336 123.04 62.336C125.131 62.336 127.072 61.8453 128.864 60.864C130.699 59.8827 132.235 58.4747 133.472 56.64H145.504C143.371 61.504 140.149 65.344 135.84 68.16C131.531 70.9333 126.709 72.32 121.376 72.32C117.536 72.32 114.187 71.5733 111.328 70.08C108.469 68.5867 106.272 66.4747 104.736 63.744C103.2 61.0133 102.432 57.8347 102.432 54.208C102.432 52.5867 102.581 51.008 102.88 49.472ZM157.454 72.512C154.382 72.512 151.651 71.8933 149.262 70.656C146.873 69.4187 145.017 67.6693 143.694 65.408C142.414 63.1467 141.774 60.5227 141.774 57.536C141.774 53.4827 142.734 49.792 144.654 46.464C146.574 43.136 149.219 40.5333 152.59 38.656C155.961 36.736 159.715 35.776 163.854 35.776C166.926 35.776 169.657 36.416 172.046 37.696C174.478 38.9333 176.355 40.6827 177.678 42.944C179.001 45.2053 179.662 47.8293 179.662 50.816C179.662 54.912 178.681 58.624 176.718 61.952C174.798 65.2373 172.131 67.8187 168.718 69.696C165.347 71.5733 161.593 72.512 157.454 72.512ZM158.99 63.104C160.782 63.104 162.382 62.5707 163.79 61.504C165.241 60.3947 166.35 58.9867 167.118 57.28C167.929 55.5307 168.334 53.7173 168.334 51.84C168.334 49.7067 167.758 48.064 166.606 46.912C165.454 45.76 164.003 45.184 162.254 45.184C160.419 45.184 158.798 45.7387 157.39 46.848C156.025 47.9147 154.958 49.3227 154.19 51.072C153.422 52.8213 153.038 54.656 153.038 56.576C153.038 58.6667 153.593 60.288 154.702 61.44C155.811 62.5493 157.241 63.104 158.99 63.104ZM225.532 35.904C229.372 35.904 232.359 36.928 234.492 38.976C236.668 40.9813 237.756 43.7973 237.756 47.424C237.756 48.5333 237.628 49.7707 237.372 51.136L233.66 72H222.78L226.236 52.608C226.321 52.1813 226.364 51.6053 226.364 50.88C226.364 49.088 225.852 47.7227 224.828 46.784C223.847 45.8453 222.46 45.376 220.668 45.376C218.535 45.376 216.743 46.016 215.292 47.296C213.841 48.5333 212.924 50.304 212.54 52.608L209.084 72H198.204L201.66 52.608C201.745 52.1813 201.788 51.6053 201.788 50.88C201.788 49.088 201.276 47.7227 200.252 46.784C199.271 45.8453 197.884 45.376 196.092 45.376C193.959 45.376 192.167 46.016 190.716 47.296C189.265 48.5333 188.348 50.304 187.964 52.608V52.288L184.508 72H173.564L179.836 36.288H190.78L190.012 40.832C191.377 39.296 193.02 38.1013 194.94 37.248C196.903 36.352 199.015 35.904 201.276 35.904C204.007 35.904 206.311 36.48 208.188 37.632C210.108 38.784 211.473 40.448 212.284 42.624C213.863 40.6187 215.825 38.9973 218.172 37.76C220.519 36.5227 222.972 35.904 225.532 35.904ZM249.314 41.344C250.679 39.68 252.386 38.336 254.434 37.312C256.525 36.288 258.829 35.776 261.346 35.776C265.186 35.776 268.279 37.0347 270.626 39.552C273.015 42.0693 274.21 45.4827 274.21 49.792C274.21 51.1147 274.082 52.544 273.826 54.08C273.186 57.7493 271.927 60.992 270.05 63.808C268.173 66.5813 265.911 68.736 263.266 70.272C260.621 71.7653 257.826 72.512 254.882 72.512C252.407 72.512 250.317 72 248.61 70.976C246.903 69.952 245.645 68.6293 244.834 67.008L240.93 89.024H229.986L239.266 36.288H250.21L249.314 41.344ZM262.754 54.08C262.882 53.3547 262.946 52.6933 262.946 52.096C262.946 49.9627 262.327 48.2987 261.09 47.104C259.895 45.9093 258.359 45.312 256.482 45.312C254.306 45.312 252.322 46.1013 250.53 47.68C248.738 49.2587 247.586 51.4133 247.074 54.144C246.946 54.912 246.882 55.616 246.882 56.256C246.882 58.3467 247.479 59.9893 248.674 61.184C249.869 62.3787 251.405 62.976 253.282 62.976C255.458 62.976 257.442 62.1867 259.234 60.608C261.069 58.9867 262.242 56.8107 262.754 54.08Z"
        fill={secondary}
      />
      <path
        d="M308.816 38.72C308.346 41.3653 307.258 43.5627 305.552 45.312C303.845 47.0613 301.797 48.2773 299.408 48.96C301.541 49.4293 303.226 50.4747 304.464 52.096C305.701 53.7173 306.32 55.616 306.32 57.792C306.32 58.4747 306.256 59.136 306.128 59.776C305.488 63.5307 303.653 66.5173 300.624 68.736C297.594 70.912 293.733 72 289.04 72H268.112L276.048 27.072H296.272C300.325 27.072 303.461 27.904 305.68 29.568C307.898 31.232 309.008 33.536 309.008 36.48C309.008 37.2053 308.944 37.952 308.816 38.72ZM290.896 45.312C292.73 45.312 294.202 44.9067 295.312 44.096C296.421 43.2853 297.104 42.112 297.36 40.576C297.402 40.32 297.424 39.9787 297.424 39.552C297.424 38.3147 297.018 37.376 296.208 36.736C295.397 36.0533 294.202 35.712 292.624 35.712H285.456L283.792 45.312H290.896ZM295.248 58.304C295.333 57.792 295.376 57.408 295.376 57.152C295.376 55.9147 294.928 54.9547 294.032 54.272C293.136 53.5467 291.898 53.184 290.32 53.184H282.384L280.592 63.296H288.656C290.533 63.296 292.026 62.8693 293.136 62.016C294.245 61.1627 294.949 59.9253 295.248 58.304ZM303.003 54.08C303.643 50.4107 304.902 47.1893 306.779 44.416C308.656 41.6427 310.918 39.5093 313.563 38.016C316.208 36.5227 319.003 35.776 321.947 35.776C324.464 35.776 326.576 36.288 328.283 37.312C329.99 38.336 331.227 39.68 331.995 41.344L332.891 36.288H343.835L337.499 72H326.555L327.515 66.944C326.15 68.608 324.422 69.952 322.331 70.976C320.24 72 317.936 72.512 315.419 72.512C312.902 72.512 310.662 71.936 308.699 70.784C306.779 69.632 305.286 68.0107 304.219 65.92C303.152 63.7867 302.619 61.2907 302.619 58.432C302.619 57.0667 302.747 55.616 303.003 54.08ZM329.755 54.144C329.883 53.376 329.947 52.672 329.947 52.032C329.947 49.9413 329.328 48.2987 328.091 47.104C326.896 45.9093 325.36 45.312 323.483 45.312C321.307 45.312 319.323 46.1013 317.531 47.68C315.739 49.216 314.608 51.3493 314.139 54.08C314.011 54.848 313.947 55.552 313.947 56.192C313.947 58.2827 314.544 59.9467 315.739 61.184C316.976 62.3787 318.512 62.976 320.347 62.976C322.523 62.976 324.507 62.1867 326.299 60.608C328.091 59.0293 329.243 56.8747 329.755 54.144ZM351.945 72.512C349.129 72.512 346.59 72.064 344.329 71.168C342.11 70.272 340.361 69.0347 339.081 67.456C337.801 65.8347 337.161 63.9787 337.161 61.888C337.161 61.5893 337.203 61.056 337.289 60.288H347.849C347.763 61.6107 348.147 62.6773 349.001 63.488C349.897 64.256 351.155 64.64 352.777 64.64C354.142 64.64 355.273 64.384 356.169 63.872C357.065 63.36 357.513 62.6347 357.513 61.696C357.513 60.8 357.022 60.096 356.041 59.584C355.102 59.0293 353.523 58.368 351.305 57.6C349.001 56.832 347.059 56.0853 345.481 55.36C343.945 54.592 342.622 53.504 341.513 52.096C340.403 50.688 339.849 48.9173 339.849 46.784C339.849 44.6933 340.467 42.816 341.705 41.152C342.942 39.4453 344.67 38.1227 346.889 37.184C349.15 36.2453 351.753 35.776 354.697 35.776C357.641 35.776 360.201 36.2667 362.377 37.248C364.553 38.1867 366.238 39.5093 367.433 41.216C368.627 42.9227 369.225 44.8427 369.225 46.976L369.161 47.936H359.241C359.326 46.656 358.942 45.632 358.089 44.864C357.235 44.096 356.019 43.712 354.441 43.712C353.203 43.712 352.179 43.968 351.369 44.48C350.601 44.992 350.217 45.696 350.217 46.592C350.217 47.5307 350.729 48.32 351.753 48.96C352.819 49.5573 354.462 50.24 356.681 51.008C358.985 51.776 360.883 52.544 362.377 53.312C363.913 54.0373 365.214 55.0827 366.281 56.448C367.39 57.7707 367.945 59.4347 367.945 61.44C367.945 63.744 367.241 65.728 365.833 67.392C364.467 69.056 362.569 70.336 360.137 71.232C357.747 72.0853 355.017 72.512 351.945 72.512ZM386.736 35.776C391.344 35.776 394.992 37.0347 397.68 39.552C400.411 42.0267 401.776 45.4187 401.776 49.728C401.776 51.136 401.669 52.3947 401.456 53.504C401.285 54.4853 401.029 55.5307 400.688 56.64H375.92C375.877 56.896 375.856 57.3013 375.856 57.856C375.856 59.7333 376.368 61.1627 377.392 62.144C378.416 63.1253 379.781 63.616 381.488 63.616C384.219 63.616 386.309 62.464 387.76 60.16H399.408C397.872 63.7867 395.376 66.752 391.92 69.056C388.464 71.36 384.581 72.512 380.272 72.512C375.664 72.512 371.973 71.232 369.2 68.672C366.469 66.112 365.104 62.6347 365.104 58.24C365.104 56.9173 365.232 55.552 365.488 54.144C366.128 50.432 367.451 47.1893 369.456 44.416C371.461 41.6427 373.957 39.5093 376.944 38.016C379.931 36.5227 383.195 35.776 386.736 35.776ZM390.704 51.072C390.789 50.4747 390.832 50.0693 390.832 49.856C390.832 48.1493 390.299 46.848 389.232 45.952C388.165 45.0133 386.757 44.544 385.008 44.544C383.131 44.544 381.467 45.12 380.016 46.272C378.608 47.3813 377.584 48.9813 376.944 51.072H390.704Z"
        fill={primary}
      />
    </svg>
  );
};

export default LogoIcon;
