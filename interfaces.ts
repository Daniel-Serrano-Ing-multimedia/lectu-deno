export interface Person{
  _id: string
  firstname: string
  lastname: string
  birthDate: string
  projects:Array<Project>
}

export interface Project {
  _id: string
  title: String
  collaborators: Array<Person>
  type :string
}

export interface User extends Person{
  
  username: string
  password: string
  createdAt: string
  active:boolean
}

export interface Media {
  _id: string
  title: string
  aleternativeTitles:Array<string>
  createdAt: string
  type: string
  authors: Array<Person>
  finished: boolean
  dropped: boolean
  paused: boolean
  illustrator: Person
  Author: Person
}

export interface Manga extends Media {
  volumes: number
  chapters:Array<Chapter>
}

export interface Chapter {
  _id: string
  number: number
  pages:Array<Page>
}

export interface Page{
  _id: string
  source: {
    url: string
    alt: string
    type:string
  }
} 

export interface DB_Request {
  method:string
  headers: any
  body:string
}

export interface RequestBody{
  collection: string
  database: string
  dataSource: string
  document :any
}