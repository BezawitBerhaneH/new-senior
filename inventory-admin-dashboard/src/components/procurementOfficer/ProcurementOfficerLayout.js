// src/components/procurementOfficer/ProcurementOfficerLayout.js
import React, { useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  PieChartOutlined,
  BellOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
 // Ensure you have header styles
import '../../styles/ProcurementOfficer/ProcurementOfficer.css'; // Your procurement officer styles

const { Header, Content, Footer, Sider } = Layout;

const ProcurementOfficerLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const colorBgContainer = "green"

  const items = [
    { key: '1', label: <Link to="/procurement-officer/">Requested Items</Link>, icon: <PieChartOutlined /> },
    { key: '2', label: <Link to="/procurement-officer/notifications">Notifications</Link>, icon: <BellOutlined /> },
    { key: '3', label: <Link to="/procurement-officer/supplier-communication">Supplier Communication</Link>, icon: <FileOutlined /> },
    { key: '4', label: <Link to="/procurement-officer/generate-report">Generate Report</Link>, icon: <FileOutlined /> },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className='Header'style={{ position: 'fixed', width: '100%', zIndex: 1, backgroundColor: '#4CAF50', color:'white' }
    } >
      
     <h2>Procurement Officer</h2> 
     <span style={{ position: 'fixed', right: '10px', top: '0', padding: '10px', fontSize: '24px' }}>🔔</span>
    </Header>
      <Layout style={{ marginTop: 64 }}> {/* Add margin to push content below header */}
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
          style={{ backgroundColor: colorBgContainer, color: "black"}}
          className='procuremt-officer-tab' // Set sidebar color to green
        >
          <div className="demo-logo-vertical" />
          <Menu theme="green" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Content style={{ margin: '16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
           
            </Breadcrumb>
            <div style={{  padding: 24, minHeight: 360}}>
              {children } 
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default ProcurementOfficerLayout;
