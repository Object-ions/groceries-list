
let form = document.querySelector('form');
let items = [];

window.onload = function(){

    let form = document.querySelector('form');

    //hide the form when submit
    form.onsubmit = function(event){
        event.preventDefault();
        form.setAttribute('class','hidden');

        let item1 = document.getElementById('item1').value.toUpperCase();
        let item2 = document.getElementById('item2').value.toUpperCase();
        let item3 = document.getElementById('item3').value.toUpperCase();
        let item4 = document.getElementById('item4').value.toUpperCase();
        let item5 = document.getElementById('item5').value.toUpperCase();
        let item6 = document.getElementById('item6').value.toUpperCase();
        let item7 = document.getElementById('item7').value.toUpperCase();
        let item8 = document.getElementById('item8').value.toUpperCase();
        let item9 = document.getElementById('item9').value.toUpperCase();
        let item10 = document.getElementById('item10').value.toUpperCase();

        items = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10];
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