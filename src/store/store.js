import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            verifyCode: [],
            userInfo: {
                name: '',
                nationalCode: ''
            },
            loading: {
                loadingPlace: '',
                loadingAddress: '',
                dischargePlace: '',
                dischargeAddress: '',
                recipientName: '',
                recipientMobile: '',

                loadType: '',
                packageType: '',
                weight: '',
                fleetType: '',
                fleetProperty: '',
                fleetNumber: '',

                bill: '',
                paymentType: '',
                currencyType: '',
                insurance: '',
                price: ''

            },

            filter: {
                filterLoadingPlace: '',
                filterDischargePlace: '',
                filterDate: '',
                filterCar: '',
                filterPrice: ''

            }


        }
    }

})

export default store;