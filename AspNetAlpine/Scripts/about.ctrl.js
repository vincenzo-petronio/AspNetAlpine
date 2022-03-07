function commentsCtrl() {
    return {
        comments: [],
        showDetails: false,
        selectedComment: {},
        query: '',

        setList: async function () {
            return fetch('https://jsonplaceholder.typicode.com/comments')
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((response) => {
                    console.log(response);
                    this.comments = response;
                })
                .catch((ex) => {
                    console.log(ex);
                });
        },

        setSelectedComment: async function (id) {
            return fetch('https://jsonplaceholder.typicode.com/comments/' + id)
                .then((response) => {
                    console.log(response);
                    return response.json();
                })
                .then((response) => {
                    console.log(response);
                    this.selectedComment = response;
                })
                .catch((ex) => {
                    console.log(ex);
                });
        },

        showDetailsPanel: async function (id) {
            console.log(id);
            this.showDetails = true;
            await this.setSelectedComment(id);
        },

        init() {
            this.$watch('query', (query) => {
                this.comments = this.comments.filter(c => c.name.includes(query));
            })
        }
    }
}