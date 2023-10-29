import React, { Component } from "react";
import { connect } from "react-redux";

import TopBar from "./Header Containers/TopBar.js";
import Search from "./Header Containers/Search.js";
import FilmBody from "./Header Containers/FilmBody.js";

const mapStateToProps = (state) => {
  return {
    film: state.filmBody.filmBodyToRender,
  };
};

class Header extends Component {
  render() {
    return (
      <header>
        <TopBar film={this.props.film} />
        <section className="header-contents">
          {this.props.film ? <FilmBody film={this.props.film} /> : <Search />}
        </section>
      </header>
    );
  }
}

export default connect(mapStateToProps)(Header);
