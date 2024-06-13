import { IconBaseProps, type IconType as ReactIconType } from "react-icons";
import {
  RiArrowDownSLine,
  RiArrowRightLine,
  RiArrowRightSLine,
  RiArrowRightUpLine,
  RiCheckLine,
  RiCircleFill,
  RiCloseLine,
  RiComputerLine,
  RiErrorWarningLine,
  RiInformationLine,
  RiMoonClearLine,
  RiSearchLine,
  RiSunLine,
  RiTwitterXLine,
} from "react-icons/ri";

export type Icon = ReactIconType;

export const Icons = {
  logo: (props: IconBaseProps) => (
    <svg
      width="400"
      height="400"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <rect width="400" height="400" rx="200" className="fill-current" />
      <g clipPath="url(#clip0_172_689)">
        <path
          d="M64.4093 266.672L168.704 206.457C151.614 181.663 126.054 179.436 108.368 189.647C91.9825 199.107 83.1005 212.554 85.2933 228.965L54.8632 246.534C48.1977 220.573 56.3169 185.383 92.2087 164.661C137.204 138.683 182.614 157.873 205.877 198.167C230.192 240.28 218.583 286.844 178.789 309.818C135.875 334.595 88.5644 315.117 64.4093 266.672ZM164.831 285.642C179.396 277.233 194.059 256.982 181.761 229.074L108.937 271.119C122.325 292.505 146.625 296.153 164.831 285.642Z"
          fill="white"
        />
        <path
          d="M335.591 133.328L231.297 193.542C248.387 218.337 273.947 220.564 291.633 210.353C308.018 200.893 316.9 187.446 314.707 171.035L345.137 153.466C351.803 179.427 343.684 214.616 307.792 235.339C262.797 261.316 217.387 242.127 194.123 201.833C169.809 159.72 181.418 113.156 221.211 90.1816C264.125 65.4051 311.436 84.8832 335.591 133.328ZM235.169 114.358C220.605 122.767 205.941 143.018 218.239 170.926L291.063 128.881C277.676 107.495 253.376 103.847 235.169 114.358Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_172_689">
          <rect width="316" height="169" fill="white" transform="translate(20.918 205.821) rotate(-30)" />
        </clipPath>
      </defs>
    </svg>
  ),
  github: (props: IconBaseProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"></path>
    </svg>
  ),
  google: (props: IconBaseProps) => (
    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clipPath="url(#clip0_402_1309)">
        <path
          d="M24.266 12.2763C24.266 11.4605 24.1999 10.6404 24.0588 9.83789H12.74V14.4589H19.2217C18.9528 15.9492 18.0885 17.2676 16.823 18.1054V21.1037H20.69C22.9608 19.0137 24.266 15.9272 24.266 12.2763Z"
          fill="#4285F4"
        />
        <path
          d="M12.74 24.0008C15.9764 24.0008 18.7058 22.9382 20.6944 21.1039L16.8274 18.1055C15.7516 18.8375 14.3626 19.252 12.7444 19.252C9.61376 19.252 6.95934 17.1399 6.00693 14.3003H2.01648V17.3912C4.05359 21.4434 8.20278 24.0008 12.74 24.0008Z"
          fill="#34A853"
        />
        <path
          d="M6.00253 14.3002C5.49987 12.8099 5.49987 11.196 6.00253 9.70569V6.61475H2.01649C0.31449 10.0055 0.31449 14.0004 2.01649 17.3912L6.00253 14.3002Z"
          fill="#FBBC04"
        />
        <path
          d="M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z"
          fill="#EA4335"
        />
      </g>
      <defs>
        <clipPath id="clip0_402_1309">
          <rect width="24" height="24" fill="white" transform="translate(0.5)" />
        </clipPath>
      </defs>
    </svg>
  ),
  twitter: RiTwitterXLine,
  check: RiCheckLine,
  chevronDown: RiArrowDownSLine,
  chevronRight: RiArrowRightSLine,
  circleFilled: RiCircleFill,
  close: RiCloseLine,
  moon: RiMoonClearLine,
  sun: RiSunLine,
  system: RiComputerLine,
  search: RiSearchLine,
  arrowRightUp: RiArrowRightUpLine,
  arrowRight: RiArrowRightLine,
  info: RiInformationLine,
  warning: RiErrorWarningLine,
};