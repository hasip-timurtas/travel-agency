import { mapActions, mapGetters } from "vuex";

const Global = {
    install(Vue) {
        Vue.mixin({
            methods: {
                ...mapActions("common", ["setDialog", "setMenu", "setBtcPrice", "setSuccess", "setError", "setWarning"]),
            },
            computed: {
                ...mapGetters("common", ["getDialog", "dialogMessage", "dialogType", "selectedMenu", "btcPrice"]),
            }
        });
    }
};

export default Global;
