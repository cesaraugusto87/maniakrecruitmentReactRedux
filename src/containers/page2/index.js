import React from 'react'
import { connect } from 'react-redux'
import { fetchContent, changeMonthlyRange,changeAnnualRange } from '../../actions'
import { bindActionCreators } from 'redux'
import './style.css'

class Calculator extends React.Component {

  constructor(props) {
    super(props);
    this.handleMonthlyRangeChange = this.handleMonthlyRangeChange.bind(this);
    this.handleAnnualRangeChange = this.handleAnnualRangeChange.bind(this);
  }

  componentDidMount() {
    this.props.fetchContent('page2.json')
  }

  handleMonthlyRangeChange (event) {
    this.props.changeMonthlyRange(event.target.value)
  }

  handleAnnualRangeChange (event) {
    this.props.changeAnnualRange(event.target.value)
  }

  render() {
    let { pageData, loading, monthlySpending,
          spendingRange, employeesRange } = this.props;

    let annualSavings = employeesRange * 1337 + parseFloat(monthlySpending);

    return pageData && pageData.calculator && loading === false ? <div>
    <div className={'titleSection'}>
      <h1>{pageData.calculator.title}</h1>
      <h4>{pageData.calculator.description}</h4>
    </div>
    <div className={'calculator'}>
      <div className={'spendingCalc'}>
        <div className={'leftSide'}>
          <p>Monthly</p>
            <p>ingredient spending</p>
        </div>
        <div className={'rightSide'}>
          <span className="input-symbol-dollar" />
          <input className={'spendingText'} type={'number'} value={spendingRange} disabled={true}/>
        </div>
      </div>
      <input type="range" className="custom-range" min="10" max="100" step="1" value={spendingRange} onChange={this.handleMonthlyRangeChange}/>
      <div className={'spendingCalc'}>
        <div className={'leftSide'}>
          <p>Full-time employees that
            process invoices</p>
        </div>
        <div className={'rightSide'}>
          <input className={'employeeProcessText'} type={'number'} value={employeesRange} disabled={true}/>
        </div>
      </div>
      <input type="range" className="custom-range" min="1" max="10" step="1" value={employeesRange} onChange={this.handleAnnualRangeChange}/>
      <div className={'leftSide'}>
        <h2>$ {parseFloat(Math.round(monthlySpending * 100) / 100).toFixed(2)}</h2>
        <p>Estimated cost food savings</p>
      </div>
      <div className={'rightSide'}>
        <h2>$ { parseFloat(Math.round(annualSavings * 100) / 100).toFixed(2) }</h2>
        <p>Your estimated annual savings</p>
      </div>
    </div>
  </div>: <div>Loading</div>
  }
}

const mapStateToProps = ({ reducer }) => ({
  pageData: reducer.pageData,
  loading: reducer.loading,
  spendingRange: reducer.spendingRange,
  employeesRange: reducer.employeesRange,
  monthlySpending: reducer.monthlySpending,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchContent,
      changeMonthlyRange,
      changeAnnualRange
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Calculator)
