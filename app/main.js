const upvoteApp = {
    data() {
        return {
            submissions: Seed.submissions
        }
    },
    computed:{
        sortedSubmissions(){
            return this.submissions.sort((a,b) => b.votes - a.votes);
        }
    },
    methods: {
        upvote(id){
            this.submissions.find(x => x.id==id).votes+=1;
        },
        downvote(id){
            this.submissions.find(x => x.id==id).votes-=1;
        }
    }
};

Vue.createApp(upvoteApp).mount('#app');