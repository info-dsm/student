export interface searchBarProps {
  url: string,
  placeholder: string,
};

export interface CompanyCardProps {
  title: string,
  desc: string,
  image: string,
  tags: {name:string}[]
}

export interface NoticeCardProps {
  title: string,
  company: string,
  address: string,
  image: string,
  tags: object[]
}

export interface cardTag {
  name: string
}
