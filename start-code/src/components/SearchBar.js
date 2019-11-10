import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.state.term);
  };

  onInputChange = e => {
    console.log(e.target.value);
    this.setState({ term: e.target.value });
  };
  render() {
    return (
      <div className="" style={{ marginBottom: "2%" }}>
        <form onSubmit={this.onFormSubmit} className="" action="">
          <div className="ui input">
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder={this.props.placeholder}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
