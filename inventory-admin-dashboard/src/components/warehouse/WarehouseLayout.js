// src/components/warehouse/WarehouseLayout.js
import React, { useState } from 'react';
import { Layout, Menu, Tabs } from 'antd';
import { DatabaseOutlined, FileSyncOutlined, ContainerOutlined, HistoryOutlined } from '@ant-design/icons';
import WarehouseDashboard from './WarehouseDashboard';
import InventoryRecords from './InventoryRecords';
import StorageAllocation from './StorageAllocation';
import OrderFulfillment from './OrderFulfillment';
import InternalTransfers from './InternalTransfers';
import '../../styles/ProcurementOfficer/ProcurementOfficer.css';

const { Header, Sider, Content } = Layout;

const WarehouseLayout = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const onTabChange = (key) => {
    setActiveTab(key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="warehouse-header">Warehouse Staff Dashboard</Header>
      <Layout>
        <Sider collapsible>
          <Menu theme="dark" defaultSelectedKeys={['dashboard']} mode="inline">
            <Menu.Item key="dashboard" icon={<DatabaseOutlined />} onClick={() => setActiveTab("dashboard")}>
              Inventory Management
            </Menu.Item>
            <Menu.Item key="records" icon={<HistoryOutlined />} onClick={() => setActiveTab("records")}>
              Inventory Records
            </Menu.Item>
          </Menu>
        </Sider>
        <Content style={{ padding: '24px', background: '#fff' }}>
          <Tabs activeKey={activeTab} onChange={onTabChange}>
            <Tabs.TabPane tab="Dashboard" key="dashboard">
              <WarehouseDashboard />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Inventory Records" key="records">
              <InventoryRecords />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Storage Allocation" key="allocation">
              <StorageAllocation />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Order Fulfillment" key="fulfillment">
              <OrderFulfillment />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Internal Transfers" key="transfers">
              <InternalTransfers />
            </Tabs.TabPane>
          </Tabs>
        </Content>
      </Layout>
    </Layout>
  );
};

export default WarehouseLayout;
