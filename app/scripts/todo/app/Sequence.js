class Sequence {
  constructor() {
    this.seq = localStorage.getItem('sequence') - 0 || 0;
  }
  next() {
    this.seq = this.seq + 1;
    localStorage.setItem('sequence', this.seq);
    return this.seq;
  }
  current() {
    return this.seq
  }
}
export default new Sequence();
