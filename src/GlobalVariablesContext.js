// GlobalVariablesContext.js

// Define your global variables here
export const startDate = new Date('2024-02-13T15:00:00').getTime();
export const endDate = new Date('2024-03-13T07:30:00').getTime();
export const now = new Date().getTime();
export const progress =  Math.min(Math.max((now - startDate)/(endDate - startDate)*100,0),100);