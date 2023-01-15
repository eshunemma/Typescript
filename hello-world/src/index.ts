 type Customer = {
    birthday?: Date
 }

 function getCustomer(id: number): Customer | null |undefined {
    // if id = 0, return null or return customer object with now birthday set to null
    return id === 0 ? null: {birthday: new Date()}
 }

 let customer = getCustomer(1)
 console.log(customer?.birthday?.getFullYear());
 