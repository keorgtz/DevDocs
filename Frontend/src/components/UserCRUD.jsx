import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';

// Estilos usando styled-components
const Container = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
`;

const TableHead = styled.thead`
  background-color: #f4f4f4;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

const TableCell = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  color: red;
`;

Modal.setAppElement('#root');

const UserCRUD = () => {
  const [users, setUsers] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: '',
    role: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Función para cargar los usuarios
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get('http://localhost:3030/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      // Redirigir a la página de login si hay un error de autorización
      navigate('/login');
    }
  };

  // Cargar los usuarios cuando el componente se monta
  useEffect(() => {
    fetchUsers();
  }, []);

  // Función para manejar la apertura del modal
  const openModal = (user = null) => {
    if (user) {
      setCurrentUser({
        uuid: user.uuid,
        name: user.name,
        email: user.email,
        password: '',
        confPassword: '',
        role: user.role,
      });
    } else {
      setCurrentUser({
        name: '',
        email: '',
        password: '',
        confPassword: '',
        role: '',
      });
    }
    setModalIsOpen(true);
  };

  // Función para manejar el cierre del modal
  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentUser({
      name: '',
      email: '',
      password: '',
      confPassword: '',
      role: '',
    });
    setError('');
  };

  // Función para manejar el cambio en los inputs del modal
  const handleChange = (e) => {
    setCurrentUser({
      ...currentUser,
      [e.target.name]: e.target.value,
    });
  };

  // Función para manejar la creación o edición de un usuario
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentUser.password !== currentUser.confPassword) {
      setError('Las Contraseñas no Coinciden');
      return;
    }

    const token = localStorage.getItem('token');
    const userPayload = {
      name: currentUser.name,
      email: currentUser.email,
      password: currentUser.password,
      confPassword: currentUser.confPassword,
      role: currentUser.role,
    };

    try {
      if (currentUser.uuid) {
        await axios.patch(`http://localhost:3030/users/${currentUser.uuid}`, userPayload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      } else {
        await axios.post('http://localhost:3030/users', userPayload, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
      fetchUsers();
      closeModal();
    } catch (error) {
      setError('Error saving user');
      console.error('Error saving user:', error);
    }
  };

  // Función para manejar la eliminación de un usuario
  const handleDelete = async (uuid) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3030/users/${uuid}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <Container>
      <Button onClick={() => openModal()}>Crear Usuario</Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {users.map((user, index) => (
            <TableRow key={user.uuid}>
              <TableCell>{index+1}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>
                <Button onClick={() => openModal(user)}>Editar</Button>
                <Button onClick={() => handleDelete(user.uuid)}>Eliminar</Button>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <ModalContent>
          <h2>{currentUser?.uuid ? 'Editar Usuario' : 'Crear Usuario'}</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Nombre"
              value={currentUser.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={currentUser.email}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={currentUser.password}
              onChange={handleChange}
              required
            />
            <Input
              type="password"
              name="confPassword"
              placeholder="Confirmar Contraseña"
              value={currentUser.confPassword}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="role"
              placeholder="Rol"
              value={currentUser.role}
              onChange={handleChange}
              required
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <Button type="submit">{currentUser?.uuid ? 'Guardar' : 'Crear'}</Button>
          </form>
          <Button onClick={closeModal}>Cancelar</Button>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default UserCRUD;
