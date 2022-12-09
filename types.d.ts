export interface INavItem {
  title: string;
  href: string;
}

export type TNavItems = {
  mainNav: INavItem[];
  footerNav: INavItem[];
};
