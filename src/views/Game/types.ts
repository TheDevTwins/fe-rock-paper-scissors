export type Tab = {
  key: string; // Name of tab
  value: JSX.Element; // The tab
  icon: string; // Img source
};

// TabProvider

export type State = {
  tabs: Tab[];
  option: string;
};

export type Action = {
  option: string;
};
