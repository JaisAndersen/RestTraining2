const baseUrl ="https://anbo-restbookquerystring.azurewebsites.net/api/books"

Vue.createApp({
    data() {
        return {
            books: [],
            idToGetBy: -1,
            singleBook: null,
        }
    },
    methods: {
        getAllBooks(){
            this.getBooks(baseUrl);
        },
        async getBooks(url){
            try {
                const response= await axios.get(url);
                this.books = await response.data;
            } catch (ex){
                alert(ex.message);
            }
        },
        async getBookById(id){
            const url = baseUrl + "/" + id;
            try{
                const response = await axios.get(url);
                this.singleBook = await response.data;
            } catch (ex){
                alert(ex.message);
            }
        },
    },
}).mount('#app')
