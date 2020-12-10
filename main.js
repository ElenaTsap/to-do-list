let toDoList = [
    {
        dueDate: `10.12.2020`,
        activity: 'Attend class',
        done: 'no'
    },
    {
        dueDate: `10.12.2020`,
        activity: 'Call a friend',
        done: 'no'
    }, 
    {
        dueDate: `12.12.2020`,
        activity: 'Go for a date',
        done: 'yes'
    }
]


let allItemsString = '';

function addItem(dueDate, activity, done) {
    dueDate = prompt('When is your task due (dd.mm.yyyy)?');
    activity = prompt('What is the activity?');
    done = prompt('Is it already done (y/n)?');

    toDoList.push({dueDate, activity, done});

    alert('You just added this new task: \nTask No.' + toDoList.length +'\nDue date: ' + dueDate +'\nActivity: ' + activity +'\nIs it done?: ' + done); 
}

function showAllList() {
    allItems();
    alert ('My TODO list:\n' + allItemsString);
}

function filterByDate() {
    let dateList = '';
    let askDate = prompt('Please enter the date that you would like to check (dd.mm.yyyy)');

    for (const keys in toDoList) {
        if (askDate == toDoList[keys].dueDate) {
            dateList += ('Task No.' + (parseInt(keys)+1) +'\nActivity: '+ toDoList[keys].activity +'\nIs it done?: ' + toDoList[keys].done + '\n\n')
        }
    }
    alert ('The tasks for ' + askDate + ' are:\n\n' + dateList);
}

function allItems() {
    
    allItemsString = '';
    for (const keys in toDoList) {
            allItemsString += ('Task No.' + (parseInt(keys)+1) +'\nActivity: '+ toDoList[keys].dueDate +'\nActivity: '+ toDoList[keys].activity +'\nIs it done?: ' + toDoList[keys].done + '\n\n')
    }
    return allItemsString;
}

function changeStatus() {
    allItems();

    let statusPicker = prompt('Please type the Task No. you wish to change the status of:\n' + allItemsString);

    for (const keys in toDoList) {
        if (statusPicker == (parseInt(keys)+1)){    
            // alert(toDoList[keys].activity);
            let changeStatus = prompt('The status is: '+ toDoList[keys].done + '. Would you like to change it? y/n').toLowerCase();
            if (changeStatus == 'y') {
                if (toDoList[keys].done == 'yes'){
                    toDoList[keys].done = 'no'
                } else {
                    toDoList[keys].done = 'yes'
                }
                allItems();
                alert ('Status changed: ' + allItemsString);
            } else if (changeStatus == 'n') {
                break;
            } else {
                alert('This is not a valid value');
            }
        }
        
    }
}

function deleteItem() {
    allItems();

    let itemPicker = prompt('Please type the Task No. you wish to delete:\n' + allItemsString);

    for (const keys in toDoList) {
        if (itemPicker == (parseInt(keys)+1)) {
            toDoList.splice (keys, 1);
        }
    }

    allItems();
    alert ('Status changed:\n' + allItemsString);

}


let userAction = parseInt(prompt (
    `Choose a task:
    1. Add a new item
    2. Show all list
    3. Show list for a date 
    4. Change status of any item
    5. Delete some Item
    6. Quit`));

while (userAction !== 6){

    switch (userAction) {
        case 1: 
            addItem();
            break;
        case 2: 
            showAllList();
            break;
        case 3: 
            filterByDate();
            break;
        case 4: 
            changeStatus();
            break;
        case 5: 
            deleteItem();
            break;
        default:
            alert('Please choose a correct number!')
    }

    userAction = parseInt(prompt (
        `Choose a task:
        1. Add a new item
        2. Show all list
        3. Show list for a date 
        4. Change status of any item
        5. Delete some Item
        6. Quit`));
}

alert('Bye Bye!');
