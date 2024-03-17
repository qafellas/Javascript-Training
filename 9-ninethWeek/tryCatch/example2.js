try {
    JSON.parse({ name: "Orhan"})
}
catch (error) {
    console.log(`Error: ${error}`)
}
finally {
    console.log('This block gets executed always')
}