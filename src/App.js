
import 'antd/dist/antd.min.css';
import { UserOutlined } from '@ant-design/icons';
import { Button, Tooltip, Input } from 'antd';
import { useState } from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import {Row, Col} from 'antd';
import './App.css';
const { Meta } = Card;



function App() {
  const [loading, setLoading] = useState(false);
  const buttonCLicked = () =>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    console.log("Hello");
  }
  return (
    <div className="App">
      <header className="App-header">
       {/* <Button type="primary" block className='my-button' onClick={buttonCLicked} icon={<PoweroffOutlined />} > */}
      {/* Hello */}
    {/* </Button> */}
    {/* <Input placeholder='Name' prefix={<UserOutlined/>} allowClear maxLength={10} type='password'>
    </Input.Search> */}
     
    

    <Row gutter={16}>
      <Col span={6}>
      <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
      <Col span={6}>
      <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
      <Col span={6}>
      <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
      <Col span={6}>
      <Card
    style={{
      width: 300,
    }}
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="Card title"
      description="This is the description"
    />
  </Card>
      </Col>
    </Row>
      </header>
    </div>
  );
}

export default App;
