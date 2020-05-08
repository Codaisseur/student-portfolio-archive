import React, { Component } from "react";
import { getShots } from "../actions/shotsActions";
import { connect } from "react-redux";
import { ResponsiveContainer, PieChart, Pie } from "recharts";

export class ChartForAdditives extends Component {

  componentDidMount() {
    this.props.dispatch(getShots());
    // console.log(this.props)            // no shots yet at this point in time !
  }
  
  render() {
    const allShotsRaw = this.props.shots;

    const allShotsFiltered = allShotsRaw.filter(shot => shot.userId === this.props.user.id)
    
    const shotsList = allShotsFiltered.map((shot) => {
        return shot.arrayE
    })
    const allShotsMerged = [].concat.apply([], shotsList);
    // const additivesList = allShotsMerged.map((additive, index) => {
    //   return(
    //     <ul key={index}>
    //       <li>{additive}</li>
    //     </ul>
    //   )
    // })
    // console.log('SHOTS in chartpage:',shotsList)
    console.log('ALL SHOTS MERGED:',allShotsMerged)

    const uniqueCount = allShotsMerged

    const count = [];

    uniqueCount.forEach(function(i) { count[i] = (count[i]||0) + 1;});
    console.log(`count:`,count);

    const dataToGraph = Object.keys(count).map(key => ({ name: key, value: count[key] }))
    console.log(`dataToGraph:`,dataToGraph)

    // const actualPie = document.addEventListener('DOMContentLoaded', () => {})

    return (
      <div>
        <div className="container center">
          <h2>Your E-additives chart:</h2>
        </div>
        {/* <ul>
          <li style={{marginLeft:'200px'}}>{additivesList}</li>
        </ul> */}
        <ResponsiveContainer width="100%" height={500}>
          <PieChart height={500}>
            
                <Pie
                  data={dataToGraph}
                  isAnimationActive={false}
                  cx="50%"
                  cy="50%"
                  outerRadius={180}
                  fill="#000000"
                  paddingAngle={3}
                  dataKey="value"
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    value,
                    index
                  }) => {
                    console.log("handling label?");
                    const RADIAN = Math.PI / 180;
                    // eslint-disable-next-line
                    const radius = 25 + innerRadius + (outerRadius - innerRadius);
                    // eslint-disable-next-line
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    // eslint-disable-next-line
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                    
                    return (
                      <text
                        x={x}
                        y={y}
                        fill="#000000"
                        textAnchor={x > cx ? "start" : "end"}
                        dominantBaseline="central"
                      >
                        {dataToGraph[index].name} ({value})
                      </text>
                    );
                  }}
                />
              
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.user,
    shots: state.shots
  };
};

export default connect(mapStateToProps)(ChartForAdditives);