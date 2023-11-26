new Vue({
    el: '#app' , 
    data : {
        items: [
            {title:'do assignment 11 ' , isCompleted: false ,  line:'clear'} , 
            {title:'complete a algorithm project' , isCompleted: false , line:'clear'} , 
            {title:'complete a database project ' , isCompleted: false ,  line:'clear'} , 
            {title:'Learn vue js more' , isCompleted: false ,  line:'clear'} , 
            {title:'Make solution video for leetcode task ' , isCompleted: false , line:'clear'} , 
        ] 
    } , 
    methods : {
        complete (index) {
            this.items[index].isCompleted =  !this.items[index].isCompleted ; 
            if (this.items[index].isCompleted){
                this.items[index].line = 'line' ; 
            }else{
                this.items[index].line = 'clear' ; 
            }
        }
    }
})