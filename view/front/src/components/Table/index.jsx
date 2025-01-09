import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import axios from 'axios';

function DataTable() {
    const [data, setData] = useState([]);
    const [selectedCar, setSelectedCar] = useState(null);  
    const [isDetailVisible, setIsDetailVisible] = useState(false); 

    async function getData() {
        await axios.get("http://localhost:3001/cars")
            .then((res) => setData(res.data));
    }

    async function handleDelete(id) {
        await axios.delete(`http://localhost:3001/cars/${id}`);
        getData();
    }

    function handleViewDetails(car) {
        setSelectedCar(car);
        setIsDetailVisible(true);  
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Brand Name</th>
                        <th>Model Name</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((car) => (
                        <tr key={car._id}>
                            <td>{car._id}</td>
                            <td>{car.brandName}</td>
                            <td>{car.modelName}</td>
                            <td>{car.year}</td>
                            <td>
                                <button onClick={() => handleViewDetails(car)}>View Details</button>
                                <button onClick={() => handleDelete(car._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

          
            {isDetailVisible && selectedCar && (
                <div className="car-details">
                    <h3>Car Details</h3>
                    <table>
                        <tbody>
                            <tr>
                                <td>Brand Name:</td>
                                <td>{selectedCar.brandName}</td>
                            </tr>
                            <tr>
                                <td>Model Name:</td>
                                <td>{selectedCar.modelName}</td>
                            </tr>
                            <tr>
                                <td>Year:</td>
                                <td>{selectedCar.year}</td>
                            </tr>
                            <tr>
                                <td>Color:</td>
                                <td>{selectedCar.color}</td>
                            </tr>
                            <tr>
                                <td>Description:</td>
                                <td>{selectedCar.description}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button onClick={() => setIsDetailVisible(false)}>Close Details</button>
                </div>
            )}
        </div>
    );
}

export default DataTable;
