
new Vue({
    el:'#app' , 
    data: {
        name: '' , 
        email: '' , 
        password: '' ,
        message: '' , 
        show: false 
    } , 
    methods: {
        checkReg () {
            console.log(this.name)
            if (this.name.length == 0){
                this.message = 'Name can not be empty '
            }else if (!this.isValidateEmail(this.email)){
                this.message = 'Email is not validate'
            }else if (this.password.length < 8){
                this.message = 'Your password is too short'
            }else{
                this.show = true ; 
            }
        } , 
        isValidateEmail(email){
            return String(email)
            .toLowerCase()
            .match(
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        },
        accept(){
            alert('Registration is done succesfully ')
            this.name = '' , 
            this.email =  '' , 
            this.password =  '' ,
            this.message = '' , 
            this.show = false 
        }
    }
})