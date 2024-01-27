export default class Matrix {
  rows: number

  cols: number

  buffer: any[]

  constructor(rows: number, cols: number) {
    this.rows = rows
    this.cols = cols
    this.buffer = Array(cols * rows)
  }

  #getIndex(row: number, col: number) {
    return row * this.cols + col
  }

  get(row: number, col: number) {
    return this.buffer[this.#getIndex(row, col)]
  }

  set(row: number, col: number, value: any) {
    this.buffer[this.#getIndex(row, col)] = value
  }
}
