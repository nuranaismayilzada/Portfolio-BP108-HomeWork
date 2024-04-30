import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactAudioPlayer from 'react-audio-player';


function Index() {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [editItemId, setEditItemId] = useState(null);
    const [data, setData] = useState([]);
    const [editedProduct, setEditedProduct] = useState({
        id: "",
        name: "",
        unitPrice: "",
        unitsInStock: "",
        quantityPerUnit: ""
    });

    const handleClose = () => {
        setShowDeleteModal(false);
        setShowEditModal(false);
        setDeleteItemId(null);
        setEditItemId(null);
        setEditedProduct({
            id: "",
            name: "",
            unitPrice: "",
            unitsInStock: "",
            quantityPerUnit: ""
        });
    };

    const handleShowDeleteModal = (id) => {
        setShowDeleteModal(true);
        setDeleteItemId(id);
    };

    const handleShowEditModal = (id) => {
        setShowEditModal(true);
        setEditItemId(id);
        const product = data.find(item => item.id === id);
        setEditedProduct({
            id: product.id,
            name: product.name,
            unitPrice: product.unitPrice,
            unitsInStock: product.unitsInStock,
            quantityPerUnit: product.quantityPerUnit
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios("https://northwind.vercel.app/api/products").then((res) => {
            setData(res.data);
        });
    };

    const handleDelete = () => {
        axios.delete(`https://northwind.vercel.app/api/products/${deleteItemId}`)
            .then(() => {
                setData(data.filter(item => item.id !== deleteItemId));
                handleClose();
                toast.success("Məhsul silindi.");
            })
            .catch(error => {
                toast.error("Məhsul silinməsində problem baş verdi.");
            });
    };

    const handleEdit = () => {
        axios.put(`https://northwind.vercel.app/api/products/${editItemId}`, editedProduct)
            .then(() => {
                setData(data.map(item => item.id === editItemId ? editedProduct : item));
                handleClose();
                toast.success("Məhsul uğurla yeniləndi..");
            })
            .catch(error => {
                toast.error("Məhsul yenilənə bilmədi.");
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Unit in Stock</th>
                        <th>Quantity per Unit</th>
                        <th>Delete Product</th>
                        <th>Update Product</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((elem) => (
                        <tr key={elem.id}>
                            <td>{elem.id}</td>
                            <td>{elem.name}</td>
                            <td>{elem.unitPrice}</td>
                            <td>{elem.unitsInStock}</td>
                            <td>{elem.quantityPerUnit}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleShowDeleteModal(elem.id)}>Delete</Button>
                            </td>
                            <td>
                                <Button variant="primary" onClick={() => handleShowEditModal(elem.id)}>Update</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showDeleteModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Sil baştan</Modal.Title>
                </Modal.Header>
                <Modal.Body>Sil baştan başlamak gerek bazennn</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Ləğv et</Button>
                    <Button variant="danger" onClick={handleDelete}>Sil</Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showEditModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="editProductName">
                            <Form.Label>Product Name</Form.Label>
                            <Form.Control type="text" name="name" value={editedProduct.name} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="editUnitPrice">
                            <Form.Label>Unit Price</Form.Label>
                            <Form.Control type="text" name="unitPrice" value={editedProduct.unitPrice} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="editUnitsInStock">
                            <Form.Label>Unit in Stock</Form.Label>
                            <Form.Control type="text" name="unitsInStock" value={editedProduct.unitsInStock} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group controlId="editQuantityPerUnit">
                            <Form.Label>Quantity per Unit</Form.Label>
                            <Form.Control type="text" name="quantityPerUnit" value={editedProduct.quantityPerUnit} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                    <Button variant="primary" onClick={handleEdit}>Save Changes</Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer />

        </>
        
    );
}

export default Index;
