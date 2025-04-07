const baseUrl ="https://anbo-restbookquerystring.azurewebsites.net/api/books"

Vue.createApp({
    data() {
        return {
            books: [],
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
        }
    },
}).mount('#app')
