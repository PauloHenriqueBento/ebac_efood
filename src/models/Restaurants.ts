class Restaurant {
  id: number
  title: string
  description: string
  category: string
  note: number
  image: string
  tag?: string

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    image: string,
    note: number,
    tag?: string
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.category = category
    this.image = image
    this.note = note
    this.tag = tag
  }
}

export default Restaurant
