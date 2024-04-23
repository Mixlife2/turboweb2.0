import { Router } from 'express';
import { UsersManager } from '../dao/DBmanager/usersManager.js';

export const router=Router()

const usersManager = new UsersManager();

// Crear un usuario
router.post('/', async (req, res) => {
  try {
    const newUser = await usersManager.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});

// Obtener un usuario por ID
router.get('/:id', async (req, res) => {
  try {
    const user = await usersManager.getBy(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el usuario' });
  }
});

// Obtener todos los usuarios
router.get('/', async (req, res) => {
    try {
      const allUsers = await usersManager.getAllUsers();
      res.status(200).json(allUsers);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener todos los usuarios' });
    }
  });

  


// Actualizar un usuario
router.put('/:id', async (req, res) => {
  try {
    const updatedUser = await usersManager.update(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el usuario' });
  }
});

// Eliminar un usuario
router.delete('/:id', async (req, res) => {
  try {
    await usersManager.delete(req.params.id);
    res.status(204).json({ message: 'Usuario eliminado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el usuario' });
  }
});

export default router;
