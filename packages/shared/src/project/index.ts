import { uuid } from '../utils'

export interface IProject {
  name: string
  description: string
  pages: IPage[]
}

export interface IPage {
  name: string
  description: string
  elements: IElement[]
}

export interface IElement {
  mId: string
  mVersion: string
}

export class Project implements IProject {
  public static create(p?: IProject) {
    const project = new Project()
    if (p) {
      project.name = p.name
      project.description = p.description
      project.pages = p.pages
    }
    else {
      project.addPage(Page.create())
    }
    return project
  }

  name: string = 'new project'
  description: string = 'new project description'
  pages: IPage[]

  constructor() {
  }

  public addPage(page: IPage) {
    this.pages.push(page)
  }

  public removePage(page: IPage) {
    const index = this.pages.indexOf(page)
    if (index > -1) {
      this.pages.splice(index, 1)
    }
  }
}

export class Page implements IPage {
  public static create(p?: IPage) {
    const page = new Page()
    if (p) {
      page.name = p.name
      page.description = p.description
      page.elements = p.elements
    }
    else {
      page.addPageElement(PageElement.create())
    }
    return page
  }

  name: string = 'new page'
  description: string = 'new page description'
  elements: IElement[]

  constructor() {
  }

  public addPageElement(element: IElement) {
    this.elements.push(element)
  }

  public removePageElement(element: IElement) {
    const index = this.elements.indexOf(element)
    if (index > -1) {
      this.elements.splice(index, 1)
    }
  }
}

export class PageElement implements IElement {
  public static create(p?: IElement) {
    const element = new PageElement()
    if (p) {
      element.mId = p.mId
      element.mVersion = p.mVersion
    }
    return element
  }

  mId: string = uuid()
  mVersion: string = '1.0.0'

  constructor() {
  }
}
