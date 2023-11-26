new Vue({
    el: '#app' , 
    data : {
        username: 'Miras'
    } , 
    methods: {
        setName(username){
            this.username = username ; 
        } , 
        setDefault(){
            this.username = 'Miras' ;
        }
    }
})