var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;




let apiUsers = []
for (let i = 1; i <= 1000; i++) {
    apiUsers.push({id: i.toString(), name: "name" + i})
}


function parseUsers1(apiUsers) {
    return {
      items: apiUsers.reduce(
        (acc, user) => ({
          ...acc,
          [user.id]: user
        }),
        {}
      ),
      keys: apiUsers.map(user => user.id)
    }
}

function parseUsers2(apiUsers) {
    return apiUsers.reduce(
        (acc, user) => ({
            items: {
                ...acc.items,
                [user.id]: user,
            },
            keys: [ ...acc.keys, user.id ],
        }),
        {
            items: {},
            keys: []
        }
    )
}

function parseUsers3(apiUsers) {
    let acc = {items: {}, keys: []}
    for (let i = 0; i < apiUsers.length; i++) {
        acc.items[apiUsers[i].id] = apiUsers[i]
        acc.keys.push(apiUsers[i].id)
    }
    return acc
}

function parseUsers4(apiUsers) {
    let acc = {items: {}, keys: []}
    apiUsers.forEach(user => {
        acc.items[user.id] = user
        acc.keys.push(user.id)
    })
    return acc
}

function parseUsers5(apiUsers) {
    return {
        items: apiUsers.reduce(
          (acc, user) => {
            acc[user.id] = user
            return acc
          },
          {}
        ),
        keys: apiUsers.map(user => user.id)
    }
}

function parseUsers6(apiUsers) {
    return apiUsers.reduce(
        (acc, user) => {
            acc.items[user.id] = user
            acc.keys.push(user.id)
            return acc
        },
        {
            items: {},
            keys: []
        }
    )
}

console.log('Starting benchmark, please wait...')

// add tests
suite.add('parseUsers1(apiUsers)', function() {
  parseUsers1(apiUsers);
})
.add('parseUsers2(apiUsers)', function() {
  parseUsers2(apiUsers);
})
.add('parseUsers3(apiUsers)', function() {
  parseUsers3(apiUsers);
})
.add('parseUsers4(apiUsers)', function() {
  parseUsers4(apiUsers);
})
.add('parseUsers5(apiUsers)', function() {
  parseUsers5(apiUsers);
})
.add('parseUsers6(apiUsers)', function() {
  parseUsers6(apiUsers);
})

// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });

