export const CardWithLink = {
    props: ['work'],
    template: `
        <div class="col-sm-3">
            <div class="card">
                <img v-bind:src="work.image"
                     class="card-img-top" v-bind:alt="work.title">
                <div class="card-body">
                    <h5 class="card-title">{{ work.title }}</h5>
                    <h6>{{ work.date }}</h6>
                    <p class="card-text">{{ work.summary }}</p>
                    <a v-bind:href="work.link" class="btn btn-secondary" target="_blank" v-if="work.link">Visit website</a>
                </div>
            </div>
        </div>
    `
}