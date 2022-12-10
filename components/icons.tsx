import type { IconType as KommyIcon } from "react-icons";
import {
  RiAlertLine,
  RiCheckLine,
  RiFireLine,
  RiInformationLine,
  RiLightbulbLine,
} from "react-icons/ri";

export type Icon = KommyIcon;

const Icons = {
  warning: RiAlertLine,
  danger: RiFireLine,
  info: RiInformationLine,
  tip: RiLightbulbLine,
  check: RiCheckLine,
};
export default Icons;
