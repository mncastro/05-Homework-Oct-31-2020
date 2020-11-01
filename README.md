# 05 Work Day Scheduler

## Functions and logic

A simple calendar application that displays the current date and time and allows the user to inout taks in pre-designed time blocks. Based on the current time, the time blocks will display different colors depending on the point in time the user is currently in. Past is grey, present is red, and future is green. 

The application uses JQuery and the [Moment.js](https://momentjs.com/) library.


## Functionality

1. User can write tasks in each time block and save them using the SAVE button.

2. If the user closes the browser or refreshes the page, the tasks will still be there since they were stored locally.

3. The only way to overrride the tasks is erasing the input boxes and saving again.

4. The colors of the text area automatically change depending on the current time. The next time block will be shown in green and the present time block in red. All the remaining blocks will be grey. 

You can see the application's functionality in this GIF: 05-Homework-Oct-31-2020/Work Day Scheduler.gif
