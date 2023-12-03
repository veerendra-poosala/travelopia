export interface menuItemsType {
  DESTINATIONS: string
  ACTIVITIES: string
  WAYS_TO_TRAVEL: string
  OFFERS: string
  LATE_GATEAWAYS: string
  SUSTAINABLE_TRAVEL: string
}

export interface menuItemType{
  value: string
  path?: string
}

export const menuItems: menuItemType[] = [
  {
   value : 'Destinations',
   path : '/t2/destinations'
  },
  {
    value : 'Activities',
    path : '/t2/activities'
   },
   {
    value : 'Ways to Travel',
    path : '/t2/waystotravel'
   },
   {
    value : 'Offers',
    path : '/t2/offers'
   },
   {
    value : 'Late Getaways',
    path : '/t2/lategetaways'
   },
   {
    value : 'Sustainable Travel',
    path : '/t2/sustainabletravel'
  }
   
]



