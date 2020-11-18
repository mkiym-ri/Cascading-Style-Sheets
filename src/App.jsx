import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Button, Card } from 'react-onsenui';
import Child from 'Child.jsx';
import Grandchild from 'Grandchild.jsx';
export default class App extends React.Component {
constructor(props) {
super(props);
this.state = {count: 0};
this.incrementCount = this.incrementCount.bind(this);
this.updateFromChild = this.updateFromChild.bind(this);
this.updateFromGrandchild = this.updateFromGrandchild.bind(this);
}
// this.state.countの値を１増やす
incrementCount() {
var state = this.state;
state.count += 1;
this.setState(state); // this.stateを更新
}
// Childから呼び出される関数
// value: 子から渡されるデータ
updateFromChild(value) {
var state = this.state;
state.count -= 1;
this.setState(state); // this.stateを更新
}

updateFromGrandchild(value){
  var state = this.state;
  state.count = 0;
  this.setState(state);
}


render() {
return (
<Card>
<div>App</div>
<div>カウント:{this.state.count}</div>
<Button modifier="large" onClick={this.incrementCount}>Up</Button>
{/* AppのcountとupdateFromChildを渡して、propsで参照できるようにする */}
<Child count={this.state.count} updateFromChild={this.updateFromChild} updateFromGrandchild={this.updateFromGrandchild}/>
</Card>
);
}
}