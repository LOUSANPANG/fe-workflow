export interface RouteType {
  title: string,
  path: string,
  stem?: string,
  icon?: string,
  children?: RouteType[]
}

export interface linkType {
  depth: number,
  id: string,
  text: string,
  children?: linkType[]
}
export interface tocType {
  title: string,
  depth: number,
  searchDepth: number,
  links: linkType[]
}
