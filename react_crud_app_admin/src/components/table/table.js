import { useEffect, useState } from "react";
import { Container, Row, Col, Table, Button } from "react-bootstrap";
import { useTranslation } from 'react-i18next';
import logo from '../images/logowhite.png'; // Replace this with the correct path to your logo image
// import './table.css';

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://node-crud-app-fwr0.onrender.com/api/user");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error("Error while fetching users:", error.message);
            }
        };

        fetchUsers();
    }, []);
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;
    
        try {
            const response = await fetch(`https://node-crud-app-fwr0.onrender.com/api/api/deleteusers/${id}`, {
                method: "DELETE",
            });
    
            if (response.ok) {
                setUsers(users.filter((user) => user._id !== id)); // Update state after successful deletion
                alert("User deleted successfully!");
            } else if (response.status === 404) {
                alert("User not found!");
            } else {
                console.error("Failed to delete user");
            }
        } catch (error) {
            console.error("Error while deleting user:", error.message);
        }
    };
    

    return (
        <div className="cont">
        <Container className="mt-5">
            <Row className="text-center">
                <Col>
                    {/* Logo at the top */}
                    <img src={logo} alt="Logo" className="mb-3" style={{ maxWidth: "200px" }} />
                    <h2 className="text-orange mb-4"style={{  color: 'orange'  }}>{/* Replace with your own color */}
                        {t("Registered Students")}
                    </h2>
                    <Table striped bordered hover variant="light">
                        <thead style={{ backgroundColor: '#f8f9fa' }}>
                            <tr>
                                <th>#</th>
                                <th>Full Name</th>
                                {/* <th>Telephone</th> */}
                                <th>WhatsappNumber</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Courses</th>
                                <th>Additional Courses</th>
                                <th>learningMode</th>
                                <th>Date</th>
                                <th>Actions</th> {/* New column for actions */}

                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr
                                   
                                    key={index}
                                    style={{
                                        backgroundColor: index % 2 === 0 ? 'white' : '#e0f7fa', // Zebra stripe effect with white and light blue
                                    }}
                                >
                                    <td>{index + 1}</td>
                                    <td>{user.fullName}</td>
                                    {/* <td >{user.telephone}</td> */}
                                    <td >{user.whatsappNumber}</td>

                                    <td>{user.email}</td>
                                    <td>{user.country}</td>
                                    <td>{user.course}</td>
                                    <td>{user.additionalcourses}</td>
                                    <td>{user.learningMode}</td>
                                    <td>{user.date}</td>
                                    <td>
                                            <Button
                                                variant="danger"
                                                size="sm"
                                                
                                                onClick={() => {
                                                    console.log(user); // Log the user object
                                                    handleDelete(user._id); // Ensure _id is present
                                                }}
                                            >
                                                Delete
                                            </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default FetchUsers;
