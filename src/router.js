import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import OwnerEnter from './components/owner/Enter.vue'
import DriverEnter from './components/driver/Enter.vue'
import MobileVerify from './components/owner/Verify.vue'
import DriverVerify from './components/driver/Verify.vue'
import ReaciveCode from './components/owner/Code.vue'
import DriverReaciveCode from './components/driver/Code.vue'
import UserInfo from './components/owner/UserInfo.vue'
import DriverInfo from './components/driver/UserInfo.vue'
import NewOrder from './components/owner/NewOrder.vue'
import DriverNewOrder from './components/driver/NewOrder.vue'
import MyCargo from './components/driver/MyCargo.vue'
import CargoList from './components/driver/CargoList.vue'
import Orders from './components/owner/Orders.vue'
import Profile from './components/owner/Profile.vue'
import DriverProfile from './components/driver/Profile.vue'
import StepOne from './components/owner/StepOne.vue'
import StepTwo from './components/owner/StepTwo.vue'
import StepThree from './components/owner/StepThree.vue'
import OrderSuccess from './components/owner/OrderSuccess.vue'
import PersonalInfo from './components/owner/PersonalInfo.vue'
import CarInfo from './components/driver/CarInfo.vue'
import About from './components/owner/About.vue'
import Exit from './components/owner/Exit.vue'
import NotificationComp from './components/owner/NotificationComp.vue'

import DriverPersonalInfo from './components/driver/PersonalInfo.vue'
import DriverAbout from './components/driver/About.vue'
import DriverExit from './components/driver/Exit.vue'
import DriverNotificationComp from './components/driver/NotificationComp.vue'


const routes = [
    { path: "/", name: "home", component: Home },
    {
        path: '/owner/enter',
        name: 'OwnerEnter',
        component: OwnerEnter,

    },
    { path: '/owner/verify', name: 'MobileVerify', component: MobileVerify },
    { path: '/owner/code', name: 'ReaciveCode', component: ReaciveCode },
    { path: '/owner/info', name: 'UserInfo', component: UserInfo },
    {
        path: '/owner/new-order',
        name: 'NewOrder',
        component: NewOrder

    },
    { path: '/owner/new-order/step-one', name: 'StepOne', component: StepOne },
    { path: '/owner/new-order/step-two', name: 'StepTwo', component: StepTwo },
    { path: '/owner/new-order/step-three', name: 'StepThree', component: StepThree },
    { path: '/owner/new-order/success', name: 'OrderSuccess', component: OrderSuccess },
    { path: '/owner/orders', name: 'Orders', component: Orders },
    { path: '/owner/profile', name: 'Profile', component: Profile },
    { path: '/owner/profile/personal-info', name: 'PersonalInfo', component: PersonalInfo },

    { path: '/owner/profile/about', name: 'About', component: About },
    { path: '/owner/profile/exit', name: 'Exit', component: Exit },
    { path: '/owner/profile/notification', name: 'Notification', component: NotificationComp },






    {
        path: '/driver/enter',
        name: 'DriverEnter',
        component: DriverEnter,

    },
    { path: '/driver/verify', name: 'DriverVerify', component: DriverVerify },
    { path: '/driver/code', name: 'DriverReaciveCode', component: DriverReaciveCode },
    { path: '/driver/info', name: 'DriverInfo', component: DriverInfo },
    { path: '/driver/cargo-list', name: 'CargoList', component: CargoList },
    { path: '/driver/my-cargo', name: 'MyCargo', component: MyCargo },
    { path: '/driver/profile', name: 'DriverProfile', component: DriverProfile },
    { path: '/driver/profile/personal-info', name: 'DriverPersonalInfo', component: DriverPersonalInfo },
    { path: '/driver/profile/car-info', name: 'CarInfo', component: CarInfo },
    { path: '/driver/profile/about', name: 'DriverAbout', component: DriverAbout },
    { path: '/driver/profile/exit', name: 'DriverExit', component: DriverExit },
    { path: '/driver/profile/notification', name: 'DriverNotification', component: DriverNotificationComp },


    {
        path: '/driver/new-order',
        name: 'DriverNewOrder',
        component: DriverNewOrder

    },

]



const router = createRouter({
    history: createWebHistory(),
    routes
});


export default router;