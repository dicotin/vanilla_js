
export type streetType = {
    title:string
}
export type addressType = {
    number?: number
    street:streetType
}
export type houseType = {
    buildedAt:number
    repaired:boolean
    address:addressType
}
export type GovernmentBuildingType = {
    type:"HOSPITAL"|"FIRE-STATION"
    budget:number
    staffCount:number
    address:addressType
}
export type cityType = {
    title:string
    houses:Array<houseType>
    governmentBuildings:Array<GovernmentBuildingType>
    citizensNumber:number
}