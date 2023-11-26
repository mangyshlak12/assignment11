new Vue({
    el: '#app' , 
    data: {
        cars: ['Banana' , 'Orange' , 'Apple' , 'Mango'],
        newItems:['Aimat' , 'Daulet' , 'Lashyn' , 'Banana' , 'Orange' , 'Apple' , 'Mango'] , 
        count: 0 
    },
    methods: {
        removeItem(index){
           this.cars.splice(index , 1) ; 
           console.log(index) ; 
        },
        addItem(){
            if (this.count >= this.newItems.length)
                this.count = 0 ; 
            this.cars.push(this.newItems[this.count]) ; 
            console.log(this.cars) ; 
            this.count++ ; 
        }
    }
})  