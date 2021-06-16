import React from "react";
import ReactMarkdown from 'react-markdown'

export default class Article extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ''
    }

    this.getContent = this.getContent.bind(this);
  }

  componentDidMount() {
    this.getContent();
  }

  getContent() {
    fetch(`/read/${this.props.name}.txt`)
    .then(data => data.text())
    .then(text => this.setState({content: text}));
  }

  render() {
    return(
      <div>
        <ReactMarkdown>{this.state.content}</ReactMarkdown>
      </div>
    )
  }
}
