import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Input, List, Layout, Typography, Form, Space, Card, Row, Col } from 'antd';
import { PlusOutlined, LogoutOutlined } from '@ant-design/icons';
import Cookies from 'js-cookie';
import './index.css';

const { Header, Content } = Layout;
const { Title } = Typography;

const products = [
  { id: 1, name: 'Smartphone', description: 'A high-end smartphone with a sleek design and powerful features.' },
  { id: 2, name: 'Laptop', description: 'A lightweight laptop with a long battery life and high-resolution display.' },
  { id: 3, name: 'Headphones', description: 'Noise-canceling headphones with crystal clear sound quality.' },
  { id: 4, name: 'Smartwatch', description: 'A smartwatch with fitness tracking and notification features.' },
  { id: 5, name: 'Tablet', description: 'A versatile tablet perfect for work and play.' },
  { id: 6, name: 'Camera', description: 'A digital camera with high zoom and resolution.' },
  { id: 7, name: 'Bluetooth Speaker', description: 'A portable Bluetooth speaker with excellent sound quality.' },
  { id: 8, name: 'Gaming Console', description: 'A next-gen gaming console with stunning graphics and gameplay.' },
  { id: 9, name: 'Fitness Tracker', description: 'A fitness tracker that monitors your daily activity and health metrics.' },
  { id: 10, name: 'E-reader', description: 'An e-reader with a glare-free display and long battery life.' }
];

const Home = () => {
  const [items, setItems] = useState(products);
  const [newName, setNewName] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('name')) {
      navigate('/signup');
    }
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [navigate]);

  const changeName = (event) => setNewName(event.target.value);
  const changeDesc = (event) => setNewDesc(event.target.value);
  const addItem = () => {
    setItems((prevItems) => [...prevItems, { id: prevItems.length + 1, name: newName, description: newDesc }]);
    setNewName('');
    setNewDesc('');
  };
  const logout = () => {
    Cookies.remove('jwtToken');
    navigate('/login');
  };
  const search = (event) => setSearchInput(event.target.value);
  const deleteItem = (id) => setItems((prevItems) => prevItems.filter((item) => item.id !== id));

  const filteredList = items.filter((product) => product.name.toLowerCase().includes(searchInput.toLowerCase()));

  return (
    <Layout className="home-container">
      <Header className="header">
        <Title level={2} className="home-title">Product Inventory</Title>
        <Button type="primary" icon={<LogoutOutlined />} onClick={logout}>
          Logout
        </Button>
      </Header>
      <Content className="content">
        <Card className="input-section">
          <Form layout="vertical">
            <Row gutter={16}>
              <Col span={10}>
                <Form.Item label="Product Name">
                  <Input placeholder="Product Name" value={newName} onChange={changeName} />
                </Form.Item>
              </Col>
              <Col span={10}>
                <Form.Item label="Product Description">
                  <Input.TextArea placeholder="Product Description" value={newDesc} onChange={changeDesc} />
                </Form.Item>
              </Col>
              <Col span={4} style={{ display: 'flex', alignItems: 'center' }}>
                <Button type="primary" icon={<PlusOutlined />} onClick={addItem}>
                  ADD PRODUCT
                </Button>
              </Col>
            </Row>
          </Form>
        </Card>
        <Card className="search-section">
          <Form layout="vertical">
            <Form.Item label="Search Products">
              <Input type="search" placeholder="Search Products" onChange={search} />
            </Form.Item>
          </Form>
        </Card>
        <List
          grid={{ gutter: 16, column: 3 }}
          className="product-list"
          dataSource={filteredList}
          renderItem={(product) => (
            <List.Item>
              <Card
                title={product.name}
                extra={<Button type="link" danger onClick={() => deleteItem(product.id)}>Delete</Button>}
              >
                {product.description}
              </Card>
            </List.Item>
          )}
        />
      </Content>
    </Layout>
  );
};

export default Home;
