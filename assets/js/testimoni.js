class testimonials {
    constructor(quote, image){
        this._quotes
        this._image
    }

    get quote() {
        return this._quotes
    }

    get image() {
        return this._image
    }

    get html() {
        return <div class="testimonials">
            <img src="${this.image}" class="profil-testimoni" />
            <p class="quote">"${this.quote}"</p>
            <p class="author">"${this.author}"</p>
        </div>
    }
}
 
class authorTestimoni extends testimonials {
    constructor(author,quote,image) {
        super(quote,image)
        this._author = author
    }
    get author() {
        return this._author
    }
}

class companyTestimoni extends testimonials {
    constructor(company, quote, image) {
        super(quote, image)
        this._company = company
    }

    get author() {
        return this._company + " company"
    }
}

const testimoni1 = new authorTestimoni("anandyo","mainnya hebat", "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")

const testimoni2 = new authorTestimoni("ananto","perhatikan map", "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")

const testimoni3 = new authorTestimoni("ronaldo","cetak hattrick", "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")

let testimonidata = [testimoni1, testimoni2, testimoni3]
let testimoniHTML = "";

for (let i = 0; i < testimonidata.length; i++) {
    testimoniHTML += testimonidata[i].html
}
document.getElementById("testimonials").innerHTML =testimoniHTML