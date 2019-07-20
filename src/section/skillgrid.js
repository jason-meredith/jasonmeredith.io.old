import React from "react";

class SkillGrid extends React.Component {


    constructor(props) {
        super(props)



        this.grid = this.grid.bind(this)
        //this.shuffle = this.shuffle.bind(this)

    }


    grid() {

        return this.props.skills.map( (skill) => {
            return <SkillIcon key={skill} name={skill} lit={ this.props.lit.includes(skill) }/>
        })
    }

    render() {
        return(
            <div className={"grid"}>
                {this.grid()}
            </div>
        )
    }
}

class SkillIcon extends React.Component {

    constructor(props) {
        super(props)

        this.icon = this.icon.bind(this)
    }

    icon() {
        if(this.props.lit) {
            return <img alt={this.props.name} className={"icon highlight highlighted"} src={"img/skills/" + this.props.name + ".png"} />
        } else {
            return <img alt={this.props.name} className={"icon highlight"} src={"img/skills/" + this.props.name + ".png"} />
        }
    }

    render() {
        return(
            <div>
                {this.icon()}
            </div>
        )
    }
}

export default SkillGrid