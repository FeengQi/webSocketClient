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
    this.initWebSockets('ws://192.168.31.79:8888');
  }

  initWebSockets = (url) => {
    const ws = new WebSockets(url);
    console.log(ws);
    ws.send('');
    ws.onopen = () => {
      ws.close();
      // ws.send('Hello Server!');
      this.setState({
        ws,
        status: true,
      });
    };

    ws.onmessage = (data) => {
      console.log('我收到服务器的数据了');
      this.setState({
        text: data.data,
      });
    };
  };

  handleChange = (e) => {
    const { ws } = this.state;
    const { value } = e.target;

    this.setState({
      text: value,
    });
    // ws.send(value);
  };

  render() {
    return <div>
      <Row>
        <Col span={8}/>
        <Col span={8}><TextArea onClick={this.handleChange}/>1</Col>
        <Col span={8}/>
      </Row>
    </div>;
  }
}

