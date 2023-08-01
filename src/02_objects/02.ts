type cityType = {
    title:string
    countryTitle:string
}
type addressType = {
    streetTitle:string
    city:cityType
}
type technologyType = {
    id:number
    title:string
}
type studentType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address:addressType
    technologies:Array<technologyType>
}

const student:studentType= {
    id : 1,
    name:'Dmitry',
    age:22,
    isActive:false,
    address:{
        streetTitle:'Vitebsky avenue',
        city:{
            title:'St. Petersburg',
            countryTitle:'Russia'
        }
    },
    technologies:[
        {
            id:1,
            title:'HTML'
        },
        {
            id:2,
            title:'CSS'
        },
        {
            id:3,
            title:'React'
        }
    ]
}