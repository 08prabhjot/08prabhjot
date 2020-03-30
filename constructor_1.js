function Painting (title, artists,year) {
    this.title = title,
    this.artists = artists,
    this.year = year
  }
  
  function Gallery () {
    this.gallery = []
  }
  
  Gallery.prototype.addPainting = function (obj) {
    return this.gallery.push(obj)
  }
  
  Gallery.prototype.findByTitle = function (string) {
    for (let paint of this.gallery) {
      if (paint.title.toLowerCase().includes(string.toLowerCase())) {
        return paint
      }
    }
  }
  
  Gallery.prototype.list = function () {
    return this.gallery
  }
  
  const americanGothic = new Painting("American Gothic", ["Grant Wood"], 1930)
  
  const theLastSupper = new Painting("The Last Supper", ["Leonardo Da Vinci"], 1495)
  
  const americasMostWanted = new Painting("America's Most Wanted", ["Vitaly Komar", "Alexander Melamid"], 1993)
  
  const gal = new Gallery()
  
  gal.addPainting(americanGothic)
  gal.addPainting(theLastSupper)
  gal.addPainting(americasMostWanted)
  
  console.log(gal.findByTitle("supper"))
  console.log(gal.list())