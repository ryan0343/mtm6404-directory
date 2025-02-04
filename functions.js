// 1. Failed, because I made changes to the README.

// 2. list function
// input: array of clients
// output: HTML string. Each client in the array will have the following template:

// <!-- List Item Template -->
// <li class="list-group-item d-flex justify-content-between" data-index="<!-- Replace with client's index -->">
//   <!-- Replace with client's name -->
//   <strong>$ <!-- Replace with client's balance--></strong>
// </li>

// Guide: use the map() method with an arrow function

const list = (clients) => {

    return clients.map(client => `
        <li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            ${client.name}
            <strong>$ ${client.balance}</strong>
         </li>
        `
    ).join('')
}

// 3. order function
// input: array of clients, string of a property
// output: array of clients sorted by a specific property.
// guide: sort() method should be used

const order = (clients, property) => {
    return clients.sort((a, b) => {
        if (a[property] < b[property]) {
            return -1
        } else if (a[property] > b[property]) {
            return 1
        } else {
            return 0
        }
    })
}

// 4. total function
// input: array of clients
// output: a number (the sum of the balances from each client)
// guide: reduce() method should be used.

// since it's the only thing we're doing in the function, we can straight up return the reduce function and increment on each item's balance value
const total = (clients) => clients.reduce((accumulator, client) => {
    return accumulator + client.balance
  }, 0)

// 5. info function
// input: one number
// output: object containing matching client's information
// guide: find() method should be used

const info = (query) =>
    clients.find(client => client.index === query)

// 6. search function
// input: string containing search query
// output: array of clients containing query in their name
// guide: filter() method should be used, in addition to using the toLowerCase() method on the query and the client's name.

const search = (query) => 
    clients.filter(client => 
        client.name.toLowerCase().includes(query.toLowerCase())
    )