import React from "react";
import ReactChipInput from "react-chip-input";

class Chip extends React.Component {
  state = {
    chips: [],
  };
  addChip = (value) => {
    const chips = this.state.chips.slice();
    chips.push(value);
    this.setState({ chips });
  };
  removeChip = (index) => {
    const chips = this.state.chips.slice();
    chips.splice(index, 1);
    this.setState({ chips });
  };
  render() {
    return (
      <ReactChipInput
        // class="btn btn-outline-light"
        class="class1 class2"
        chips={this.state.chips}
        onSubmit={(value) => this.addChip(value)}
        onRemove={(index) => this.removeChip(index)}
      />
    );
  }
}
export default Chip;
