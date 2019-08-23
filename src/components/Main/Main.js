import React, { Component } from "react";
import styled from "styled-components";

import NavFilter from "../NavFilter/NavFilter";
import Date from "../Date/Date";
import Article from "../Article/Article";
import { dummyData } from "../../dummyData";

export default class Main extends Component {
  state = {
    filteredYear: null,
    filteredMonth: null
  };
  changeStateForYear = value => {
    this.setState({ filteredYear: value });
  };
  changeStateForMonth = value => {
    this.setState({ filteredMonth: value });
  };
  
  filteredDate = () => {
    if (this.state.filteredMonth || this.state.filteredYear) {
      return dummyData.filter((item, id) => {
        return item.month === this.state.filteredMonth || item.year === this.state.filteredYear 
      })
    }
    if (this.state.filteredMonth && this.state.filteredYear) {
      return dummyData.filter((item, id) => {
        return item.month === this.state.filteredMonth && item.year === this.state.filteredYear 
      })
    }
    return dummyData;
  };

  render() {
    const filteredArray = this.filteredDate();
    return (
      <>
        <NavFilter 
          changeMonth={this.changeStateForMonth}
          changeYear={this.changeStateForYear}
        />
        {filteredArray.map((item, id) => {
          return (
            <ComponentWrapper key={id}>
              <Date month={item.month} year={item.year} />
              <Article
                title={item.title}
                articleDay={item.day}
                articleMonth={item.month}
                text={item.text}
                images={item.slides}
              />
            </ComponentWrapper>
          );
        })}
      </>
    )
  }
};

// filteredData = () => {
// if (filteredMonth || filteredYear) {
//   return dummyData.filter((item) => {
//     return item.monts === filteredMonth ||
//   })
// }
// }
// const fil = filteredData() - далее мапом проходим по fil и отрисовываем два компонента

const ComponentWrapper = styled.div`
  border-top: 2px solid black;
  display: flex;
  flex-direction: column;
 
`;
