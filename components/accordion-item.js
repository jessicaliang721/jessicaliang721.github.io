export const AccordionItem = {
    props: ['item'],
    template: `
                    <div class="accordion-item">
                    <h2 class="accordion-header" v-bind:id="item.id">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                v-bind:data-bs-target="'#collapse-' + item.id" aria-expanded="false"
                                v-bind:aria-controls="'collapse-' + item.id">
                            {{item.title}}
                        </button>
                    </h2>
                    <div v-bind:id="'collapse-' + item.id" class="accordion-collapse collapse" v-bind:aria-labelledby="item.id"
                         data-bs-parent="#faqAccordion">
                        <div class="accordion-body" v-html="item.body"></div>
                    </div>
                </div>
    `
}