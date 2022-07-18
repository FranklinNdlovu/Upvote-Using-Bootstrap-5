const submissionComponent = {
    template: `
            <div class="d-flex align-items-centre">
                <div class="flex-shrink-0">
                    <img class="image is-64x64" v-bind:src="submission.submissionImage"
                        alt="Sample Image">
                </div>
                <div class="flex-grow-1 ms-3">
                    <h5>
                        <a v-bind:href="submission.url" class="text-primary">{{submission.title}}</a>
                        <small class="tag text-muted">#{{submission.id}}</small>
                    </h5>
                    <p>
                        {{submission.description}}
                        <br />
                    <div class="d-flex">
                        <small class="is-size-7 align-self-center">
                            Submitted by:
                        </small>
                        <img class=" ms-3 rounded-circle image is-24x24 align-self-center"
                            v-bind:src="submission.avatar" alt="">
                    </div>
                    </p>
                </div>
                <div class="flex-shrink-0">
                    <span class="icon is-small ">
                        <i class="row fa fa-chevron-up" @click="upvote(submission.id)"></i>
                        <strong class="row text-primary">{{submission.votes}}</strong>
                        <i class="row fa fa-chevron-down" @click="downvote(submission.id)"></i>
                    </span>
                </div>
            </div>
    `,
    props: ['submission', 'submissions'],
    methods: {
        upvote(id) {
            this.submissions.find(x => x.id == id).votes += 1;
        },
        downvote(id) {
            this.submissions.find(x => x.id == id).votes -= 1;
        }
    },
};

const upvoteApp = {
    data() {
        return {
            submissions: Seed.submissions
        }
    },
    computed: {
        sortedSubmissions() {
            return this.submissions.sort((a, b) => b.votes - a.votes);
        }
    },
    
    components:{
        "submission-component": submissionComponent
    }
};

Vue.createApp(upvoteApp).mount('#app');