export const TabHeader = {
    props: ['tab', 'index'],
    template: `
        <a class="list-group-item list-group-item-action"
            :class="{ show: index === 0, active: index === 0}"
            v-bind:id="'list-' + tab.id"
            data-bs-toggle="list"
            v-bind:href="'#' + tab.id"
            role="tab"
            v-bind:aria-controls="tab.id">
                {{ tab.title }}
        </a>
    `
}