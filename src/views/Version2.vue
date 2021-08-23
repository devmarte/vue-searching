<template>
    <div class="about">
        <input
            type="text"
            id="search"
            @input="doInput"
            placeholder="아무거나검색"
            v-model="inputModel"
        />
        <h1>{{ usrUpperCase }}</h1>

        <ul class="list-container">
            <li
                v-for="(item, idx) in listArr"
                :key="idx"
                class="list-item"
                v-html="item"
                @click="pdfOn"
            ></li>
        </ul>
    </div>
</template>
<script>
import list from "../assets/data.json";
export default {
    data() {
        return {
            dummylist: list.data,
            partiList: [],
            inputModel: "",
            usrUpperCase: "",
            btnDown: "",
            word: [],
        };
    },
    mounted() {
        console.log("mounted!!");
        this.dummylist.forEach((item) => {
            let objItem = `<span>${item.boothNum} ${item.nameKor} ${
                item.nameEng ? item.nameEng : ""
            }</span></a>`;
            this.partiList.push(objItem);
        });
        // console.log(this.partiList);
    },
    computed: {
        listArr() {
            let returnList;
            if (this.usrUpperCase) {
                returnList = this.partiList.filter((item) => {
                    if (item.toUpperCase().includes(this.usrUpperCase.trim())) {
                        return item;
                    }
                });
                returnList.forEach((item, idx) => {
                    let letter = this.usrUpperCase.trim();
                    let regexAllCase = new RegExp(letter, "gi");
                    let replaced_item = item.replace(
                        regexAllCase,
                        `<strong style="color: #0008e8;">${this.inputModel.trim()}</strong>`
                    );
                    returnList[idx] = replaced_item;
                });
            } else {
                returnList = [...this.partiList];
            }
            return returnList;
        },
    },
    updated() {},
    methods: {
        doInput: function (e) {
            this.inputModel = e.target.value;
            this.usrUpperCase = this.inputModel.toUpperCase();
        },
        pdfOn: function () {
            console.log("pdf on");
        },
    },
};
</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.about {
    input {
        margin-bottom: 16px;
        border-radius: 4px;
        border: 1px solid #202824;
        padding: 0.8rem 1rem;
        font-size: 1.2rem;
        color: #252525;
    }

    ul {
        margin: 0 auto;
        margin-bottom: 24px;
        width: 760px;
        height: 400px;
        overflow-y: scroll;

        li.list-item {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0.2rem 0.4rem;
            text-align: left;
            border-bottom: 1px solid #efefef;
            cursor: pointer;
        }
    }
}
</style>