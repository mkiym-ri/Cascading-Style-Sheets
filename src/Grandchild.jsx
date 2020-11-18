import React from 'react';
import ReactDOM from 'react-dom';
import { Card, Input ,Page,Button} from 'react-onsenui';
export default class Grandchild extends React.Component {
constructor(props) {
super(props);
this.updateInputText = this.updateInputText.bind(this);
}
updateInputText(event) {
this.props.updateFromGrandchild(this.props.count); // AppのupdateFromChildを呼び出す
}
render() {
return (
<Card>
<div>Grandchildコンポーネント</div>
<div className="content">
<div>カウント{this.props.count}</div>
<Button modifier="large" onClick={this.updateInputText}>Clear</Button>
</div>
</Card>
);
}
}