const baseUrl ="https://anbo-restbookquerystring.azurewebsites.net/api/books"

Vue.CreateApp({
    data() {
        return {
            books: [],
        }
    },
    methods: {
        getAllBooks(){
            this.getAllBooks(baseUrl)
        },
        async getBooks(url){
            try {
                const response= await axios.get(url)
                this.books = response.data
            } catch (ex){
                alert(ex.message)
            }
        }
    },
}).mount('#app')
