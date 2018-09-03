const initialState = {
    houseList: [],
    value: '',
    name: '',
    address: '',
    city: '',
    stateName: '',
    zip: 0,
    imgUrl: '',
    monthlyMortgage: 0,
    desiredRent: 0
}

const GET_HOUSE_LIST = "GET_HOUSE_LIST";
const HANDLE_CHANGE_NAME = "HANDLE_CHANGE_NAME";
const HANDLE_CHANGE_ADDRESS = "HANDLE_CHANGE_ADDRESS";
const HANDLE_CHANGE_CITY = "HANDLE_CHANGE_CITY";
const HANDLE_CHANGE_STATENAME = "HANDLE_CHANGE_STATENAME";
const HANDLE_CHANGE_ZIP = "HANDLE_CHANGE_ZIP";
const HANDLE_CHANGE_IMGURL = "HANDLE_CHANGE_IMGURL";
const HANDLE_MONTHLY_MORTGAGE = "HANDLE_MONTHLY_MORTGAGE";
const HANDLE_DESIRED_RENT = "HANDLE_DESIRED_RENT";

// const HANDLE_CHANGE_IMGURL = "HANDLE_CHANGE_IMGURL";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_HOUSE_LIST:
            return {...state, houseList: action.payload}
        
        case HANDLE_CHANGE_NAME:
            return {...state, name: action.payload}
        
        case HANDLE_CHANGE_ADDRESS:
            return {...state, address: action.payload}

        case HANDLE_CHANGE_CITY:
            return {...state, city: action.payload}
        
        case HANDLE_CHANGE_STATENAME:
            return {...state, stateName: action.payload}

        case HANDLE_CHANGE_ZIP:
            return {...state, zip: action.payload}
        
        case HANDLE_CHANGE_IMGURL:
            return {...state, imgUrl: action.payload}

        case HANDLE_MONTHLY_MORTGAGE:
            return {...state, monthlyMortgage: action.payload}

        case HANDLE_DESIRED_RENT:
            return {...state, desiredRent: action.payload}

        default:
            return {...state}
    }
}

export function getHouseList(houseList) {
    return {
        type: GET_HOUSE_LIST,
        payload: houseList
    }
}

export function handleChangeName(name) {
    return {
        type: HANDLE_CHANGE_NAME,
        payload: name
    }
}

export function handleChangeAddress(address) {
    return {
        type: HANDLE_CHANGE_ADDRESS,
        payload: address
    }
}

export function handleChangeCity(city) {
    return {
        type: HANDLE_CHANGE_CITY,
        payload: city
    }
}

export function handleChangeStateName(stateName) {
    return {
        type: HANDLE_CHANGE_STATENAME,
        payload: stateName
    }
}

export function handleChangeZip(zip) {
    return {
        type: HANDLE_CHANGE_ZIP,
        payload: zip
    }
}

export function handleChangeImgUrl(imgUrl) {
    return {
        type: HANDLE_CHANGE_IMGURL,
        payload: imgUrl
    }
}

export function handleMonthlyMortgage(monthlyMortgage) {
    return {
        type: HANDLE_MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    }
}

export function handleDesiredRent(desiredRent) {
    return {
        type: HANDLE_DESIRED_RENT,
        payload: desiredRent
    }
}
