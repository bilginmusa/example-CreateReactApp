import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Users from "./pages/Users";
import Error404 from "./pages/Error404";
import { Layout, Menu } from "antd";
const { Sider, Content } = Layout;
function App() {
  return (
    <Router>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1">
              <span>Home</span>
              <Link to="/" />
            </Menu.Item>
            <Menu.Item key="2">
              <span>Users</span>
              <Link to="/users" />
            </Menu.Item>
          </Menu>
        </Sider>

        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
          }}
        >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" component={Users} />
            <Route path="*" component={Error404} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}
export default App;
