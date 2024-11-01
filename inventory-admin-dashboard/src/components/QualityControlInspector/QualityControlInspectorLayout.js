// src/components/QualityControlInspector/QualityControlInspectorLayout.js
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Route, Routes } from 'react-router-dom';
import { FileSearchOutlined, CheckSquareOutlined, ExclamationCircleOutlined, AuditOutlined } from '@ant-design/icons';
import IncomingInventory from './IncomingInventory';
import InspectionResults from './InspectionResults';
import CorrectiveActions from './CorrectiveActions';
import QualityAssuranceChecks from './QualityAssuranceChecks';
import '../../styles/ProcurementOfficer/ProcurementOfficer.css';
const { Header, Sider, Content } = Layout;

const QualityControlInspectorLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <Menu style={{paddingTop:'100px',gap:'10px'}}theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<FileSearchOutlined />}>
            <Link to="incoming-inventory">Incoming Inventory</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<CheckSquareOutlined />}>
            <Link to="inspection-results">Inspection Results</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<ExclamationCircleOutlined />}>
            <Link to="corrective-actions">Corrective Actions</Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<AuditOutlined />}>
            <Link to="quality-assurance-checks">Quality Assurance Checks</Link>
          </Menu.Item>
        </Menu>
      </Sider>

      <Layout>
        <Header style={{ background: '#4CAF50', color: 'white', textAlign: 'left', marginBottom:'10px' }}>
          Quality Control Inspector Dashboard
        </Header>
        <Content style={{ margin: '16px' }}>
          <Routes>
            <Route path="incoming-inventory" element={<IncomingInventory />} />
            <Route path="inspection-results" element={<InspectionResults />} />
            <Route path="corrective-actions" element={<CorrectiveActions />} />
            <Route path="quality-assurance-checks" element={<QualityAssuranceChecks />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default QualityControlInspectorLayout;
