import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';

const { TextArea } = Input;


export default class WebSockets extends Component {

  state = {
    status: false,
    ws: null,
    test: '',
  };

  componentDidMount() {
    this.initWebSockets('ws://192.168.31.79:8888/');
  }

  initWebSockets = (url) => {
    const ws = new WebSocket(url);
    ws.onopen = () => {
      this.setState({
        ws,
        status: true,
      });
    };

    ws.onmessage = (data) => {
      this.setState({ text: data.data });
    };
  };

  handleChange = (e) => {
    const { ws } = this.state;
    const { value } = e.target;

    this.setState({ text: value });
    ws.send(value);
  };

  render() {
    const { status, text } = this.state;
    return <div>
      <Row>
        <Col span={8}/>
        <Col span={8}>
          <TextArea
            onChange={this.handleChange}
            value={text}
            disabled={!status}
          />
          {this.state.a}
        </Col>
        <Col span={8}/>
      </Row>
    </div>;
  }
}

