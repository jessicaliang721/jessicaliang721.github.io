export const TabBody = {
    props: ['tab', 'index'],
    template: `
        <div class="tab-pane fade"
            :class="{ show: index === 0, active: index === 0}"
            v-bind:id="tab.id"
            role="tabpanel"
            v-bind:aria-labelledby="'list-' + tab.id"
        >
            <div class="single-role" v-for="role in tab.roles">
                <p><strong>{{ role.position }}</strong></p>
                <p>{{ role.dates }}</p>
                <p>{{ role.location }}</p>
                <div v-html="role.body"></div>
            </div>
        </div>
    `
}