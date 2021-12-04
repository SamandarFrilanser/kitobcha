window.addEventListener('DOMContentLoaded',()=>{
    let page = document.querySelector('#num'),
    calcbtn = document.querySelector('.calc'),
    first_input = document.querySelector('.first_episode'),
    first_btn = document.querySelector('.first_btn'),
    second_input = document.querySelector('.second_episode'),
    second_btn = document.querySelector('.second_btn'),
    third_input = document.querySelector('.third_episode'),
    third_btn = document.querySelector('.third_episode'),
    printer = document.querySelector('.print');

    calcbtn.addEventListener('click',()=>{
        
        pages = +page.value
        pager(pages)
        function pager(pages)
        {
            if(pages % 4 != 0){
                let total_list = Math.ceil(pages / 4);
                pages += 4 - pages % 4;
                printer.textContent = `Printerga ${total_list} ta list soling:`;
            }
            
            var outer = [] ; 
            first_btn.addEventListener('click',()=>{
                var start  = 1 ; 
            var lst = pages;
            while(1){
                outer.push(lst)
                outer.push(start)
                lst -= 2
                start += 2
                if(start >= lst) break;
            }
               first_input.value =  outer.join(',');
               
            })
            second_btn.addEventListener('click',()=>{
                outer.length = 0;
            var start = 2;
            var lst = pages - 1;
            while(2){
                outer.push(lst)
                outer.push(start)
                start += 2;
                lst -= 2;
                if(start >= lst) break;
            }
            outer.reverse();
            second_input.value = outer.join(',');
            })
        } 
    });
}) 