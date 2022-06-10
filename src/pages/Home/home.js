import React from "react";
import "../../style.css";
import { Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb , Button} from 'antd';
const { Header, Content, Footer } = Layout;


function Home(){
    return(
<Layout>
    <Header
      style={{
        position: 'fixed',
        width: '100%',
      }}
    >
      <Menu
        theme="dark"
        mode="horizontal"
        items={[
            {
              key: '1',
            
              label: 'Home',
            },
            {
              key: '2',
        
              label: 'Modelos',
            },
            {
              key: '3',
            
              label: 'Perfil',
            },
          ]}
      />
    </Header>
     <Content
      className="site-layout"
      style={{
        padding: '0 50px',
        marginTop: 64,
      }}
    >
      <Breadcrumb
        style={{
          margin: '16px 0',
        }}
      >
        <Breadcrumb.Item> Curriculo</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <div className="container">
            <h2 className="welcome">Olá!</h2>
          <Link to="/Curriculo">
     <Button type="primary">
         Acesse o Curriculo aqui!!
     </Button>
 </Link>
        </div>
      </div>
    </Content>
    </Layout>
    
    )
};
export default Home;