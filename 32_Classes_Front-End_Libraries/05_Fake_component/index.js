// TODO: define the class
class Home extends FakeComponent {
  render() {
    return '<h1>Welcome home!</h1>';
  }

  afterFirstRender() {
    console.log('After first render');
  }
}

// TODO: instantiate the class
const newHome = new Home();
