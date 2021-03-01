export const CardWithModal = {
    props: ['work'],
    template: `
        <div class="col-md">
            <div class="card">
                <img v-bind:src="work.image" class="card-img-top" v-bind:alt="work.title">
                <div class="card-body">
                    <h5 class="card-title">{{ work.title }}</h5>
                    <h6>{{ work.dates }}</h6>
                    <p class="card-text">{{ work.summary }}</p>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" v-bind:data-bs-target="'#' + work.id">
                        More details
                    </button>
                    <div class="modal fade" v-bind:id="work.id" tabindex="-1" v-bind:aria-labelledby="work.id"
                         aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" v-bind:id="work.id">{{ work.title }}</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    <img v-bind:src="work.image" class="img-fluid" v-bind:alt="work.title">
                                    <div v-html="work.body"></div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}