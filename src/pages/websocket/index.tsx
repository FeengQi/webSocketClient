import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';

const { TextArea } = Input;

export interface LoginProps {

}

interface LoginState {

}

export default class WebSockets extends Component<LoginProps, LoginState> {

  state = {
    status: false,
    ws: null,
    test: '',
  };

  componentDidMount(): void {
    this.initWebSockets('ws://192.168.31.79:8888');
  }

  initWebSockets = (url) => {
    const ws = new WebSockets(url);
    console.log(ws);

    ws.onopen = () => {
      ws.close();
      // ws.send('Hello Server!');
      this.setState({
        ws,
        status: true,
      });
    };

    ws.onmessage = () => {
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

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return <div>
      <Row>
        <Col span={8}/>
        <Col span={8}><TextArea onClick={this.handleChange}/></Col>
        <Col span={8}/>
      </Row>
    </div>;
  }
}

