
let form = document.querySelector('form');
let items = [];
let item

window.onload = function(){

    let form = document.querySelector('form');
    form.onsubmit = function(event){
        event.preventDefault();
        //hide the form when submit
        form.setAttribute('class','hidden');

        // 1. Initialize an empty array called "items".
        // 2. Start a loop that iterates from 1 to 10:
        //  a. Get the value of an element with the ID "itemX", where X is the current loop index.
        //  b. Convert the value to uppercase using the "toUpperCase" method.
        //  c. Add the uppercase value to the "items" array.
        // 3. Once the loop finishes, the "items" array will contain the uppercase values of the elements with IDs "item1" through "item10".

        for (let i = 1; i <= 10; i++) {
            item = document.getElementById(`item${i}`).value.toUpperCase();
            items.push(item);
        }

        // sort through the array from a-z
        items.sort();

        // make the title appear
        let h4 = document.getElementById('h4');
        h4.removeAttribute('class', 'hidden');

        // creating targeting and apennding to the html file
        let ul = document.createElement('ul');
        ul.setAttribute('id','groceries');
        document.body.appendChild(ul);

        // creating a loop to creat the li's inside the #groceries"
        items.forEach(function (item){
            //this array will create li's
            let  li = document.createElement('li')
            //will assign flavores into each element
            li.append(item);

            //append it to the HTML file
            document.getElementById('groceries').append(li);
        })

        
    };
};