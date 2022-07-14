const cancelOrders = [{
        id: 1,
        dayOfWeek: "پنجشنبه",
        date: "1400/12/24",
        detail: "این سفر در بعد از ظهر انجام شد",
        from: "تهران",
        to: "شیراز",
        cast: "3,000,000",
        billType: "نقدی",
    },
    {
        id: 2,
        dayOfWeek: "سه شنبه",
        date: "1400/12/20",
        detail: "",
        from: "تهران",
        to: "اراک",
        cast: "2,000,000",
        billType: "نقدی",
    },
    {
        id: 3,
        dayOfWeek: "دو شنبه",
        date: "1400/12/19",
        detail: "",
        from: "تهران",
        to: "اصفهان",
        cast: "2,500,000",
        billType: "نقدی",
    },
];
const waitingOrders = [{
        id: 1,
        dayOfWeek: "سه شنبه",
        date: "1400/12/11",
        detail: "این سفر در بعد از ظهر انجام شد",
        from: "اراک",
        to: "قزوین",
        cast: "1,500,000",
        billType: "نقدی",
    },
    {
        id: 2,
        dayOfWeek: "یکشنبه",
        date: "1400/12/09",
        detail: "",
        from: "سمنان",
        to: "ورامین",
        cast: "2,500,000",
        billType: "نقدی",
    },
    {
        id: 3,
        dayOfWeek: "دو شنبه",
        date: "1400/12/19",
        detail: "",
        from: "تهران",
        to: "اصفهان",
        cast: "2,500,000",
        billType: "نقدی",
    },
];
const completedOrders = [{
        id: 1,
        dayOfWeek: "جمعه",
        date: "1400/12/11",
        detail: "این سفر در بعد از ظهر انجام شد",
        from: "ابهر",
        to: "مشهد",
        cast: "3,500,000",
        billType: "نقدی",
    },
    {
        id: 2,
        dayOfWeek: "دوشنبه",
        date: "1400/12/15",
        detail: "",
        from: "لاهیجان",
        to: "خرمشهر",
        cast: "2,570,000",
        billType: "نقدی",
    },
    {
        id: 3,
        dayOfWeek: "دو شنبه",
        date: "1400/12/19",
        detail: "",
        from: "تهران",
        to: "اصفهان",
        cast: "2,500,000",
        billType: "نقدی",
    },
];


const currentCargos = [{
        id: 1,
        dayOfWeek: "جمعه",
        date: "1400/12/11",
        detail: "این سفر در بعد از ظهر انجام شد",
        from: "شکرناب",
        to: "مشهد",
        cast: "3,500,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"
    },
    {
        id: 2,
        dayOfWeek: "دوشنبه",
        date: "1400/12/15",
        detail: "",
        from: "لاهیجان",
        to: "خرمشهر",
        cast: "2,570,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"
    },
    {
        id: 3,
        dayOfWeek: "دو شنبه",
        date: "1400/12/19",
        detail: "",
        from: "تهران",
        to: "اصفهان",
        cast: "2,500,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"
    },
];

const previousCargos = [{
        id: 1,
        dayOfWeek: "شنبه",
        date: "1400/12/18",
        detail: "این سفر در بعد از ظهر انجام شد",
        from: "انجیلاق",
        to: "مشهد",
        cast: "3,500,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"

    },
    {
        id: 2,
        dayOfWeek: "دوشنبه",
        date: "1400/12/15",
        detail: "",
        from: "لاهیجان",
        to: "خرمشهر",
        cast: "2,570,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"
    },
    {
        id: 3,
        dayOfWeek: "دو شنبه",
        date: "1400/12/19",
        detail: "",
        from: "تهران",
        to: "اصفهان",
        cast: "2,500,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"
    },
];
const activeCargos = [{
        id: 1,
        dayOfWeek: "شنبه",
        date: "1400/12/18",
        detail: "این سفر در بعد از ظهر انجام شد",
        from: "آذربایجان شرقی",
        to: "اردبیل",
        cast: "3,500,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"

    },
    {
        id: 2,
        dayOfWeek: "دوشنبه",
        date: "1400/12/15",
        detail: "",
        from: "آذربایجان شرقی",
        to: "البرز",
        cast: "2,570,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"
    },
    {
        id: 3,
        dayOfWeek: "دو شنبه",
        date: "1400/12/19",
        detail: "",
        from: "تهران",
        to: "اصفهان",
        cast: "2,500,000",
        billType: "نقدی",
        carType: "کامیونت",
        cargoType: "آرایشی بهداشتی",
        weight: "100"
    },
];

const cities = [
    'آذربایجان شرقی',
    'آذربایجان غربی',
    'اردبیل',
    'اصفهان',
    'البرز',
    'ایلام',
    'بوشهر',
    'تهران',
    'چهارمحال و بختیاری',
    'خراسان جنوبی',
    'خراسان رضوی',
    'خراسان شمالی',
    'خوزستان',
    'زنجان',
    'سمنان',
    'سیستان و بلوچستان',
    'فارس',
    'قزوین',
    'قم',
    'کردستان',
    'کرمان',
    'کرمانشاه',
    'کهگیلویه و بویراحمد',
    'گلستان',
    'گیلان',
    'لرستان',
    'مازندران',
    'مرکزی',
    'هرمزگان',
    'همدان',
    'یزد',


];

const cars = [{
        id: 1,
        name: 'خاور'
    },
    {
        id: 2,
        name: 'نیسان'
    },
    {
        id: 3,
        name: 'تریلر'
    },
    {
        id: 4,
        name: 'موتور'
    },

];

const carProperty = [{
        id: 1,
        name: 'کمپرسی'
    },
    {
        id: 1,
        name: 'ساده'
    },



];

const userinfo = {
    name: 'پریسا',
    family: 'حسینی',
    nationalCode: '0078473878',
    mobile: '09199655424',
};

const carInfo = {
    carId: 3,
    carPropertyId: 1,
    length: 2.5,
    height: 1.2,
    number: '28 الف 411',
};


const notifications = [

    'بار شما پذیرفته شد',
    'صاحب بار، بار را تحویل گرفته است',
    'بار جاری را لغو کرده اید'
]

;



export {
    completedOrders,
    waitingOrders,
    cancelOrders,
    cities,
    cars,
    userinfo,
    notifications,
    currentCargos,
    previousCargos,
    activeCargos,
    carProperty,
    carInfo

}