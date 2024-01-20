let skillsGraph = (id) =>{
    // set the dimensions and margins of the graph
    const margin = {top: 20, right: 120, bottom: 40, left: 120},
        width = document.body.clientWidth - margin.left - margin.right,
        height = 600 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3.select(id)
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

    // Parse the Data
    d3.csv("/javascripts/skills_data.csv", function(data) {

    // Add X axis
    const x = d3.scaleLinear()
        .domain([0, 10])
        .range([ 0, width]);
    svg.append("g")
        .text("Years of Experience")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-45)")
        .style("text-anchor", "end");

    // Y axis
    const y = d3.scaleBand()
        .range([ 0, height ])
        .domain(data.map(function(d) { return d.skills; }))
        .padding(1);
    svg.append("g")
        .call(d3.axisLeft(y))

    const tip = d3.tip().attr('class', 'd3-tip').html(function(d) { return  "<strong><span style='color:#2c3e50;font-size:9.5px;margin-left:25px;'>"+d.years+"</span></strong>"; });

    svg.call(tip);

    // Lines
    svg.selectAll("myline")
    .data(data)
    .enter()
    .append("line")

    // Circles
    svg.selectAll("mycircle")
    .data(data)
    .enter()
    .append("circle")
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide)

    // Animation
    svg.selectAll("line")
        .transition()
        .duration(1100)
        .attr("x1", function(d) { if(d.years != "NaN" || d.year != null){return x(d.years);}else{return 0;} })
        .attr("x2", x(0))
        .attr("y1", function(d) { return y(d.skills); })
        .attr("y2", function(d) { return y(d.skills); })
        .attr("stroke", "rgb(152 180 208)")
        .delay(function(d,i){; return(i*50)})

    svg.selectAll("circle")
        .transition()
        .duration(1000)
        .attr("cx", function(d) { return x(d.years); })
        .attr("cy", function(d) { return y(d.skills); })
        .attr("r", "7")
        .style("fill", "rgb(152 180 208)")
        .attr("stroke", "#2c3e50")
        .delay(function(d,i){; return(i*100)})

    })
}