export interface INavItem {
  title: string;
  href: string;
}

export type TNavItems = {
  mainNav: INavItem[];
  footerNav: INavItem[];
};

export type ISeoMeta = {
  title?: string;
  description?: string;
  twitterCard?: string;
  twitterHandle?: string;
};

export type ISiteConfig = {
  plausibleDataDomain?: string;
  seo: ISeoMeta;
};
