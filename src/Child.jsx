import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input ,Page,Button} from 'react-onsenui';
import Grandchild from 'Grandchild.jsx';
export default class Child extends React.Component {
constructor(props) {
super(props);
this.updateCountChild = this.updateCountChild.bind(this);
this.updateCountGrand = this.updateCountGrand.bind(this);
this.updateFromGrandchild= this.updateFromGrandchild.bind(this);
}
updateCountChild(event) {
this.props.updateFromChild(this.props.count); // AppのupdateFromChildを呼び出す
}
updateFromGrandchild(event){
  this.props.updateFromGrandchild(this.props.count);
}

render() {
return (
<Card>
<div className="title">Childコンポーネント</div>
<div className="content">
<div>カウント{this.props.count}</div>
<Button modifier="large" onClick={this.updateCountChild}>Down</Button>
<Grandchild count={this.props.count} updateFromGrandchild={this.updateCountGrand}/>
</div>
</Card>
);
}
}