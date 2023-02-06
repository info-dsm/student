export interface LoadProps {
  status: boolean
}

export interface LoginState {
  email: string,
  password: string
}

export type LoginAction = 
  | { type: "email", email: string }
  | { type: "password", password: string }

export interface SignUpState {
  email: string,
  name: string,
  studentKey: string,
  password: string,
  password2: string,
  isSend: boolean,
  isVerify: boolean,
  code: string,
  github: string
}

export type SignUpAction =
  | { type: "name", name: string }
  | { type: "studentKey", studentKey: string }
  | { type: "email", email: string }
  | { type: "password", password: string }
  | { type: "password2", password: string }
  | { type: "send" }
  | { type: "verify" }
  | { type: "code", code: string } 
  | { type: "github", github: string }

export interface searchBarProps {
  url: string,
  placeholder: string,
};

export interface tags {
  id: string
}

export interface CompanyCardProps {
  title: string,
  desc: string,
  image?: string | null,
  tags: tags[]
}

export interface NoticeCardProps {
  title: string,
  company: string,
  address: string,
  image?: string | null,
  tags: tags[]
}

export interface SearchBarProps {
  url: string,
  placeholder: string
}
