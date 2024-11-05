import { useEffect, useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useTranslation } from 'react-i18next';

const FetchUsers = () => {
    const [users,setUsers]= useState([]);

    useEffect(()=>{
        const fetchusers=async()=>{
            try{
                const response= await fetch("http://localhost:5000/api/user");
                const data= await response.json();
                setUsers(data);
            }
            catch(error){
                console.error("error while fetching users", error.message);
            }
        }
        fetchusers();
    },[]
);




return(
 <Container className="mt-5">
    <Row>
        <Col>
        <h2 className="text-center"> Registered Students</h2>
        <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Full Name</th>
            <th>Telephone</th>
            <th>Email</th>
            <th>Country</th>
            <th>Courses</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
            {users.map((user,index) =>(
                 <tr key={index}>
                 <td>{index + 1}</td>   
                 <td>{user.fullName}</td>
                 <td>{user.telephone}</td>
                 <td>{user.email}</td>
                 <td>{user.country}</td>
                 <td>{user.course}</td>
                 <td>{user.date}</td>
               </tr>



            ))}
         
          
        </tbody>
      </Table>
      </Col>
    </Row>
</Container>
    );
};
export default FetchUsers;