import React, {Component} from 'react';
// import {render} from 'react-dom';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import Chip from 'material-ui/Chip';


const SortableItem = SortableElement(({value}) =>
  <li style={{listStyleType: 'none'}} ><Chip style={{margin: '4px', background: '#37D7DE'}}>{value}</Chip></li>
);

const SortableList = SortableContainer(({items}) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} value={value} />
      ))}
    </ul>
  );
});

class SortableComponent extends Component {
  state = {
    items: ["tough grader","gives good feedback","respected","get ready to read","participation matters","skip class? you won't pass."],
  };
  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex),
    });
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default SortableComponent