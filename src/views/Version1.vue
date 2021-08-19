<template>
    <div class="home">
        <input
            type="text"
            id="search"
            @input="filter"
            placeholder="아무거나검색"
            v-model="usrInput"
        />
        <div>
            <h1>{{ usrInput }}</h1>
            <lists />
        </div>
    </div>
</template>

<script>
import Lists from "../components/Lists.vue";
export default {
    name: "Home",
    components: { Lists },
    data() {
        return {
            usrInput: "",
        };
    },
    methods: {
        filter: function (e) {
            this.usrInput = e.target.value;
            this.filtered();
        },
        filtered: function () {
            let usrUpperCase = this.usrInput.toUpperCase();
            let item = document.getElementsByClassName("item");
            let name;
            for (let i = 0; i < item.length; i++) {
                name = item[i].getElementsByClassName("name");
                if (
                    name[0].innerHTML.toUpperCase().indexOf(usrUpperCase) > -1
                ) {
                    item[i].style.display = "block";
                } else {
                    item[i].style.display = "none";
                }
            }
        },
    },
    computed: {},
};
</script>
<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}
.home {
    input {
        margin-bottom: 16px;
        border-radius: 4px;
        border: 1px solid #202824;
        padding: 0.8rem 1rem;
        font-size: 1.2rem;
        color: #252525;
    }
}
</style>
