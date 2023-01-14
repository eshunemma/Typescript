// let employee: {
//     id: number,
//     name: string
// } = { id: 1, name: 'Mosh'}

// we can make name property by adding ? optional 
// let employee: {
//     id: number,
//     name?: string
// } = { id: 1}

// Read only modifier
// let employee: {
//     readonly id: number,
//     name: string
// } = { id: 1, name: 'Mosh'}

type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void
}

let employee: Employee ,{
} = {
     id: 1,
     name: 'Mosh',
     retire: (date: Date) => {
        console.log(date);
        
     }
    }