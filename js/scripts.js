
let form = document.querySelector('form');
let items = [];
let item

window.onload = function(){

    let form = document.querySelector('form');

    //hide the form when submit
    form.onsubmit = function(event){
        event.preventDefault();
        form.setAttribute('class','hidden');

        for (let i = 1; i <= 10; i++) {
            item = document.getElementById(`item${i}`).value.toUpperCase();
            items.push(item);
        }

        items.push(item);
        items.sort();

        let h4 = document.getElementById('h4');
        
        
        h4.removeAttribute('class', 'hidden');

        //creating targeting and apennding to the html file
        let ul = document.createElement('ul');
        ul.setAttribute('id','groceries');
        document.body.appendChild(ul);

        //creating a loop to creat the li's inside the #groceries"
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