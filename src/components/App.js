import React from 'react';

// function* testing() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

function* testing() {
  // under the hood redux saga are all running while true. so the fourth console.log will be 1 again
  while(true) {
    yield 1;
    yield 2;
    yield 3;
  }
}

class App extends React.Component {
  render() {
    const iterator = testing();
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());

    return (
      <div>Test</div>
    );
  }
}

export default App;
