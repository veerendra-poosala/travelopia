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
   path : '/destinations'
  },
  {
    value : 'Activities',
    path : '#'
   },
   {
    value : 'Ways to Travel',
    path : '#'
   },
   {
    value : 'Offers',
    path : '#'
   },
   {
    value : 'Late Getaways',
    path : '#'
   },
   {
    value : 'Sustainable Travel',
    path : '#'
  }
   
]



