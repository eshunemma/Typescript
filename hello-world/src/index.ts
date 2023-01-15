function greet(name: string | null) {
    if (name)
        console.log(`Kaabo ${name}`);
    else
        console.log('Hola')
}

greet(null)