import React from 'react';
import * as d3 from "d3";

const WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

const x = d3.scaleLinear()
    .domain([0, 1])
    .range([0, WIDTH]);

const y = d3.scaleLinear()
    .domain([0, 1])
    .range([150, HEIGHT - 150]);

const r = d3.scaleSqrt()
    .domain([0, 1])
    .range([0, 30]);

class RectElement extends React.Component {
    constructor(props) {
        super(props);
        this.svgRef = React.createRef();
    }

    componentDidUpdate() {
        var item = d3.select(this.svgRef.current).selectAll('rect')
            .data(this.props.items, function (d) { return d.key; });

        item.enter().append('rect')
            .attr('class', 'item')
            // .attr('r', function (d) { return r(d.r); })
            .attr('width', function (d) { return r(d.r); })
            .attr('height', function (d) { return r(d.r); })
            .attr('x', function (d) { return x(d.x); })
            .attr('y', 0)
            .style("transform", `rotate(${Math.floor(Math.random()*2) == 1 ? Math.ceil(Math.random()*50) : Math.ceil(Math.random()*(-50))}deg)`)
            .attr('fill', 'none')
            .style('stroke', '#3E6E9C')
            .transition().duration(3000)
            .attr('y', function (d) { return y(d.y); })
            .style('stroke', '#81E797');
        

        item.exit().filter(':not(.exiting)') // Don't select already exiting nodes
            .classed('exiting', true)
            .transition().duration(5000)
            .attr('y', HEIGHT)
            .style('stroke', '#81E797')
            .remove();
    }


    render() {
        return <svg ref={this.svgRef} width={WIDTH} height={HEIGHT}></svg>;
    }
}

export default RectElement;