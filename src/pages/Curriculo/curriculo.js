import React, {useState} from "react";
import "../../style.css";
import { Layout, Menu, Breadcrumb } from 'antd';
import AddTodo from "../../components/AddTodo";
import TodoList from "../../components/TodoList";
import TodoProvider from "../../contexts/TodoContex";
const { Header, Content, Footer } = Layout;

const  Curriculo = () =>{
 
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
        <Breadcrumb.Item>Seu Curriculo</Breadcrumb.Item>
      </Breadcrumb>
      <div
        className="site-layout-background"
        style={{
          padding: 24,
          minHeight: 380,
        }}
      >
        <div className="container">
            <h2 className="name">willinny karla</h2>
            <p className="infor">Aluna do curso de sistemas para internat na UNICAP.</p>
        </div>
        <br/>
        <hr/>
        <br/>
        <div>
            <h3 className="container-Objet">Objetivo</h3>
            <p className="option">Analista de sistemas</p>
        </div>
        <div >
            <h3 className="container-Objet">Experiência profissional</h3>
            <div className="option">
            <h4>Estagio</h4>
            <p>Porto | 2020 - Aos dias atuais.</p>
            <p>Assistência à equipe</p> 
            </div>
          

            <div className="option">
                <h4>Lider</h4>
            <p >Loja Saude | 2019 - 2019</p>
            <p >Líder da equipe de venda, assistente de gestão de estoque e vitrine.</p> 
    </div>
            <h3 className="container-Objet">Formação Academica</h3>
            <div className="option">
                <h4>Engenharia de produção</h4>
                <p>Universidade FBV | 2015 - 2020</p>
            </div>
            <h3 className="container-Objet">Habilidades</h3>
            <div className="option">
             <TodoProvider>
      <TodoList></TodoList>
      <br/>
      <hr/>
      <br/>

      <AddTodo></AddTodo>
  </TodoProvider>
            </div>
        </div>
      </div>
    </Content>
    <Footer
      style={{
        textAlign: 'center',
      }}
    >
      (12) 97750931 | email@email.com | Rua boa vista, 123456 - Cidade Recife 
    </Footer>
  </Layout>
);


};
export default Curriculo;